'use strict';

module.exports = function(app) {
    var todoList = require('../controller/controller');

    app.route('/')
        .get(todoList.index);

    app.route('/customers')
        .get(todoList.customers);

     app.route('/customers/:id')
        .get(todoList.getCustomerById);

    app.route('/test')
        .post(todoList.testpost);
    app.route('/insert')
        .post(todoList.insertCustomer);

    app.route('/delete/:id')
        .delete(todoList.deleteCustomerById);
};