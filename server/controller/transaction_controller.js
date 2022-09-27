const Transaction_model = require('../models/transaction_model');


// post: http://localhost:5000/api/transaction
async function create_Transaction(req,res){
    if(!req.body) return res.status(400).json("POST HTTP Data not Provided");
    let{ name,type, Amount}= req.body;
    const create = await new Transaction_model({
        name,
        type,
        Amount,
        date: new Date()
    })

    create.save(function(err){
        if(!err) return res.json(create);
        return res.status(400).json({ message: `Error While creating transaction ${err}`});
    })
}


// get: http://localhost:5000/api/transaction
async function get_Transaction(req,res){
    let data = await Transaction_model.find({})
    return res.json(data);
}

// delete: http://localhost:5000/api/categories
async function delete_Transaction(req,res){
    if(!req.body) res.status(400).json({message: "Request body not Found"});
    await Transaction_model.deleteOne(req.body,function(err){
        if(!err)res.json("Record Deleted...!");
    }).clone().catch(function(err){res.json("Error while deleting Transaction Record")})
}


// get: http://localhost:5000/api/labels
async function get_Labels(req, res){

    Transaction_model.aggregate([
        {
            $lookup : {
                from: "categoriesmodels",
                localField: 'type',
                foreignField: "type",
                as: "categories_info"
            }
        },
        {
            $unwind: "$categories_info"
        }
    ]).then(result => {
        let data  = result.map(v => Object.assign({}, {_id:v._id, name: v.name, type:v.type, Amount:v.Amount,color:v.categories_info['color']}))
        res.json(data);
    }).catch(error => {
        res.status(400).json("Looup Collection Error");
    })

}

module.exports = {
    create_Transaction,
    get_Transaction,
    delete_Transaction,
    get_Labels
};
