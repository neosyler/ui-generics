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