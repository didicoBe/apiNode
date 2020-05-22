const mongoose =  require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    //todos os produtos
    async index(req, res){
        const {page = 1} = req.query;
        const product = await Product.paginate({},{page, limit:5});

        return res.json(product);
    },

    // produto pela id
    async show(req, res){
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    //salva novo produto
    async store(req, res){
        const product = await Product.create(req.body);

        return res.json(product);
    },

    async update(req,res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true});
        return res.json(product);
    },

    async destroy(req,res){
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }
}