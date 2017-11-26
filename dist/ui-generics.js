/*!
 * See LICENSE in this repository for license information
 */
(function(){
'use strict';

angular
  .module('ui-generics', []);

angular.module("ui-generics").run(["$templateCache", function($templateCache) {$templateCache.put("src/components/gen-carousel/gen-carousel.html","<div class=\"gen-carousel swiper-container\" data-ng-class=vm.obj.id><div data-ng-if=vm.obj.enabled class=swiper-wrapper data-ng-transclude></div><div data-ng-if=vm.obj.pagination class=\"{{vm.obj.id}}-swiper-pagination swiper-pagination\"></div><div data-ng-if=vm.obj.navigation class=\"{{vm.obj.id}}-swiper-button-prev swiper-button-prev\"><i class=\"fa fa-chevron-left\"></i></div><div data-ng-if=vm.obj.navigation class=\"{{vm.obj.id}}-swiper-button-next swiper-button-next\"><i class=\"fa fa-chevron-right\"></i></div><div data-ng-if=vm.obj.pagination class=\"{{vm.obj.id}}-swiper-scrollbar swiper-scrollbar\"></div><div class=fullscreen-close data-ng-click=vm.close()><span class=\"fa fa-close\"></span></div></div>");
$templateCache.put("src/components/gen-button/gen-button.html","<div class=\"gen-button hidden-print\" data-ng-include=vm.button.template></div>");
$templateCache.put("src/components/gen-field/gen-field.html","<div class=gen-field><label data-ng-bind-html=vm.field.label></label><div data-ng-include=vm.field.template></div></div>");
$templateCache.put("src/components/gen-menu/gen-menu.html","<div class=gen-menu data-ng-include=vm.menu.template></div>");
$templateCache.put("src/components/gen-image/gen-image.html","<div class=\"gen-image {{vm.image.class}}\" data-ng-include=vm.image.template data-ng-style=\"vm.image.bg ? (vm.image.style || \'\') : \'\'\" data-ng-clicked=\"vm.image.clicked && vm.image.clicked($event, vm.image)\"></div>");
$templateCache.put("src/components/gen-button/templates/button-only.html","<div class={{vm.button.css.classes}} data-ng-click=\"vm.button.clicked && vm.button.clicked($event, vm.button)\"><span data-ng-if=vm.button.icon class={{vm.button.icon}}></span><div data-ng-if=vm.button.image data-gen-image data-gen-obj=vm.button.image></div><span data-ng-if=vm.button.text class=text data-ng-bind-html=vm.button.text></span></div>");
$templateCache.put("src/components/gen-button/templates/linked-button.html","<a data-gen-href={{vm.button.link}} data-gen-href-options=\"{preventClick: true}\" target={{vm.button.target}} data-ng-include=vm.button.templates.buttonOnly></a>");
$templateCache.put("src/components/gen-field/fields/autocomplete.html","");
$templateCache.put("src/components/gen-field/fields/button.html","<div data-gen-button data-gen-obj=vm.field.button></div>");
$templateCache.put("src/components/gen-field/fields/checkbox-group.html","");
$templateCache.put("src/components/gen-field/fields/checkbox.html","");
$templateCache.put("src/components/gen-field/fields/date-range.html","");
$templateCache.put("src/components/gen-field/fields/date-time.html","");
$templateCache.put("src/components/gen-field/fields/date.html","");
$templateCache.put("src/components/gen-field/fields/email.html","");
$templateCache.put("src/components/gen-field/fields/number.html","");
$templateCache.put("src/components/gen-field/fields/password.html","");
$templateCache.put("src/components/gen-field/fields/phone.html","");
$templateCache.put("src/components/gen-field/fields/radio-group.html","");
$templateCache.put("src/components/gen-field/fields/radio.html","");
$templateCache.put("src/components/gen-field/fields/select.html","<select id={{vm.field.id}} name={{vm.field.name}} class=form-control data-ng-model=vm.field.model[vm.field.id] data-ng-required=vm.field.required data-ng-disabled=vm.field.disabled data-ng-change=\"vm.field.changed($event, vm.field)\" data-ng-options=\"option.value as option.text for option in vm.field.select.items\"></select>");
$templateCache.put("src/components/gen-field/fields/text.html","<input type=text name={{vm.field.name}} class=form-control data-ng-model=vm.field.model[vm.field.id] placeholder={{vm.field.placeholder}} data-ng-required=vm.field.required minlength={{vm.field.minLength}} maxlength=vm.field.maxLength data-ng-disabled=vm.field.disabled data-ng-maxlength={{vm.field.maxLength}} data-ng-keyup=\"vm.field.keyUp($event, vm.field)\">");
$templateCache.put("src/components/gen-field/fields/textarea.html","<textarea name={{vm.field.name}} class=form-control data-ng-model=vm.field.model[vm.field.id] data-ng-required=vm.field.required minlength={{vm.field.minLength}} maxlength=vm.field.maxLength data-ng-disabled=vm.field.disabled data-ng-maxlength={{vm.field.maxLength}} data-ng-keyup=\"vm.field.keyUp($event, vm.field)\"></textarea>");
$templateCache.put("src/components/gen-field/fields/time.html","");
$templateCache.put("src/components/gen-field/fields/tinymce.html","");
$templateCache.put("src/components/gen-field/fields/upload-button.html","<button class={{vm.field.button.css.classes}} data-ngf-select=vm.field.button.clicked($files) data-ng-model=vm.field.file data-ngf-multiple=vm.field.button.multiple data-ng-disabled=vm.field.button.disabled><span data-ng-if=vm.field.button.icon class={{vm.field.button.icon}}></span><div data-ng-if=vm.field.button.image data-gen-image data-gen-obj=vm.field.button.image></div><span data-ng-if=vm.field.button.text class=text data-ng-bind-html=vm.field.button.text></span></button>");
$templateCache.put("src/components/gen-field/fields/url.html","");
$templateCache.put("src/components/gen-field/fields/yes-no.html","");
$templateCache.put("src/components/gen-menu/templates/grid.html","<div class=grid-menu><div class=grid-menu-column data-ng-repeat=\"column in vm.menu.columns track by $index\"><div data-ng-if=\"column.type === \'list\'\" class=\"list {{column.class}}\"><a data-gen-href={{item.link}} class=grid-menu-list-item data-ng-repeat=\"item in column.items track by $index\"><div data-ng-if=item.image data-gen-image data-gen-obj=item.image class=menu-image></div><span data-ng-if=item.text data-ng-bind-html=item.text></span></a></div><div data-ng-if=\"column.type === \'content\'\" class=\"content {{column.class}}\"><h2 data-ng-bind-html=column.heading></h2><p data-ng-bind-html=column.text></p><div data-gen-button data-gen-obj=column.button></div></div></div></div>");
$templateCache.put("src/components/gen-menu/templates/linear.html","<div class=linear-menu><ul><li data-ng-repeat=\"item in vm.menu.items track by $index\"><a data-gen-href={{item.link}}><span>{{item.text}}</span></a></li></ul></div>");
$templateCache.put("src/components/gen-menu/templates/mobile-menu-item.html","<a data-gen-href={{item.link}} data-ng-click=\"vm.menu.itemClick($event, item)\"><span data-ng-if=item.icon class={{item.icon}}></span><div data-ng-if=item.image data-gen-image data-gen-obj=item.image class=menu-image></div><span class=text>{{item.text}}</span> </a><span data-ng-if=\"item.items.length > 0\" class=fa data-ng-click=\"item.showItems=!item.showItems\" data-ng-class=\"{\'fa-chevron-down\': !item.showItems, \'fa-chevron-up\': item.showItems}\"></span><ul data-ng-if=\"item.showItems && item.items.length > 0\" class=sub-menu data-ng-class=\"{\'active\': item.showItems}\"><li data-ng-repeat=\"item in item.items track by $index\" data-ng-include=vm.menu.itemTemplate></li></ul>");
$templateCache.put("src/components/gen-menu/templates/mobile.html","<div class=menu-toggle><span class=\"fa fa-bars fa-fw\" data-ng-click=vm.toggleMenu()></span></div><div class=mobile-menu-overlay data-ng-class=\"{\'active\': !vm.menu.hidden}\" data-ng-click=vm.toggleMenu()></div><div class=mobile-menu data-ng-class=\"{\'active\': !vm.menu.hidden}\"><!--User/Guest Login--><div class=user><div class=avatar-block><span class=\"fa fa-user fa-fw\"></span></div><div class=welcome-block><div class=name><strong>HELLO,</strong> {{vm.menu.user.first_name}} {{vm.menu.user.last_name}}</div><div class=\"sign-in-out theme-accent-bg-as-fg\" data-ng-click=vm.loginClick()><i class=fa data-ng-class=\"{\'fa-sign-in\': !vm.menu.loggedIn, \'fa-sign-out\': vm.menu.loggedIn}\"></i> <span>{{!vm.menu.loggedIn ? \'Sign In\' : \'Sign Out\'}}</span></div></div><div class=close-menu data-ng-click=vm.toggleMenu()><span class=\"fa fa-close fa-fw\"></span></div></div><!--Search / Shopping Cart--><div class=search><input type=text name=search placeholder=Search... data-ng-model=vm.searchResults data-uib-typeahead=\"link for links in vm.search($viewValue)\" data-typeahead-on-select=vm.searchClick data-typeahead-template-url=customTemplate.html><div class=\"btn btn-info\"><span class=text>GO</span></div></div><!--Menu--><ul class=menu><li data-ng-repeat=\"item in vm.menu.items track by $index\" data-ng-include=vm.menu.itemTemplate></li></ul><!--Social Links--><div class=social-links data-gen-button-list data-gen-obj=vm.menu.socialLinks></div></div><script type=text/ng-template id=customTemplate.html><a data-gen-href=\"{{match.model.href}}\">\n        <span ng-bind-html=\"match.model.label | uibTypeaheadHighlight:query\"></span>\n    </a></script>");
$templateCache.put("src/components/gen-image/templates/image-bg.html","<meta data-ng-if=\"vm.image.captionText && vm.image.captionText !== \'\'\" itemprop=caption content={{vm.image.captionText}}><meta data-ng-if=vm.image.width itemprop=width content={{vm.image.width}}><meta data-ng-if=vm.image.height itemprop=height content={{vm.image.height}}><meta data-ng-if=vm.image.imgSrc itemprop=image content={{vm.image.imgSrc}}>");
$templateCache.put("src/components/gen-image/templates/image-bottom-text.html","<!--Static Image--><ng-include src={{vm.image.templates.imageOnly}}></ng-include><!--Bottom Text of Image--><p data-ng-bind-html=vm.image.text class=gen-image-text></p>");
$templateCache.put("src/components/gen-image/templates/image-checkbox.html","<!--Static Image--><ng-include src={{vm.image.templates.imageOnly}}></ng-include><!--Checkbox--><label class=checkbox><input type=checkbox data-ng-model=vm.image.checked data-ng-disabled=vm.image.disabled data-ng-click=\"vm.image.check($event, vm.image)\">&nbsp;{{vm.image.text}}</label>");
$templateCache.put("src/components/gen-image/templates/image-full-content.html","<!--Top Text of Image--><p data-ng-if=vm.image.topText data-ng-bind-html=vm.image.topText class=gen-image-text-top></p><!--Linked Image--><ng-include data-ng-if=\"vm.image.src && vm.image.link\" src={{vm.image.templates.linkedImage}}></ng-include><!--Static Image--><ng-include data-ng-if=\"vm.image.src && !vm.image.link\" src={{vm.image.templates.imageOnly}}></ng-include><!--Bottom Text of Image--><p data-ng-bind-html=vm.image.text class=gen-image-text></p>");
$templateCache.put("src/components/gen-image/templates/image-full.html","<!--Linked Image--> <a data-ng-if=vm.image.link data-gen-href={{vm.image.link}} data-ng-include=vm.image.templates.fullContent></a><!--Static Image--><ng-include data-ng-if=!vm.image.link src=vm.image.templates.fullContent></ng-include><!--Checkbox--><label data-ng-if=vm.image.checkbox class=checkbox><input type=checkbox data-ng-model=vm.image.checked data-ng-disabled=vm.image.disabled data-ng-click=\"vm.image.check($event, vm.image)\">&nbsp;{{vm.image.text}}</label>");
$templateCache.put("src/components/gen-image/templates/image-only.html","<img data-gen-attr=vm.image.attrs data-ng-click=\"vm.image.clicked && vm.image.clicked($event)\"><meta data-ng-if=\"vm.image.captionText && vm.image.captionText !== \'\'\" itemprop=caption content={{vm.image.captionText}}><meta data-ng-if=vm.image.width itemprop=width content={{vm.image.width}}><meta data-ng-if=vm.image.height itemprop=height content={{m.image.height}}><meta data-ng-if=vm.image.imgSrc itemprop=image content={{vm.image.imgSrc}}>");
$templateCache.put("src/components/gen-image/templates/image-top-text.html","<!--Top Text of Image--><p data-ng-if=vm.image.topText data-ng-bind-html=vm.image.topText class=gen-image-text-top></p><!--Static Image--><ng-include data-ng-if=\"vm.image.src && !vm.image.link\" src={{vm.image.templates.imageOnly}}></ng-include>");
$templateCache.put("src/components/gen-image/templates/linked-image-bottom-text.html","<a data-gen-href={{vm.image.link}} data-ng-include=vm.image.templates.bottomTextImage></a>");
$templateCache.put("src/components/gen-image/templates/linked-image-top-text.html","<a data-gen-href={{vm.image.link}} data-ng-include=vm.image.templates.topTextImage></a>");
$templateCache.put("src/components/gen-image/templates/linked-image.html","<a data-gen-href={{vm.image.link}} data-ng-include=vm.image.templates.imageOnly></a>");
$templateCache.put("src/components/gen-image/templates/bind-once/image-bg.html","<meta data-ng-if=\"vm.image.captionText && vm.image.captionText !== \'\'\" itemprop=caption content={{::vm.image.captionText}}><meta data-ng-if=vm.image.width itemprop=width content={{::vm.image.width}}><meta data-ng-if=vm.image.height itemprop=height content={{::vm.image.height}}><meta data-ng-if=vm.image.imgSrc itemprop=image content={{::vm.image.imgSrc}}>");
$templateCache.put("src/components/gen-image/templates/bind-once/image-bottom-text.html","<!--Static Image--><ng-include src={{::vm.image.templates.imageOnly}}></ng-include><!--Bottom Text of Image--><p data-ng-bind-html=::vm.image.text class=gen-image-text></p>");
$templateCache.put("src/components/gen-image/templates/bind-once/image-checkbox.html","<!--Static Image--><ng-include src={{::vm.image.templates.imageOnly}}></ng-include><!--Checkbox--><label class=checkbox><input type=checkbox data-ng-model=vm.image.checked data-ng-disabled=::vm.image.disabled data-ng-click=\"vm.image.check($event, vm.image)\">&nbsp;{{::vm.image.text}}</label>");
$templateCache.put("src/components/gen-image/templates/bind-once/image-full-content.html","<!--Top Text of Image--><p data-ng-if=vm.image.topText data-ng-bind-html=::vm.image.topText class=gen-image-text-top></p><!--Linked Image--><ng-include data-ng-if=\"vm.image.src && vm.image.link\" src={{::vm.image.templates.linkedImage}}></ng-include><!--Static Image--><ng-include data-ng-if=\"vm.image.src && !vm.image.link\" src={{::vm.image.templates.imageOnly}}></ng-include><!--Bottom Text of Image--><p data-ng-bind-html=::vm.image.text class=gen-image-text></p>");
$templateCache.put("src/components/gen-image/templates/bind-once/image-full.html","<!--Linked Image--> <a data-ng-if=vm.image.link data-gen-href={{::vm.image.link}} data-ng-include=::vm.image.templates.fullContent></a><!--Static Image--><ng-include data-ng-if=!vm.image.link src=::vm.image.templates.fullContent></ng-include><!--Checkbox--><label data-ng-if=vm.image.checkbox class=checkbox><input type=checkbox data-ng-model=vm.image.checked data-ng-disabled=::vm.image.disabled data-ng-click=\"vm.image.check($event, vm.image)\">&nbsp;{{::vm.image.text}}</label>");
$templateCache.put("src/components/gen-image/templates/bind-once/image-only.html","<img data-gen-attr=vm.image.attrs data-ng-click=\"vm.image.clicked && vm.image.clicked($event)\"><meta data-ng-if=\"vm.image.captionText && vm.image.captionText !== \'\'\" itemprop=caption content={{::vm.image.captionText}}><meta data-ng-if=vm.image.width itemprop=width content={{::vm.image.width}}><meta data-ng-if=vm.image.height itemprop=height content={{::vm.image.height}}><meta data-ng-if=vm.image.imgSrc itemprop=image content={{::vm.image.imgSrc}}>");
$templateCache.put("src/components/gen-image/templates/bind-once/image-top-text.html","<!--Top Text of Image--><p data-ng-if=vm.image.topText data-ng-bind-html=::vm.image.topText class=gen-image-text-top></p><!--Static Image--><ng-include data-ng-if=\"vm.image.src && !vm.image.link\" src={{::vm.image.templates.imageOnly}}></ng-include>");
$templateCache.put("src/components/gen-image/templates/bind-once/linked-image-bottom-text.html","<a data-gen-href={{::vm.image.link}} data-ng-include=::vm.image.templates.bottomTextImage></a>");
$templateCache.put("src/components/gen-image/templates/bind-once/linked-image-top-text.html","<a data-gen-href={{::vm.image.link}} data-ng-include=::vm.image.templates.topTextImage></a>");
$templateCache.put("src/components/gen-image/templates/bind-once/linked-image.html","<a data-gen-href={{::vm.image.link}} data-ng-include=::vm.image.templates.imageOnly></a>");}]);
(function() {
  'use strict';

  function uiGenericsProvider($windowProvider) {
    var location = $windowProvider.$get().location,
      host = (location.host.indexOf(':') !== -1) ? location.host.substring(0, location.host.indexOf(':')) : location.host;

    /**
     * Default API Url
     *
     * @type {string}
     */
    this.apiUrl = location.protocol + '://' + host + '/api';

    /**
     * Authentication context used in POST, PUT and DELETE REST requests
     *
     * @type {{}}
     */
    this.authContext = {};

    /**
     * Default authentication URL
     *
     * @type {string}
     */
    this.authUrl = '/login';

    /**
     * Default Cache Key Prefix
     *
     * @type {string}
     */
    this.cacheKeyPrefix = 'Cache:';

    /**
     * Whether caching is enabled or not
     *
     * @type {boolean}
     */
    this.cachingEnabled = true;

    /**
     * Returns provider instance
     *
     * @returns {uiGenericsProvider}
     */
    this.$get = function () {
      return this;
    };

    /**
     * Retrieves a property set in this provider
     *
     * @param key
     * @returns {*}
     */
    this.get = function (key) {
      if (this.hasOwnProperty(key)) {
        return this[key];
      }

      return null;
    };

    /**
     * Returns an authentication string from authContext
     *
     * @returns {string}
     */
    this.getAuthString = function () {
      var authString = [];

      for (var key in this.authContext) {
        if (this.authContext.hasOwnProperty(key)) {
          authString.push(key + '=' + this.authContext[key]);
        }
      }

      return authString.join('&');
    };

    /**
     * Sets new or overrides existing options on this provider
     *
     * @param options
     */
    this.set = function (options) {
      if (angular.isObject(options)) {
        for (var option in options) {
          if (options.hasOwnProperty(option)) {
            this[option] = options[option];
          }
        }
      }
    }
  }

  angular.module('ui-generics').provider('uiGenericsProvider', uiGenericsProvider);
})();
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
(function () {

    var dataLayer = window.dataLayer = window.dataLayer || [];

    function GTMService() {
        /**
         * Global attributes sent with all events
         *
         * @param category
         * @param action
         * @param label
         *
         * @returns {{page, authRole, customerId, isEmployee: boolean, isCustomer, isVisitor: boolean, salesPersonId, uid, userId, userLoggedIn, visitorId, visitorVisitId}}
         */
        var globalAttrs = function (category, action, label) {
            return {
                category: category,
                action: action,
                label: label
            };
        };

        /**
         * Push the event into the data layer for GTM tracking
         *
         * @param obj
         */
        var push = function (obj) {
            dataLayer.push(obj);
        };

        return {
            /**
             * Track a specific action taken by user
             *
             * @param category
             * @param action
             * @param label
             * @param props
             */
            track: function (category, action, label, props) {
                push({
                    event: 'ngTrackEvent',
                    attributes: _.extend(globalAttrs(category, action, label), props)
                });
            },

            /**
             * Tracks an event through GTM
             *
             * @param event
             * @param props
             */
            trackEvent: function (event, props) {
                push({
                    event: event,
                    attributes: _.extend(globalAttrs(), props)
                });
            }
        };
    }

    angular.module('ui-generics').service('uigGtmService', GTMService);
})();
(function () {
    'use strict';

    function ImageService() {
        /**
         * Makes the src path for the image
         *
         * @param image
         * @param size
         * @returns {string}
         */
        var makeImgSrc = function (image, size) {
            var src = angular.isObject(image) ? '' : image,
                props = {
                    src: ['src'],
                    img_dir: ['img_dir', 'img_file'],
                    img_dir2: ['img_dir2', 'img_file2'],
                    img_dir3: ['img_dir3', 'img_file3']
                },
                index;

            _.forIn(props, function (v, k) {
                if (image.hasOwnProperty(k)) {
                    _.each(v, function (prop) {
                        if (image.hasOwnProperty(prop) && image[prop]) {
                            src += image[prop];
                        }
                    });

                    if (src !== '') {
                        return false;
                    }
                }
            });

            src = src.replace(/-i\.|-t\.|-s\.|-m\.|-l\.|-o\./gi, '.');
            index = src.lastIndexOf('.');

            if (-1 !== index && size !== 'a') {
                src = src.substr(0, index) + '-' + size + src.substr(index);
            }

            return src;
        };

        return {
            /**
             * Creates an Image Object
             *
             * @param image
             * @param options
             */
            make: function (image, options) {
                var size = options ? options.size || image.size || 's' : image.size || 's',
                    src = makeImgSrc(image, size);

                if (!src) {
                    return null;
                }

                return _.extend(_.extend(image, {
                    altText: image.img_alt || image.altText || null,
                    bg: image.bg || false,
                    bgFixed: image.bgFixed || false,
                    bindOnce: image.bindOnce || false,
                    captionText: image.img_caption || image.captionText || null,
                    class: image.class || '',
                    clicked: image.clicked || null,
                    disabled: image.disabled || false,
                    height: image.height || image.img_height || null,
                    link: image.link || null,
                    name: _.last(src.split('/')),
                    show: image.show || false,
                    size: size,
                    style: (image.bg || (options && options.bg)) ? {
                        'background': 'transparent url(' + src + ')',
                        'background-repeat': 'no-repeat',
                        'background-position': 'center',
                        'background-size': image.bgSize || 'cover',
                        'background-attachment': image.bgFixed ? 'fixed' : 'initial'
                    } : null,
                    src: src,
                    template: null,
                    text: image.text || null,
                    topImage: image.topImage || null,
                    topText: image.topText || null,
                    width: image.width || image.img_width || null
                }), options);
            }
        };
    }

    angular.module('ui-generics').service('uigImageService', ImageService);
})();
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
(function () {
    'use strict';

    function RestHelper($timeout, uigCacheService) {
        var deferredRequests = [],
            timeoutMs = 300,
            timeout = null,
            queueTimeout = null,
            queueTimeoutMs = 300,
            cache = uigCacheService.init('sessionStorage'),
            queue = [];

        return {
            /**
             * Queues the request for later processing
             *
             * @param request
             * @param service
             */
            combine: function (request, service) {
                var self = this;

                $timeout.cancel(queueTimeout);
                queue.push(request);
                queueTimeout = $timeout(function () {
                    self.runCombinedRequests(service);
                }, queueTimeoutMs);
            },

            /**
             * Looks for something that is already queued based on criteria
             *
             * @param criteria
             */
            isQueued: function (criteria) {
                return _.find(queue, criteria);
            },

            /**
             * Makes one request to the API with all queued requests
             *
             * @param service
             */
            runCombinedRequests: function (service) {
                var queries = [],
                    cacheKey = (queue.length > 0 && queue[0].hasOwnProperty('cacheKey')) ? queue[0].cacheKey + ':Queue' : null;

                _.each(queue, function (q, k) {
                    if (!_.find(queries, {id: q.data.id, vars: q.data.vars, alias:q.data.alias})) {
                        q.data.alias = q.data.id + k;
                        queries.push(q.data);
                    }
                });

                service.post('m', {
                    queries: queries
                }, cacheKey).then(function (response) {
                    if (response.success) {
                        _.each(queue, function (q) {
                            if (response.queries.hasOwnProperty(q.data.alias)) {
                                var qResponse = {success: true, results: response.queries[q.data.alias].results};

                                if (q.hasOwnProperty('cacheKey')) {
                                    cache.set(q.cacheKey, qResponse);
                                }

                                q.callback(qResponse);
                            }
                        });

                        queue = [];
                    }
                });
            },

            /**
             * Defer the given request
             *
             * @param request
             */
            defer: function (request) {
                deferredRequests.push(request);
            },

            /**
             * Run all deferred requests
             */
            runDeferredRequests: function () {
                $timeout.cancel(timeout);

                timeout = $timeout(function () {
                    _.each(deferredRequests, function (request) {
                        request.makeRequest(request.httpVerb, request.data, request.id, request.cacheKey).then(request.callback);
                    });

                    deferredRequests = [];
                }, timeoutMs);
            }
        };
    }

    angular.module('ui-generics').service('uigRestHelper', RestHelper);
})();
/*globals _*/
(function () {
  'use strict';

  /** @ngInject */
  function RestService(uiGenericsProvider, $location, $http, $q, $window, uigCacheService, uigRestHelper, $log, $timeout) {

    /**
     * This function encapsulates making a RESTful request to a specific API route (op)
     *
     * @param op
     * @param cacheTag
     * @param cacheStorageType
     *
     * @returns {{create: create, list: list, one: one, remove: remove, update: update}}
     * @constructor
     */
    function Service(op, cacheTag, cacheStorageType) {
      var url = (op) ? uiGenericsProvider.apiUrl + '/' + op : uiGenericsProvider.apiUrl,
        cacheService = uigCacheService.init(cacheStorageType),
        cacheKeyPrefix = uiGenericsProvider.cacheKeyPrefix,
        deferredTimeoutMs = 300,
        deferredTimeout = null,
        unknownError = 'An unknown error occurred.';

      /**
       * Pushes a deferred request into the queue
       *
       * @param httpVerb
       * @param id
       * @param data
       * @param cacheKey
       * @param callback
       */
      var defer = function (httpVerb, id, data, cacheKey, callback) {
        uigRestHelper.defer({
          httpVerb: httpVerb,
          id: id,
          data: data,
          cacheKey: cacheKey,
          cacheTag: cacheTag,
          callback: callback,
          op: op,
          cacheStorageType: cacheStorageType,
          makeRequest: makeRequest
        });
      };

      /**
       * Run Deferred Requests
       */
      var runDeferredRequests = function () {
        uigRestHelper.runDeferredRequests();
      };

      /**
       * Executes the HTTP request
       *
       * @param httpVerb
       * @param data
       * @param id
       * @param cacheKey
       * @param cachedQueries
       */
      var executeRequest = function (httpVerb, data, id, cacheKey, cachedQueries) {
        var requestUrl = (id) ? url + '/' + id : url,
          requestData = data || {},
          singleCall = httpVerb === 'GET' || httpVerb === 'DELETE';

        if (singleCall) {
          requestData = singleCall && angular.isArray(data) ? data.join('&') + '&' || '' : '';
          requestUrl += '?' + requestData + uiGenericsProvider.getAuthString();
          requestUrl += (uiGenericsProvider.cachingEnabled && cacheKey) ? '&cacheKey=' + cacheKeyPrefix + cacheKey : '';
        } else {
          requestData = angular.extend(requestData, uiGenericsProvider.authContext);
          requestData.cacheTag = cacheTag;

          if (uiGenericsProvider.cachingEnabled && cacheKey) {
            requestData.cacheKey = cacheKeyPrefix + cacheKey;
          }
        }

        var request = $http({
          method: httpVerb,
          url: requestUrl,
          data: requestData
        });

        return ( request.then(function (response) {
          return handleSuccess(response, {
            httpVerb: httpVerb,
            data: data,
            id: id,
            cacheKey: cacheKey,
            cacheTag: cacheTag,
            cachedQueries: cachedQueries
          });
        }, handleError) );
      };

      /**
       * Finds a deeply nested message or returns null if not found
       *
       * @param obj
       * @returns {*}
       */
      var findMessage = function (obj) {
        if (typeof obj === 'object') {
          if (obj.hasOwnProperty('message')) {
            return obj.message;
          } else {
            for (var k in obj) {
              if (obj.hasOwnProperty(k)) {
                if (angular.isObject(obj[k])) {
                  return findMessage(obj[k]);
                }
              }
            }

            return null;
          }
        }
        return null;
      };

      /**
       * Handle Cache Reset(ting)
       *
       * @param response
       */
      var handleCacheReset = function (response) {
        if (response.hasOwnProperty('CACHE_RESET')) {
          var cacheReset = parseInt(response.CACHE_RESET),
            curCacheReset = parseInt(cacheService.get('CACHE_RESET'));

          if (curCacheReset < cacheReset) {
            cacheService.clear();
          }

          cacheService.set('CACHE_RESET', cacheReset);
        }
      };

      /**
       * Handles error responses from the server
       *
       * @param response
       * @returns {*}
       */
      var handleError = function (response) {
        deferredTimeout = $timeout(runDeferredRequests, deferredTimeoutMs);

        if (response.status && response.status === 401) {
          //User is not authenticated
          if (response.data.url) {
            $window.location.href = response.data.url;
          } else {
            if ($location.path() === uiGenericsProvider.authUrl) {
              return ( $q.reject(response.data) );
            } else {
              $location.path(uiGenericsProvider.authUrl);
              return ( $q.reject(response.data) );
            }
          }
        } else if (response.status && response.status === 403) {
          //User doesn't have access to requested resource
          $window.location.href = uiGenericsProvider.authUrl;
        } else if (null !== response.data && response.data.hasOwnProperty('message')) {
          //look for a nested message
          response.data.message = findMessage(response.data);

          return ( $q.reject(response.data) );
        } else {
          return ( $q.reject(unknownError) );
        }
      };

      /**
       * Handles successful responses from the server
       *
       * @param response
       * @param request
       */
      var handleSuccess = function (response, request) {
        deferredTimeout = $timeout(runDeferredRequests, deferredTimeoutMs);

        if (typeof response.data === 'string') {
          response.data = {
            success: true,
            message: '',
            result: response.data
          };
        }

        if (!response.data || response.data === '') {
          return;
        }

        if (!response.data.success) {
          if (!response.data.hasOwnProperty('message')) {
            response.data.message = findMessage(response.data) || unknownError;
          }
        }

        if (uiGenericsProvider.cachingEnabled) {
          try {
            if (request.httpVerb === 'POST' && request.id === 'm') {
              if (request.data.hasOwnProperty('queries')) {
                _.each(request.data.queries, function (q) {
                  if (q.hasOwnProperty('cache') && q.cache) {
                    cacheService.set(cacheKeyPrefix + q.id, response.data.queries[q.id]);
                  }
                });

                _.each(request.cachedQueries, function (q) {
                  if (cacheService.has(cacheKeyPrefix + q.id)) {
                    response.data.queries[q.id] = cacheService.get(cacheKeyPrefix + q.id);
                  }
                });
              }
            }

            handleCacheReset(response.data);

            if (request.cacheKey) {
              cacheService.set(cacheKeyPrefix + request.cacheKey, response.data);
            }
          } catch (e) {
            $log.error('Cache Error', e);
          }
        }

        return ( response.data );
      };

      /**
       * Makes a RESTful request to the server with the specied options
       *
       * @param httpVerb
       * @param data
       * @param id
       * @param cacheKey
       *
       * @returns {*}
       */
      var makeRequest = function (httpVerb, data, id, cacheKey) {
        var cachedQueries = [],
          cached = true;

        $timeout.cancel(deferredTimeout);

        if (cached && uiGenericsProvider.cachingEnabled && cacheKey && cacheService.has(cacheKeyPrefix + cacheKey)) {
          return $q.when(cacheService.get(cacheKeyPrefix + cacheKey)).then(function (response) {
            deferredTimeout = $timeout(runDeferredRequests, deferredTimeoutMs);
            return response;
          });
        }

        if (cached && uiGenericsProvider.cachingEnabled && httpVerb === 'POST' && id === 'm') {
          if (data.hasOwnProperty('queries')) {
            var remove = [];

            _.each(data.queries, function (q, index) {
              if (q.hasOwnProperty('cache') && q.cache) {
                if (cacheService.has(cacheKeyPrefix + q.id)) {
                  remove.push(index);
                }
              }
            });

            _.each(remove, function (i) {
              cachedQueries.push(data.queries.splice(i, 1)[0]);
            });
          }
        }

        return executeRequest(httpVerb, data, id, cacheKey, cachedQueries);
      };

      return {
        /**
         * Creates a new entry
         *
         * @param data
         * @returns {*}
         */
        create: function (data) {
          return makeRequest('POST', data);
        },

        /**
         * Checks to see if request is already queued based on given criteria
         *
         * @param criteria
         * @returns {*}
         */
        isQueued: function (criteria) {
          return uigRestHelper.isQueued(criteria);
        },

        /**
         * Lists a set of data (with optional filtering)
         *
         * @param options
         * @param page
         * @param cacheKey
         *
         * @returns {*}
         */
        list: function (options, page, cacheKey) {
          var httpVerb = options ? 'POST' : 'GET';
          var extra = options ? 'options' : null;
          var data = {
            options: options
          };

          if (page) {
            data.page = page;
          }

          return makeRequest(httpVerb, data, extra, cacheKey);
        },

        /**
         * Makes a custom AJAX request
         *
         * @param httpVerb
         * @param path
         * @param data
         * @param cacheKey
         *
         * @returns {*}
         */
        custom: function (httpVerb, path, data, cacheKey) {
          return makeRequest(httpVerb, data, path, cacheKey);
        },

        /**
         * Retrieves one entry
         *
         * @param id
         * @param data
         * @param cacheKey
         *
         * @returns {*}
         */
        one: function (id, data, cacheKey) {
          return makeRequest('GET', data, id, cacheKey);
        },

        /**
         * POSTs data to the API with provided id and data
         *
         * @param id
         * @param data
         * @param cacheKey
         * @param deferred
         */
        post: function (id, data, cacheKey, deferred) {
          if (deferred) {
            defer('POST', id, data, cacheKey, deferred);
          } else {
            return makeRequest('POST', data, id, cacheKey);
          }
        },

        /**
         * Queues a request to be sent with other similar requests called via this method in 1 api request
         *
         * @param data
         * @param cacheKey
         * @param callback
         */
        queue: function (data, cacheKey, callback) {
          var self = this;

          if (cacheService.has(cacheKey)) {
            callback(cacheService.get(cacheKey));
          } else {
            uigRestHelper.combine({
              data: data,
              cacheKey: cacheKey,
              cacheTag: cacheTag,
              callback: callback
            }, self);
          }
        },

        /**
         * Removes an entry
         *
         * @param id
         * @param options
         * @returns {*}
         */
        remove: function (id, options) {
          var httpVerb = options ? 'POST' : 'DELETE';
          var extra = options ? 'delete/' + id : id;
          var data = options ? {options: options} : null;

          return makeRequest(httpVerb, data, extra);
        },

        /**
         * Updates an entry
         *
         * @param id
         * @param data
         * @returns {*}
         */
        update: function (id, data) {
          return makeRequest('PUT', data, id);
        }
      };
    }

    return {
      /**
       * Creates a new Service object for the specified operation (api-level route)
       *
       * @param op
       * @param cacheTag
       * @param cacheStorageType (localStorage or sessionStorage, default: sessionStorage)
       *
       * @returns {Service}
       */
      init: function (op, cacheTag, cacheStorageType) {
        return new Service(op, cacheTag || 'General', cacheStorageType || 'sessionStorage');
      }
    };
  }

  angular
    .module('ui-generics')
    .factory('uigRestService', RestService);

})();
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

(function () {
    'use strict';

    function genCompile($compile) {
        // directive factory creates a link function
        return function(scope, element, attrs) {
            scope.$watch(
                function (scope) {
                    // watch the 'compile' expression for changes
                    return scope.$eval(attrs.genCompile);
                },
                function (value) {
                    // when the 'compile' expression changes
                    // assign it into the current DOM
                    element.html(value);

                    // compile the new DOM and link it to the current
                    // scope.
                    // NOTE: we only compile .childNodes so that
                    // we don't get into infinite loop compiling ourselves
                    $compile(element.contents())(scope);
                }
            );
        };
    }

    angular.module('ui-generics').directive('genCompile', genCompile);
})();
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

(function () {
    'use strict';

    function genHref() {
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

                        if (!options || !options.hasOwnProperty('preventClick') || !options.preventClick) {
                            element.bind('click', function () {
                                options.click(path, params);
                                return false;
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
})();