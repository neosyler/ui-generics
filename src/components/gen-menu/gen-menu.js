(function () {
    'use strict';

    /** @ngInject */
    function genMenu() {

        /** @ngInject */
        function genMenuController($scope) {
            var vm = this;

            /**
             * Initialization logic
             */
            vm.$onInit = function () {
                vm.menu = {
                    hidden: true,
                    loggedIn: false,
                    type: '',
                    columns: [],
                    user: {
                        first_name: 'GUEST'
                    },
                    itemClick: function () {
                        vm.toggleMenu();
                    }
                };

                vm.modalInstance = null;

                if (typeof vm.obj === "object") {
                    vm.updateMenu(vm.obj);
                }
            };

            /**
             * Handle scope changes
             *
             * @param changes
             */
            vm.$onChanges = function (changes) {
                if (changes.obj && !changes.obj.isFirstChange()) {
                    if (typeof changes.obj.currentValue === "object") {
                        vm.updateMenu(changes.obj.currentValue);
                    }
                }
            };

            /**
             * Handle the click of the login/logout button
             */
            vm.loginClick = function () {
                if (vm.menu && vm.menu.user && vm.menu.user.first_name !== 'GUEST') {
                    vm.logout();
                } else if (vm.menu.hasOwnProperty('onLoginClick') && angular.isFunction(vm.menu.onLoginClick)) {
                    vm.menu.onLoginClick();
                }
            };

            /**
             * Logout Click
             */
            vm.logout = function () {
                vm.menu.user = {
                    first_name: 'GUEST'
                };
                vm.menu.loggedIn = false;

                $scope.$emit('UIG_MENU_USER_LOGGED_OUT');
            };

          /**
           * When user interacts with search field
           *
           * @param searchValue
           * @returns {*}
           */
            vm.search = function (searchValue) {
                if (vm.menu.hasOwnProperty('onSearch')) {
                    return vm.menu.onSearch(searchValue);
                }
            };

            /**
             * Toggle displaying the menu
             */
            vm.toggleMenu = function () {
                vm.menu.hidden = !vm.menu.hidden;

                $scope.$emit('UIG_MENU_STATUS_CHANGED', vm.menu.hidden);
            };

            /**
             * Update Menu Object
             * @param obj
             */
            vm.updateMenu = function (obj) {
                _.forIn(obj, function (v, k) {
                    vm.menu[k] = v;
                });

                if (vm.menu.hasOwnProperty('type')) {
                    vm.menu.template = 'src/components/gen-menu/templates/' + vm.menu.type + '.html';
                    vm.menu.itemTemplate = 'src/components/gen-menu/templates/' + vm.menu.type + '-menu-item.html';
                }
            };

            $scope.$on('USER_LOGGED_IN', function (event, user) {
                if (user) {
                    vm.menu.user = user;
                    vm.menu.loggedIn = true;
                }
            });

            $scope.$on('$stateChangeStart', function () {
                if (!vm.menu.hidden) {
                    vm.toggleMenu();
                }
            });

        }

        return {
            restrict: 'A',
            templateUrl: 'src/components/gen-menu/gen-menu.html',
            scope: {
                obj: '<genObj'
            },
            controller: genMenuController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    angular
        .module('ui-generics')
        .directive('genMenu', genMenu);

})();
