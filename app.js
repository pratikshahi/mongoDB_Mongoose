//jshint esversion:6

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/exampleDB", { useUnifiedTopology: true });

//how we want our data to be structured
const exampleSchema = new mongoose.Schema({
    name: String,
    //validation
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});
//collection Example will stick with exampleSchema
const Example = mongoose.model("Example", exampleSchema);

//example is document from Example model
const example = new Example({
    name: "pratik",
    rating: 10,
    review: "better than expected."
});

//example.save();               //to save remove comment

const profileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,

});
const People = mongoose.model("Profile", profileSchema);
const people = new People({
    name: "messi",
    age: 31
});
//people.save();                    //to save remove comment


//multiple entry
//remove comment to insert multiple entry
// const girl = new People({
//     name: "ell",
//     age: 22
// });
// const boy = new People({
//     name: "li",
//     age: 11
// });
// const dog = new People({
//     name: "tom",
//     age: 1
// });
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
        //once we are done with DB close connection
        mongoose.connection.close();

        foundData.forEach(function (element) {

            console.log(element.name);

        });
    }
});

//update db
// People.updateOne({_id:"1"},{name:"desiredName"},function(err){
//     if(err){
//         colsole.log(err);
//     }else{
//         console.log("Sucess in updating");
//     }
// });

//delete db

People.deleteOne({ age: 31 }, function (err) {
    if (err) {
        colsole.log(err);
    } else {
        console.log("deletion sucess");
    }
})