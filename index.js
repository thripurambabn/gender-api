const express=require('express')
const axios=require('axios')
const port=3015
const app=express()

app.use(express.json())
const key='5d6f75d3e4b2045095026af2'
app.get(`/gender`,function(req,res) {
        const name=req.query.name
        if(name) {
        axios.get(` https://genderapi.io/api/?name=${name}&key=${key}`)
            .then((response)=>{
                const value=response.data
                res.send({name:value.name,gender:value.gender})
            })
            .catch((err)=>{
                res.send(err)
            })
        } else {
            res.send('please...enter name in url ')
        }

})

app.listen(port,function() {
    console.log('we are listening port:',port)
})
