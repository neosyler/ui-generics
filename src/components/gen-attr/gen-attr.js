(function () {
    'use strict';

    function genAttr() {
        return {
            restrict: 'A',
            link: function ($scope, $element, $attrs) {
                var attr = $scope.$eval($attrs.genAttr),
                    /**
                     * Set attributes on element
                     *
                     * @param attrs
                     */
                    setAttrs = function (attrs) {
                        _.forIn(attrs, function (v, k) {
                            $element.attr(k, v);
                        });
                    };

                $element.removeAttr('gen-attr');

                if (attr) {
                    setAttrs(attr);
                }

                $scope.$watch($attrs.genAttr, function (newVal, oldVal) {
                    if (newVal !== oldVal) {
                        setAttrs(newVal);
                    }
                });
            }
        };
    }

    angular.module('ui-generics').directive('genAttr', genAttr);
})();