const mongoose = require('mongoose');
const Products = mongoose.model('Product');
module.exports =  {
    async index(req,res){
        const {page = 1 } = req.query;
        const products = await Products.paginate({},{page, limit:5});
        return res.json(products);
    },
     async store(req,res){         
         const storage = await Products.create(req.body);
         return res.json(storage);
     },
     async show(req, res){
         const shows = await Products.findById(req.params.id);
         return res.json(shows);
     }, 
     async destroy (req, res){
         await Products.findByIdAndRemove(req.params.id);
         return res.send();
     }, 
     async update (req, res){
        const updated =  await Products.findByIdAndUpdate(req.params.id, req.body, {new:true});
        return res.json(updated);        
     }
    

};