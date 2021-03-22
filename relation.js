//jshint esversion:6

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/relationDB", { useUnifiedTopology: true });

//how we want our data to be structured
const productSchema = new mongoose.Schema({
    name: String,
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});
//collection Example will stick with exampleSchema
const Product = mongoose.model("Product", productSchema);

//example is document from Example model
const product1 = new Product({
    name: "jsbook",
    rating: 10,
    review: "better than expected."
});
product1.save();

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    buiedProduct: productSchema

});
const Customer = mongoose.model("Customer", customerSchema);
const customer = new Customer({
    name: "messi",
    age: 31,
    buiedProduct: product1
});
customer.save();
//mongoose.connection.close();