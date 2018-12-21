'use strict';

var response = require('../model/res');
var connection = require('../db/conn');
var util=require('util');

exports.customers = function(req, res) {
    connection.query('SELECT * FROM customer', function (error, rows, fieldsk){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};

exports.testpost = function(req, res) {
    response.ok("Post has been create: "+ util.inspect(req.body), res)
};

exports.insertCustomer = function(req, res) {
    connection.query('insert into customer set?',  req.body, function (error, rows, fieldsk){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

const sqlGetById = "SELECT * FROM customer where customerNumber = ?";
exports.getCustomerById = function(req, res) {
    connection.query(sqlGetById,req.params['id'], function (error, rows, fieldsk){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

const sqlDeleteById = "DELETE FROM customer where customerNumber = ?";
exports.deleteCustomerById = function(req, res) {
    connection.query(sqlDeleteById,req.params['id'], function (error, rows, fieldsk){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};