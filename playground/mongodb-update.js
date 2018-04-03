//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err) {
        return console.log('Unable to connect to MongoDb Server');
    }
    console.log('Connected to MongoDb Server');
   db.collection('Todos').findOneAndUpdate({
       _id:new ObjectID('5ac2f1e9185e530ca3f44974')
   },
{
    $set:{
        completed:false
    }
},
{
    returnOriginal:false
}).then((result) => {
    console.log(result);
})
    


    //db.close();
    

})