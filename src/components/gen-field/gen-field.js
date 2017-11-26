(function () {
    'use strict';

    /** @ngInject */
    function genField() {
        var templateDir= 'src/components/copied/gen-field/';

        /** @ngInject genField */
        function genFieldController() {
            var vm = this;

            /**
             * Setup Field Object
             *
             * @param obj
             */
            function setupField(obj) {
                vm.field = _.extend({
                    template: templateDir + 'fields/' + (obj.type || 'text') + '.html'
                }, obj);
            }

            /**
             * Initialization logic
             */
            vm.$onInit = function () {
                setupField(vm.obj);
            };

            /**
             * Handle changes
             *
             * @param changes
             */
            vm.$onChanges = function (changes) {
                if (changes.obj) {
                    setupField(changes.obj.currentValue);
                }
            };
        }

        return {
            restrict: 'A',
            templateUrl: templateDir + 'gen-field.html',
            scope: {
                obj: '<genObj'
            },
            controller: genFieldController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    angular
        .module('ui-generics')
        .directive('genField', genField);

})();
