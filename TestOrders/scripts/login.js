/**
 * Login view model
 */

var app = app || {};

app.Login = (function () {
    'use strict';

    var loginViewModel = (function () {



        var $loginUsername;
        var $loginPassword;

        // var isAnalytics = analytics.isAnalytics();

        var init = function () {

            if (!app.isKeySet(appSettings.everlive.apiKey)) {
                app.mobileApp.navigate('views/noApiKey.html', 'fade');
            }

            $loginUsername = $('#loginUsername');
            $loginPassword = $('#loginPassword');


        };

        var show = function () {
            $loginUsername.val('');
            $loginPassword.val('');
        };

        // Authenticate to use Backend Services as a particular user
        var login = function () {

            var username = $loginUsername.val();
            var password = $loginPassword.val();

            // Authenticate using the username and password
            app.everlive.Users.login(username, password)
            .then(function () {
                // EQATEC analytics monitor - track login type
                // if (isAnalytics) {
                //   analytics.TrackFeature('Login.Regular');
                // }

                //return app.Users.load();
                app.mobileApp.navigate('views/ordersView.html');
                //app.mobileApp.navigate('exideOrders.html');
            })
            .then(function () {

                // app.mobileApp.navigate('views/ordersView.html');
                // app.mobileApp.navigate('exideOrders.html');
            })
            .then(null,
                  function (err) {
                      app.showError(err.message);
                  }
            );
        };



        return {
            init: init,
            show: show,

            login: login,

        };

    }());

    return loginViewModel;

}());
