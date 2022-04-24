import mongoose from 'mongoose';

const citySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true
    },

    images: [{
        caption: {type:  String, required: true},
        url:{type: String, required: true}
    }],

    featured: {

        type: String,
        required: true,
        
    }
}, {
    timestamps: true
});

const City = mongoose.model('City', citySchema);
export default City;