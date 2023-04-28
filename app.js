const app= require('express')();


app.get('/', (req, res)=>{
    res.send("Hello, I am running")
})


app.listen(3000,console.log('Server up at 3000!'))