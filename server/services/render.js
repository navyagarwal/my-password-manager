exports.homeRoutes = (req, res) => {
    res.render('index');
}

exports.add_entry = (req, res) => {
    res.render('add_entry');
}

exports.update_entry = (req, res) => {
    res.render('update_entry');
}