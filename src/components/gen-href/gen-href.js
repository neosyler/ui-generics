(function () {
    'use strict';

    function genHref($state) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var path = attrs.genHref,
                    options = (attrs.hasOwnProperty('genHrefOptions') && attrs.genHrefOptions) ? scope.$eval(attrs.genHrefOptions) : null,
                    params = (options && options.hasOwnProperty('params')) ? options.params : null,
                    disableItemProp = attrs.hasOwnProperty('genHrefDisableItemProp');

                element.removeAttr('gen-href-options');
                element.removeAttr('gen-href-disable-item-prop');

                if (!attrs.hasOwnProperty('itemprop') && !disableItemProp) {
                    element.attr('itemprop', 'url');
                }

                /**
                 * Setup for the link
                 */
                function setup() {
                    element.unbind('click');
                    element.removeAttr('href');

                    if (path === '' || path === '#') {
                        element.attr('href', 'javascript:void(0)');
                    } else if (!path.indexOf('#')) { //starts with #
                        element.bind('click', function () {
                            var el = jQuery(path);

                            jQuery('html,body').animate({
                                scrollTop: el.offset().top - 150
                            }, 'fast');
                        });
                    } else if (!path.indexOf('tel') || !path.indexOf('mail')) {
                        element.attr('href', path);
                    } else {
                        element.attr('href', path);

                        if (options && options.hasOwnProperty('click')) {
                            element.bind('click', function () {
                                options.click(path, params);
                                return false;
                            });
                        } else {
                            //assume a state
                            element.bind('click', function () {
                              $state.go(path, params);
                            });
                        }
                    }
                }

                setup();

                attrs.$observe('genHref', function (newVal) {
                    if (newVal !== path) {
                        path = newVal;
                        setup();
                    }
                });
            }
        };
    }

    angular.module('ui-generics').directive('genHref', genHref);
})();