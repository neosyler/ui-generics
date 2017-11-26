/** global Cookies */
(function () {
    'use strict';

    function CookieService() {

        /**
         * The Cookie Service
         *
         * @return {{clear: clear, get: get, has: has, remove: remove, set: set}}
         * @constructor
         */
        function Service() {
            var cookieApi = angular.copy(Cookies);
            var cookies = {};

            return {

                /**
                 * Clears all cookies
                 */
                clear: function () {
                    _.each(cookies, function (value, key) {
                        this.remove(key);
                    });
                },

                /**
                 * Retrieves the cookie by key name
                 *
                 * @param key
                 * @returns {*}
                 */
                get: function (key) {
                    return this.has(key) ? cookieApi.get(key) : null;
                },

                /**
                 * Checks to see if the Cookie exists
                 *
                 * @param key
                 */
                has: function (key) {
                    return cookieApi.get(key)!==undefined;
                },

                /**
                 * Removes a Cookie
                 *
                 * @param key
                 */
                remove: function (key) {
                    cookies[key] = undefined;
                    return cookieApi.remove(key);
                },

                /**
                 * Sets the Cookie
                 *
                 * @param key
                 * @param value
                 * @param expires Days number
                 */
                set: function (key, value, expires) {
                    cookies[key] = {
                        key: key,
                        value: value,
                        expires: expires
                    };

                    if(expires){
                        cookieApi.set(key, value, {expires: expires});
                    } else {
                        cookieApi.set(key, value);
                    }
                }
            };
        }

        return {
            /**
             * Initializes the cookie service
             * @returns {Service}
             */
            init: function () {
                return new Service();
            }
        };
    }

    angular.module('ui-generics').factory('uigCookieService', CookieService);
})();