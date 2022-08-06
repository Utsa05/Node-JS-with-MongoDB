
var MongoClient = require('mongodb').MongoClient;
var URI = "mongodb+srv://utsa:mypassword@cluster0.58hji50.mongodb.net/school?retryWrites=true&w=majority";
//optional
var config = { useUnifiedTopology: true };

MongoClient.connect(URI, config, function (err, mongoClient) {
    if (err) {
        console.log("Faild");
    } else {
        console.log("MongoDB Connected");
        //createNewCollection(mongoClient)
        //insertStudent(mongoClient);
        //deleteStudent(mongoClient)
        //deleteAllStudent(mongoClient)
        // findOneStudent(mongoClient)
        //findAllStudent(mongoClient);
        //findAllStudentbyProjection(mongoClient);
        //findAllStudentbyQuery(mongoClient);
        //findAllStudentbyLimit(mongoClient);
        //findAllStudentbySort(mongoClient);
        //updateStudent(mongoClient);
        deleteMyCollection(mongoClient);

    }

});

function createNewCollection(mongoClient) {
    var schoolDB = mongoClient.db("school");
    schoolDB.createCollection("stuents", function (error, result) {
        console.log(result);
    })

}

function deleteMyCollection(mongoClient) {
    var schoolDB = mongoClient.db("school");
    schoolDB.dropCollection("teachers", function (error, result) {
        console.log(result);
    })

}

function insertStudent(mongoClient) {
    var schoolDb = mongoClient.db("school");
    var dbCollection = schoolDb.collection("students");

    var studentItem = { name: "Prantik Dev", roll: 4, class: "0", city: "Bangladesh" };

    dbCollection.insertOne(studentItem, function
        (error) {

        if (error) {
            console.log("Faild");
        } else {
            console.log("Inserted");
        }

    })
}

function deleteStudent(mongoClient) {
    var studentDb = mongoClient.db("school");
    var dbCollection = studentDb.collection("students");

    var studentDeleteItem = { roll: 44 };

    dbCollection.deleteOne(studentDeleteItem, function (error) {
        if (error) {
            console.log("Not Deleted");
        } else {
            console.log("Deleted");
        }
    })
}

function deleteAllStudent(mongoClient) {
    var studentDb = mongoClient.db("school");
    var dbCollection = studentDb.collection("students");

    dbCollection.deleteMany(function (error, result) {

        if (error) {
            console.log("Not Deleted");
        } else {
            console.log(result.n);
        }
    })

}

function findOneStudent(mongoClient) {
    var studentDb = mongoClient.db("school");
    var dbCollection = studentDb.collection("students");

    var obj = { id: 50 };

    dbCollection.findOne(obj, function (error, result) {
        if (error) {
            console.log("Not found");
        } else {
            console.log(result);
        }
    })

}

function findAllStudent(mongoClient) {
    var schoolDB = mongoClient.db('school');
    var dbCollection = schoolDB.collection("students");

    dbCollection.find().toArray(function (error, result) {
        if (error) {
            console.log("an error occured");
        } else if (result == null) {
            console.log("Not Students found");

        } else {
            console.log(result);
        }
    });
}

function findAllStudentbyProjection(mongoClient) {
    var schoolDB = mongoClient.db('school');
    var dbCollection = schoolDB.collection("students");

    var studentObg = {};
    var itemProjection = { projection: { name: "", city: "" } }

    dbCollection.find(studentObg, itemProjection).toArray(function (error, result) {
        if (error) {
            console.log("an error occured");
        } else if (result == null) {
            console.log("Not Students found");

        } else {
            console.log(result);
        }
    });
}

function findAllStudentbyQuery(mongoClient) {
    var schoolDB = mongoClient.db('school');
    var dbCollection = schoolDB.collection("students");

    var query = { roll: 50, city: "USAA" };


    dbCollection.find(query).toArray(function (error, result) {
        if (error) {
            console.log("an error occured");
        } else if (result == []) {
            console.log("Not Students found");

        } else {
            console.log(result);
        }
    });
}

function findAllStudentbyLimit(mongoClient) {
    var schoolDB = mongoClient.db('school');
    var dbCollection = schoolDB.collection("students");



    dbCollection.find().limit(2).toArray(function (error, result) {
        if (error) {
            console.log("an error occured");
        } else if (result == []) {
            console.log("Not Students found");

        } else {
            console.log(result);
        }
    });
}

function findAllStudentbySort(mongoClient) {
    var schoolDB = mongoClient.db('school');
    var dbCollection = schoolDB.collection("students");

    var sortData = { roll: 1 }; //-1 means reverse (same for letter)

    dbCollection.find().sort(sortData).toArray(function (error, result) {
        if (error) {
            console.log("an error occured");
        } else if (result == []) {
            console.log("Not Students found");

        } else {
            console.log(result);
        }
    });
}

function updateStudent(mongoClient) {
    var schoolDB = mongoClient.db('school');
    var dbCollection = schoolDB.collection("students");

    var queryRoll = { roll: 4 };
    var newValue = { $set: { name: "Pratik", roll: 1 } }


    dbCollection.updateOne(queryRoll, newValue, function (error, result) {
        if (error) {
            console.log("an error occured");
        } else {
            console.log("Updated");
        }
    });
}

