(function () {
    'use strict';

    function genImage() {

        function genImageController() {
            var vm = this,
                templateDir = 'src/components/gen-image/templates/',
                templates = {
                    bgImage: 'image-bg.html',
                    bottomTextImage: 'image-bottom-text.html',
                    bottomTextImageLinked: 'linked-image-bottom-text.html',
                    checkboxImage: 'image-checkbox.html',
                    full: 'image-full.html',
                    fullContent: 'image-full-content.html',
                    imageOnly: 'image-only.html',
                    linkedImage: 'linked-image.html',
                    topTextImage: 'image-top-text.html',
                    topTextImageLinked: 'linked-image-top-text.html'
                },
                /**
                 * Build attributes for the image
                 */
                buildAttrs = function () {
                    vm.image.attrs = {
                        alt: vm.image.altText || vm.image.text || '',
                        class: vm.image.class,
                        src: vm.image.src || '',
                        title: vm.image.titleText || vm.image.altText || vm.image.text || '',
                        bindOnce: vm.image.bindOnce || false
                    };
                },
                /**
                 * Setup this Image's Properties
                 *
                 * @param img
                 */
                setupImg = function (img) {
                    img = img || {};
                    vm.image = _.extend({}, img);
                    vm.image.templateDir = templateDir + (img.bindOnce ? 'bind-once/' : '');
                    vm.image.templates = {};

                    _.forIn(templates, function (v, k) {
                        vm.image.templates[k] = templateDir + v;
                    });

                    buildAttrs();

                    //image with checkbox
                    if (img.hasOwnProperty('checkbox')) {
                        vm.image.template = vm.image.templates.checkboxImage;
                        return;
                    }

                    //background image
                    if (img.bg) {
                        vm.image.template = vm.image.templates.bgImage;
                        return;
                    }

                    //linked image with top text
                    if (img.link && img.topText) {
                        vm.image.template = vm.image.templates.topTextImageLinked;
                        return;
                    }

                    //image with top text
                    if (img.topText) {
                        vm.image.template = vm.image.templates.topTextImage;
                        return;
                    }

                    //linked image with text (bottom)
                    if (img.link && img.text) {
                        vm.image.template = vm.image.templates.bottomTextImageLinked;
                        return;
                    }

                    //image with text (bottom)
                    if (img.text) {
                        vm.image.template = vm.image.templates.bottomTextImage;
                        return;
                    }

                    //linked image
                    if (img.src && img.link) {
                        vm.image.template = vm.image.templates.linkedImage;
                    }

                    //linked image with top text and bottom text
                    if (img.topText && img.text && img.src && img.link) {
                        vm.image.template = vm.image.templates.full;
                    }

                    //image only
                    if (!vm.image.template) {
                        vm.image.template = vm.image.templates.imageOnly;
                    }
                };

            /**
             * Initialization
             */
            vm.$onInit = function () {
                setupImg(vm.obj);
            };

            /**
             * Handle scope changes
             *
             * @param changes
             */
            vm.$onChanges = function (changes) {
                if (changes.obj) {
                    setupImg(changes.obj.currentValue);
                }
            };
        }

        return {
            restrict: 'A',
            scope: {
                obj: '<genObj'
            },
            templateUrl: 'src/components/gen-image/gen-image.html',
            controller: genImageController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    angular.module('ui-generics').directive('genImage', genImage);
})();
