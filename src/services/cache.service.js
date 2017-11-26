(function () {
    'use strict';

    function CacheService($window, $log, uiGenericsProvider) {

        /**
         * The Cache Service returned for the specified type
         *
         * @param type
         * @returns {{storage: null, init: init, get: get, has: has, set: set}}
         * @constructor
         */
        function Service(type) {
            var storage = $window[type || 'sessionStorage'];

            return {
                storage: storage,

                /**
                 * Clears everything in the storage
                 */
                clear: function () {
                    this.storage.clear();
                },

                /**
                 * Retrieves the object by key name
                 *
                 * @param key
                 * @returns {*}
                 */
                get: function (key) {
                    if (this.storage.hasOwnProperty(key)) {
                        return angular.fromJson(this.storage[key]);
                    } else {
                        return null;
                    }
                },

                /**
                 * Checks to see if the key exists in the cache
                 *
                 * @param key
                 */
                has: function (key) {
                    return this.storage.hasOwnProperty(key);
                },

                /**
                 * Removes an item from the cache
                 *
                 * @param key
                 */
                remove: function (key) {
                    if (this.has(key)) {
                        this.storage.removeItem(key);
                    }
                },

                /**
                 * Sets the key in the cache to the val specified
                 *
                 * @param key
                 * @param val
                 */
                set: function (key, val) {
                    if (uiGenericsProvider.cachingEnabled) {
                        try {
                            this.storage.setItem(key, angular.toJson(val));
                        } catch (e) {
                            $log.error('Storage Quote exceeded!', e);
                        }
                    }
                }
            };
        }

        return {
            /**
             * Initializes the cache with a storage type (sessionStorage or localStorage)
             * @param type
             * @returns {Service}
             */
            init: function (type) {
                return new Service(type);
            }
        };
    }

    angular.module('ui-generics').factory('uigCacheService', CacheService);
})();