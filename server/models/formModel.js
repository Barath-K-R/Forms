import mongoose from 'mongoose';

const formSchema = new mongoose.Schema({
    name: {
        type: String,
        default: null,
    },
    userId: {
        type: String,
        required: true,
    },
    fields: {
        type: [String],
        default: [],
    },
}, { timestamps: true });

const formModel = mongoose.model('Form', formSchema);

export default formModel;
