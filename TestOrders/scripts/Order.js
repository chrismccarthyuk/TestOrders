/**
 * Order view model
 */

var app = app || {};

app.Order = (function () {
    'use strict'

    var listScroller;

    var orderViewModel = (function () {

        var orderUid,
            order;


        var init = function () {
            /*  $commentsContainer = $('#comments-listview');
              $activityPicture = $('#picture');*/

        };

        var show = function (e) {

            orderUid = e.view.params.uid;
            order = app.Orders.orders.getByUid(orderUid);

            kendo.bind(e.view.element, order, kendo.mobile.ui);
        };

        var removeOrder = function () {

            /* var activities = app.Activities.activities;
             var activity = activities.getByUid(activityUid);
             
             app.showConfirm(
                 appSettings.messages.removeActivityConfirm,
                 'Delete Activity',
                 function (confirmed) {
                     if (confirmed === true || confirmed === 1) {
                         
                         activities.remove(activity);
                         activities.one('sync', function () {
                             app.mobileApp.navigate('#:back');
                         });
                         activities.sync();
                     }
                 }
             );*/
        };

        return {
            init: init,
            show: show,
            remove: removeOrder,
            activity: function () {
                return order;
            },
        };

    }());

    return orderViewModel;

}());
