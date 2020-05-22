const mongoose = require('mongoose');
const mongoose_paginate = require('mongoose-paginate');

const productSchema = mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    url:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
});

productSchema.plugin(mongoose_paginate);

mongoose.model('Product', productSchema);