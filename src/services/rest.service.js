/*globals _*/
(function () {
  'use strict';

  /** @ngInject */
  function RestService(uiGenericsProvider, $location, $http, $q, $window, uigCacheService, uigRestHelper, $log, $timeout) {

    /**
     * This function encapsulates making a RESTful request to a specific API route (op)
     *
     * @param op
     * @param cacheTag
     * @param cacheStorageType
     *
     * @returns {{create: create, list: list, one: one, remove: remove, update: update}}
     * @constructor
     */
    function Service(op, cacheTag, cacheStorageType) {
      var url = (op) ? uiGenericsProvider.apiUrl + '/' + op : uiGenericsProvider.apiUrl,
        cacheService = uigCacheService.init(cacheStorageType),
        cacheKeyPrefix = uiGenericsProvider.cacheKeyPrefix,
        deferredTimeoutMs = 300,
        deferredTimeout = null,
        unknownError = 'An unknown error occurred.';

      /**
       * Pushes a deferred request into the queue
       *
       * @param httpVerb
       * @param id
       * @param data
       * @param cacheKey
       * @param callback
       */
      var defer = function (httpVerb, id, data, cacheKey, callback) {
        uigRestHelper.defer({
          httpVerb: httpVerb,
          id: id,
          data: data,
          cacheKey: cacheKey,
          cacheTag: cacheTag,
          callback: callback,
          op: op,
          cacheStorageType: cacheStorageType,
          makeRequest: makeRequest
        });
      };

      /**
       * Run Deferred Requests
       */
      var runDeferredRequests = function () {
        uigRestHelper.runDeferredRequests();
      };

      /**
       * Executes the HTTP request
       *
       * @param httpVerb
       * @param data
       * @param id
       * @param cacheKey
       * @param cachedQueries
       */
      var executeRequest = function (httpVerb, data, id, cacheKey, cachedQueries) {
        var requestUrl = (id) ? url + '/' + id : url,
          requestData = data || {},
          singleCall = httpVerb === 'GET' || httpVerb === 'DELETE';

        if (singleCall) {
          requestData = singleCall && angular.isArray(data) ? data.join('&') + '&' || '' : '';
          requestUrl += '?' + requestData + uiGenericsProvider.getAuthString();
          requestUrl += (uiGenericsProvider.cachingEnabled && cacheKey) ? '&cacheKey=' + cacheKeyPrefix + cacheKey : '';
        } else {
          requestData = angular.extend(requestData, uiGenericsProvider.authContext);
          requestData.cacheTag = cacheTag;

          if (uiGenericsProvider.cachingEnabled && cacheKey) {
            requestData.cacheKey = cacheKeyPrefix + cacheKey;
          }
        }

        var request = $http({
          method: httpVerb,
          url: requestUrl,
          data: requestData
        });

        return ( request.then(function (response) {
          return handleSuccess(response, {
            httpVerb: httpVerb,
            data: data,
            id: id,
            cacheKey: cacheKey,
            cacheTag: cacheTag,
            cachedQueries: cachedQueries
          });
        }, handleError) );
      };

      /**
       * Finds a deeply nested message or returns null if not found
       *
       * @param obj
       * @returns {*}
       */
      var findMessage = function (obj) {
        if (typeof obj === 'object') {
          if (obj.hasOwnProperty('message')) {
            return obj.message;
          } else {
            for (var k in obj) {
              if (obj.hasOwnProperty(k)) {
                if (angular.isObject(obj[k])) {
                  return findMessage(obj[k]);
                }
              }
            }

            return null;
          }
        }
        return null;
      };

      /**
       * Handle Cache Reset(ting)
       *
       * @param response
       */
      var handleCacheReset = function (response) {
        if (response.hasOwnProperty('CACHE_RESET')) {
          var cacheReset = parseInt(response.CACHE_RESET),
            curCacheReset = parseInt(cacheService.get('CACHE_RESET'));

          if (curCacheReset < cacheReset) {
            cacheService.clear();
          }

          cacheService.set('CACHE_RESET', cacheReset);
        }
      };

      /**
       * Handles error responses from the server
       *
       * @param response
       * @returns {*}
       */
      var handleError = function (response) {
        deferredTimeout = $timeout(runDeferredRequests, deferredTimeoutMs);

        if (response.status && response.status === 401) {
          //User is not authenticated
          if (response.data.url) {
            $window.location.href = response.data.url;
          } else {
            if ($location.path() === uiGenericsProvider.authUrl) {
              return ( $q.reject(response.data) );
            } else {
              $location.path(uiGenericsProvider.authUrl);
              return ( $q.reject(response.data) );
            }
          }
        } else if (response.status && response.status === 403) {
          //User doesn't have access to requested resource
          $window.location.href = uiGenericsProvider.authUrl;
        } else if (null !== response.data && response.data.hasOwnProperty('message')) {
          //look for a nested message
          response.data.message = findMessage(response.data);

          return ( $q.reject(response.data) );
        } else {
          return ( $q.reject(unknownError) );
        }
      };

      /**
       * Handles successful responses from the server
       *
       * @param response
       * @param request
       */
      var handleSuccess = function (response, request) {
        deferredTimeout = $timeout(runDeferredRequests, deferredTimeoutMs);

        if (typeof response.data === 'string') {
          response.data = {
            success: true,
            message: '',
            result: response.data
          };
        }

        if (!response.data || response.data === '') {
          return;
        }

        if (!response.data.success) {
          if (!response.data.hasOwnProperty('message')) {
            response.data.message = findMessage(response.data) || unknownError;
          }
        }

        if (uiGenericsProvider.cachingEnabled) {
          try {
            if (request.httpVerb === 'POST' && request.id === 'm') {
              if (request.data.hasOwnProperty('queries')) {
                _.each(request.data.queries, function (q) {
                  if (q.hasOwnProperty('cache') && q.cache) {
                    cacheService.set(cacheKeyPrefix + q.id, response.data.queries[q.id]);
                  }
                });

                _.each(request.cachedQueries, function (q) {
                  if (cacheService.has(cacheKeyPrefix + q.id)) {
                    response.data.queries[q.id] = cacheService.get(cacheKeyPrefix + q.id);
                  }
                });
              }
            }

            handleCacheReset(response.data);

            if (request.cacheKey) {
              cacheService.set(cacheKeyPrefix + request.cacheKey, response.data);
            }
          } catch (e) {
            $log.error('Cache Error', e);
          }
        }

        return ( response.data );
      };

      /**
       * Makes a RESTful request to the server with the specied options
       *
       * @param httpVerb
       * @param data
       * @param id
       * @param cacheKey
       *
       * @returns {*}
       */
      var makeRequest = function (httpVerb, data, id, cacheKey) {
        var cachedQueries = [],
          cached = true;

        $timeout.cancel(deferredTimeout);

        if (cached && uiGenericsProvider.cachingEnabled && cacheKey && cacheService.has(cacheKeyPrefix + cacheKey)) {
          return $q.when(cacheService.get(cacheKeyPrefix + cacheKey)).then(function (response) {
            deferredTimeout = $timeout(runDeferredRequests, deferredTimeoutMs);
            return response;
          });
        }

        if (cached && uiGenericsProvider.cachingEnabled && httpVerb === 'POST' && id === 'm') {
          if (data.hasOwnProperty('queries')) {
            var remove = [];

            _.each(data.queries, function (q, index) {
              if (q.hasOwnProperty('cache') && q.cache) {
                if (cacheService.has(cacheKeyPrefix + q.id)) {
                  remove.push(index);
                }
              }
            });

            _.each(remove, function (i) {
              cachedQueries.push(data.queries.splice(i, 1)[0]);
            });
          }
        }

        return executeRequest(httpVerb, data, id, cacheKey, cachedQueries);
      };

      return {
        /**
         * Creates a new entry
         *
         * @param data
         * @returns {*}
         */
        create: function (data) {
          return makeRequest('POST', data);
        },

        /**
         * Checks to see if request is already queued based on given criteria
         *
         * @param criteria
         * @returns {*}
         */
        isQueued: function (criteria) {
          return uigRestHelper.isQueued(criteria);
        },

        /**
         * Lists a set of data (with optional filtering)
         *
         * @param options
         * @param page
         * @param cacheKey
         *
         * @returns {*}
         */
        list: function (options, page, cacheKey) {
          var httpVerb = options ? 'POST' : 'GET';
          var extra = options ? 'options' : null;
          var data = {
            options: options
          };

          if (page) {
            data.page = page;
          }

          return makeRequest(httpVerb, data, extra, cacheKey);
        },

        /**
         * Makes a custom AJAX request
         *
         * @param httpVerb
         * @param path
         * @param data
         * @param cacheKey
         *
         * @returns {*}
         */
        custom: function (httpVerb, path, data, cacheKey) {
          return makeRequest(httpVerb, data, path, cacheKey);
        },

        /**
         * Retrieves one entry
         *
         * @param id
         * @param data
         * @param cacheKey
         *
         * @returns {*}
         */
        one: function (id, data, cacheKey) {
          return makeRequest('GET', data, id, cacheKey);
        },

        /**
         * POSTs data to the API with provided id and data
         *
         * @param id
         * @param data
         * @param cacheKey
         * @param deferred
         */
        post: function (id, data, cacheKey, deferred) {
          if (deferred) {
            defer('POST', id, data, cacheKey, deferred);
          } else {
            return makeRequest('POST', data, id, cacheKey);
          }
        },

        /**
         * Queues a request to be sent with other similar requests called via this method in 1 api request
         *
         * @param data
         * @param cacheKey
         * @param callback
         */
        queue: function (data, cacheKey, callback) {
          var self = this;

          if (cacheService.has(cacheKey)) {
            callback(cacheService.get(cacheKey));
          } else {
            uigRestHelper.combine({
              data: data,
              cacheKey: cacheKey,
              cacheTag: cacheTag,
              callback: callback
            }, self);
          }
        },

        /**
         * Removes an entry
         *
         * @param id
         * @param options
         * @returns {*}
         */
        remove: function (id, options) {
          var httpVerb = options ? 'POST' : 'DELETE';
          var extra = options ? 'delete/' + id : id;
          var data = options ? {options: options} : null;

          return makeRequest(httpVerb, data, extra);
        },

        /**
         * Updates an entry
         *
         * @param id
         * @param data
         * @returns {*}
         */
        update: function (id, data) {
          return makeRequest('PUT', data, id);
        }
      };
    }

    return {
      /**
       * Creates a new Service object for the specified operation (api-level route)
       *
       * @param op
       * @param cacheTag
       * @param cacheStorageType (localStorage or sessionStorage, default: sessionStorage)
       *
       * @returns {Service}
       */
      init: function (op, cacheTag, cacheStorageType) {
        return new Service(op, cacheTag || 'General', cacheStorageType || 'sessionStorage');
      }
    };
  }

  angular
    .module('ui-generics')
    .factory('uigRestService', RestService);

})();