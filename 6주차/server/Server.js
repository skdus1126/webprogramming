app.get('/list',function(req,res){
    mydb.collection('post').find().toArray(function(arr, res){
        console.log(result);
    })
})
