var app = app || {};

app.Orders = (function () {
    'use strict'
    //Create Model
    var ordersModel = (function () {
        var orderModel = {
            id: "OrderNumber",
            fields: {
                OrderNumber: { field: 'OrderNumber' },
                CustomerAddress: { field: 'CustomerAddress' },
                CustomerName: { field: 'CustomerName' },
                CustomerNumber: { field: 'CustomerNumber' },
                ProductName: { field: 'ProductName' },
                QuantityOrdered: { field: 'QuantityOrdered' },
                DeliveryDate: { field: 'DeliveryDate', defaultValue: new Date()},
                QuantityDelivered: { field: 'QuantityDelivered', defaultValue: 0 }
            },
            DeliveryDateFormatted: function()
            {
                return app.helper.formatDate(this.get('DeliveryDate'));
            }
        };//ordermodel

        var ordersDataSource = new kendo.data.DataSource({
            type: 'everlive',
            schema: {
                model: orderModel
            },
            transport: {
                typeName: 'Orders'
            },
            change: function (e) {

                if (e.items && e.items.length > 0) {
                    $('#no-orders-span').hide();
                } else {
                    $('#no-orders-span').show();
                }
            }

        }); //datasource
        return {
            orders: ordersDataSource
        };
    }())//ordersModel
    //ordersview model
    var ordersViewModel = (function () {

        // Navigate to activityView When some activity is selected
        var orderSelected = function (e) {

            app.mobileApp.navigate('views/orderView.html?uid=' + e.data.uid);
        };
        var navigateHome = function () {

            app.mobileApp.navigate('#welcome');
        };
        var logout = function () {

            app.helper.logout()
            .then(navigateHome, function (err) {
                app.showError(err.message);
                navigateHome();
            });
        };


        return {
            orders: ordersModel.orders,
            orderSelected: orderSelected,
            logout: logout
        };

    }());

    return ordersViewModel;
}());