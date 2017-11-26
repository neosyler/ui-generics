(function() {
  'use strict';

  function uiGenericsProvider($windowProvider) {
    var location = $windowProvider.$get().location,
      host = (location.host.indexOf(':') !== -1) ? location.host.substring(0, location.host.indexOf(':')) : location.host;

    /**
     * Default API Url
     *
     * @type {string}
     */
    this.apiUrl = location.protocol + '://' + host + '/api';

    /**
     * Authentication context used in POST, PUT and DELETE REST requests
     *
     * @type {{}}
     */
    this.authContext = {};

    /**
     * Default authentication URL
     *
     * @type {string}
     */
    this.authUrl = '/login';

    /**
     * Default Cache Key Prefix
     *
     * @type {string}
     */
    this.cacheKeyPrefix = 'Cache:';

    /**
     * Whether caching is enabled or not
     *
     * @type {boolean}
     */
    this.cachingEnabled = true;

    /**
     * Returns provider instance
     *
     * @returns {uiGenericsProvider}
     */
    this.$get = function () {
      return this;
    };

    /**
     * Retrieves a property set in this provider
     *
     * @param key
     * @returns {*}
     */
    this.get = function (key) {
      if (this.hasOwnProperty(key)) {
        return this[key];
      }

      return null;
    };

    /**
     * Returns an authentication string from authContext
     *
     * @returns {string}
     */
    this.getAuthString = function () {
      var authString = [];

      for (var key in this.authContext) {
        if (this.authContext.hasOwnProperty(key)) {
          authString.push(key + '=' + this.authContext[key]);
        }
      }

      return authString.join('&');
    };

    /**
     * Sets new or overrides existing options on this provider
     *
     * @param options
     */
    this.set = function (options) {
      if (angular.isObject(options)) {
        for (var option in options) {
          if (options.hasOwnProperty(option)) {
            this[option] = options[option];
          }
        }
      }
    }
  }

  angular.module('ui-generics').provider('uiGenericsProvider', uiGenericsProvider);
})();