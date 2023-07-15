var PwdDB = require('../model/model');

// create and save new password
exports.create = (req, res) => {
    // validate the request
    if(!req.body){
        res.status(400).send({message: "Content cannot be empty"});
        return;
    }

    console.log(req.body);

    // new entry
    const entry = new PwdDB({
        purpose:req.body.purpose,
        email:req.body.email,
        username:req.body.username,
        password:req.body.password,
        status:req.body.status
    });

    // save entry in the database
    entry
        .save(entry)
        .then(data => {
            // res.send(data)
            res.redirect("/add-entry")
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating a create operation"
            });
        });
}

// retrieve and return all passwords/ retrieve and return a single password
exports.find = (req, res) => {

    if(req.query.id){
        const id = req.query.id;
        PwdDB.findById(id)
            .then(data => {
                if(!data){
                    res.status(404).send({message: `Not found entry with ${id}`})
                }else{
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({message: `Error retrieving entry with id ${id}`})
            })
    }else{
        PwdDB.find()
        .then(entry => {
            res.send(entry)
        })
        .catch(err => {
            res.status(500).send({message: err.message || "Error occurred while retrieving password information"})
        });
    }
}

// update a new identified password by passwordid
exports.update = (req, res) => {
    if(!req.body){
        return res
            .status(400)
            .send({message: "Data to update cannot be empty"})
    }

    const id = req.params.id;
    PwdDB.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
        .then(data => {
            if(!data){
                res.status(404).send({message: `Cannot Update Entry with ${id}. Maybe entry not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({message: "Error update Entry information"})
        })
}

// delete a password with specified passwordid in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    PwdDB.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({message: `Cannot Delete Entry with ${id}. Maybe id is wrong!`})
            }else{
                res.send({
                    message: "Entry was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: `Could not Delete Entry with id ${id}`
            });
        });
}