//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err) {
        return console.log('Unable to connect to MongoDb Server');
    }
    console.log('Connected to MongoDb Server');
    db.collection('Todos').deleteMany({text:'Dil ye Zidi Hai'}).then((result) => {
        console.log(result);

    })
    


    //db.close();
    

})