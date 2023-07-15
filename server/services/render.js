const axios = require('axios');

exports.homeRoutes = (req, res) => {
    // Make a GET request to api.users
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
    res.render('update_entry');
}