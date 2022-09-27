const categoriesSchema = require('../models/categoies_model');


// post: http://localhost:5000/api/categories

async function create_categoies (req, res){
    const Create = categoriesSchema({
        type: "Investment",
        color: "#FCBE44", //dark
    })

    await Create.save((function(err){
        if(!err) return res.json(Create);
        return res.status(400).json({ message: `Error While creating categories ${err}`});
    })
    
    )

}

// get: http://localhost:5000/api/categories
async function get_Categories(req,res){
    let data = await categoriesSchema.find({})

    let filter = await data.map( v => Object.assign({}, {type: v.type, color:v.color}));

    return res.json(filter)
}



module.exports ={
    create_categoies,
    get_Categories,
}