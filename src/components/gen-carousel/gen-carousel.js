/** globals Swiper,jQuery **/
(function () {
    function genCarousel() {

        function genCarouselController($scope, $timeout, $window) {
            var vm = this,
                portrait = $window.matchMedia("(orientation: portrait)").matches,
                initialWidth = $window.innerWidth,
                swiper,
                id;

            /**
             * Connect with another swiper instance
             * @param swiper
             */
            function connect(swiper) {
                $timeout(function () {
                    var connector = jQuery('.' + vm.obj.connectWith);

                    if (connector.length > 0) {
                        swiper.params.control = connector[0].swiper;
                    } else {
                        connect(swiper);
                    }
                }, 200);
            }

            /**
             * Destroy swiper instances
             */
            function destroySwiper() {
                vm.obj.enabled = false;

                if (swiper && angular.isArray(swiper)) {
                    _.each(swiper, function (s) {
                        s.destroy();
                    });
                } else if (swiper) {
                    swiper.destroy();
                }
            }

            /**
             * Handles resize window event
             */
            function handleResize() {
                var mql = $window.matchMedia("(orientation: portrait)");

                if (mql !== portrait) {
                    portrait = mql;

                    //orientation changed
                    if ($window.innerWidth !== initialWidth) {
                        destroySwiper();
                        $timeout(function () {
                            vm.$onInit();
                        });
                    }
                }
            }

            /**
             * Initialize swiper
             */
            vm.$onInit = function () {
                id = vm.obj.hasOwnProperty('id') ? '.' + vm.obj.id : '.swiper-container';

                if (id === '.swiper-container') {
                    vm.obj.id = 'swiper-container';
                }

                vm.obj.enabled = true;

                $timeout(function () {
                    var swiperObj = {
                        loop: false,
                        onSlideChangeEnd: function (swiper) {
                            if ($window.hasOwnProperty(vm.obj.id)) {
                                $window[vm.obj.id].initialSlide = swiper.activeIndex;
                            } else {
                                $window[vm.obj.id] = {
                                    initialSlide: swiper.activeIndex
                                };
                            }
                        }
                    };

                    if (vm.obj.pagination) {
                        swiperObj.pagination = '.' + vm.obj.id + '-' + 'swiper-pagination';
                        swiperObj.scrollbar = '.' + vm.obj.id + '-' + 'swiper-scrollbar';
                    }

                    if (vm.obj.navigation) {
                        swiperObj.nextButton = '.' + vm.obj.id + '-' + 'swiper-button-next';
                        swiperObj.prevButton = '.' + vm.obj.id + '-' + 'swiper-button-prev';
                    }

                    swiperObj = _.extend(swiperObj, vm.obj.swiperOptions);

                    if ($window.hasOwnProperty(vm.obj.id)) {
                        swiperObj = _.extend(swiperObj, $window[vm.obj.id]);
                    }

                    swiper = new Swiper(id, swiperObj);

                    if (vm.obj.hasOwnProperty('connectWith')) {
                        connect(swiper);
                    }
                });

                $scope.$on('SWIPER_FULLSCREEN', function () {
                    vm.obj.swiperOptions.initialSlide = swiper.activeIndex;
                    destroySwiper();

                    $timeout(function () {
                        vm.$onInit();
                    });
                });
            };

            /**
             * Clean up
             */
            vm.$onDestroy = function () {
                destroySwiper();
            };

            /**
             * Closes out fullscreen mode
             */
            vm.close = function () {
                $scope.$emit('SWIPER_FULLSCREEN_CLOSE', function () {
                    vm.obj.swiperOptions.initialSlide = swiper.activeIndex;
                    destroySwiper();

                    $timeout(function () {
                        vm.$onInit();
                    });
                });
            };
        }

        return {
            restrict: 'A',
            templateUrl: "src/components/gen-carousel/gen-carousel.html",
            scope: {
                obj: '<genObj'
            },
            controller: genCarouselController,
            controllerAs: 'vm',
            bindToController: true,
            transclude: true
        };
    }

    angular.module('ui-generics').directive('genCarousel', genCarousel);
})();
