(function() {
    'use strict';

    function ImmutableService() {

        return {
            /**
             * Loops through collection and applies new object with modified properties
             *
             * @param object
             * @param props
             */
            apply: function (object, props) {
                var collection = angular.isArray(object) ? object : [object];

                for(var i = 0; i < collection.length; i++) {
                    collection[i] = _.extend(angular.copy(collection[i]), props);
                }

                return collection;
            },

            /**
             * Create a new state in memory of object within array
             *
             * @param arr
             * @param index
             * @param props
             *
             * @return object at index
             */
            set: function (arr, index, props) {
                arr[index] = _.extend(angular.copy(arr[index]), props);

                return arr[index]
            }
        };
    }

    angular.module('ui-generics').service('uigImmutableService', ImmutableService);
})();