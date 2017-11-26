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