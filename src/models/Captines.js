import mongoose from 'mongoose';

const captineSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50,
        trim: true
    },
    typeOfVehicle: {
        type: String,
        required: true,
        trim: true
    },
    vehicleModel: {
        type: String,
        required: true,
        trim: true
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true
    },
    phoneType: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
}, {
    timestamps: true
})

captineSchema.index({ createdAt: -1 });
captineSchema.index({ fullName: 1 });
captineSchema.index({ phoneNumber: 1 });

const Captine = mongoose.models.Captine || mongoose.model('Captine', captineSchema);

export default Captine;