//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err) {
        return console.log('Unable to connect to MongoDb Server');
    }
    console.log('Connected to MongoDb Server');
    
    // db.collection('Todos').insertOne({
    //     text:'Something to do',
    //     completed:false

    // },(err,result) => {
    //     if(err)
    //     {
    //     return console.log('Unable to insert',err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    


    // });
    // db.collection('Users').insertOne({
    //     name:'Krish',
    //     age:21,
    //     location:'Andheri'
    // },(err,result) => {
    //     if(err)
    //     {
    //         console.log('Unable to insert',err);
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
    // });

    db.close();
    

})