//jshint esversion:6

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/exampleDB", { useUnifiedTopology: true });

//how we want our data to be structured
const exampleSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});
//collection Example will stick with exampleSchema
const Example = mongoose.model("Example", exampleSchema);

//example is document from Example model
const example = new Example({
    name: "pratik",
    rating: 9,
    review: "better than expected."
});

//example.save();   //to save remove comment

const profileSchema = new mongoose.Schema({
    name: String,
    age: Number,

});
const People = mongoose.model("Profile", profileSchema);
const people = new People({
    name: "lionel",
    age: 31
});
//people.save();

//multiple entry
const girl = new People({
    name: "ell",
    age: 22
});
const boy = new People({
    name: "li",
    age: 11
});
const dog = new People({
    name: "tom",
    age: 1
});
//remove comment to insert multiple entry
// People.insertMany([girl, boy, dog], function (err) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Sucessfully saved all profile to exampleDB");
//     }
// });

//reading from DB
People.find(function (err, foundData) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(foundData);
    }
});

//reading only particular data from db
People.find(function (err, foundData) {
    if (err) {
        console.log(err);
    }
    else {
        foundData.forEach(function (element) {

            console.log(element.name);

        });
    }
});

