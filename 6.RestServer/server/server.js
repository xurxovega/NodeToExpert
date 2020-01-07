require('./config/config');

const express = require('express');
const app = express();

const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function(req, res){
    res.json('Get from server')
});

app.get('/users', function (req, res) {
    res.json('Get from Users')
});

app.post('/users', function (req, res) {
    let id = req.params.id;
    let name = req.body.name;
    let age = req.body.age;

    //res.json({ user: req.body  })
    if( name === undefined){
        res.status(400).json({ok: false, message:'Name is obligatory'});
    }else{
        res.json({
            id: id,
            name: name,
            age: age,
            message: 'Post from Users'
        })
    }

});

app.put('/users/:id', function (req, res) {
    let id = req.params.id;

    res.json(
        {id:id,
         message: 'Put from Users'
        })
});


app.delete('/users', function (req, res) {
    res.json('Delete from Users')
});


app.listen(process.env.PORT, () => {
    console.log('Listen at port', process.env.PORT);
})