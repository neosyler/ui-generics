(function () {
    'use strict';

    function RestHelper($timeout, uigCacheService) {
        var deferredRequests = [],
            timeoutMs = 300,
            timeout = null,
            queueTimeout = null,
            queueTimeoutMs = 300,
            cache = uigCacheService.init('sessionStorage'),
            queue = [];

        return {
            /**
             * Queues the request for later processing
             *
             * @param request
             * @param service
             */
            combine: function (request, service) {
                var self = this;

                $timeout.cancel(queueTimeout);
                queue.push(request);
                queueTimeout = $timeout(function () {
                    self.runCombinedRequests(service);
                }, queueTimeoutMs);
            },

            /**
             * Looks for something that is already queued based on criteria
             *
             * @param criteria
             */
            isQueued: function (criteria) {
                return _.find(queue, criteria);
            },

            /**
             * Makes one request to the API with all queued requests
             *
             * @param service
             */
            runCombinedRequests: function (service) {
                var queries = [],
                    cacheKey = (queue.length > 0 && queue[0].hasOwnProperty('cacheKey')) ? queue[0].cacheKey + ':Queue' : null;

                _.each(queue, function (q, k) {
                    if (!_.find(queries, {id: q.data.id, vars: q.data.vars, alias:q.data.alias})) {
                        q.data.alias = q.data.id + k;
                        queries.push(q.data);
                    }
                });

                service.post('m', {
                    queries: queries
                }, cacheKey).then(function (response) {
                    if (response.success) {
                        _.each(queue, function (q) {
                            if (response.queries.hasOwnProperty(q.data.alias)) {
                                var qResponse = {success: true, results: response.queries[q.data.alias].results};

                                if (q.hasOwnProperty('cacheKey')) {
                                    cache.set(q.cacheKey, qResponse);
                                }

                                q.callback(qResponse);
                            }
                        });

                        queue = [];
                    }
                });
            },

            /**
             * Defer the given request
             *
             * @param request
             */
            defer: function (request) {
                deferredRequests.push(request);
            },

            /**
             * Run all deferred requests
             */
            runDeferredRequests: function () {
                $timeout.cancel(timeout);

                timeout = $timeout(function () {
                    _.each(deferredRequests, function (request) {
                        request.makeRequest(request.httpVerb, request.data, request.id, request.cacheKey).then(request.callback);
                    });

                    deferredRequests = [];
                }, timeoutMs);
            }
        };
    }

    angular.module('ui-generics').service('uigRestHelper', RestHelper);
})();