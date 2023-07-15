const axios = require('axios');

exports.homeRoutes = (req, res) => {
    // Make a GET request to api/passwords
    axios.get('http://localhost:3000/api/passwords')
        .then(function(response){
            res.render('index', {entries: response.data});
        })
        .catch(err => {
            res.send(err);
        })
}

exports.add_entry = (req, res) => {
    res.render('add_entry');
}

exports.update_entry = (req, res) => {
    axios.get('http://localhost:3000/api/passwords', {params: {id: req.query.id}})
        .then(function(entrydata) {
            res.render("update_entry", {entry: entrydata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}