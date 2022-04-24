import  mongoose  from "mongoose";

const StateSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true
    },
    cities: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'City'
    }],
    
});

const State = mongoose.model('State', StateSchema);
export default State;