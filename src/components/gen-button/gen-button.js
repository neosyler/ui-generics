/*globals _*/
/*eslint angular/module-getter: 0*/
(function () {
    'use strict';

    /** @ngInject */
    function genButton() {

        /** @ngInject */
        function genButtonController() {
            var vm = this,
                templateDir = 'src/components/gen-button/templates/',
                templates = {
                    buttonOnly: templateDir + 'button-only.html',
                    linkedButton: templateDir + 'linked-button.html'
                },
                /**
                 * Setup the button
                 *
                 * @param button
                 */
                setupButton = function (button) {
                    vm.button = _.extend({}, button);
                    vm.button.templates = templates;

                    if (button && button.hasOwnProperty('link') && button.link) {
                        vm.button.template = templates.linkedButton;
                    }

                    if (!vm.button.template) {
                        vm.button.template = templates.buttonOnly;
                    }
                };

            /**
             * Initialization logic
             */
            vm.$onInit = function () {
                setupButton(vm.obj);
            };

            /**
             * Handle scope changes
             *
             * @param changes
             */
            vm.$onChanges = function (changes) {
                if (changes.obj && !changes.obj.isFirstChange()) {
                    setupButton(changes.obj.currentValue);
                }
            };
        }

        return {
            restrict: 'A',
            templateUrl: 'src/components/gen-button/gen-button.html',
            scope: {
                obj: '<genObj'
            },
            controller: genButtonController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    angular
        .module('ui-generics')
        .directive('genButton', genButton);

})();
