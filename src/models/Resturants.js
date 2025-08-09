import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  nameOfOwner: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 10,
    trim: true
  },
  location: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 100,
    trim: true
  }
}, {
  timestamps: true
});

restaurantSchema.index({ email: 1 });
restaurantSchema.index({ createdAt: -1 });
restaurantSchema.index({ status: 1 });
restaurantSchema.index({ name: 1 });

const Restaurant = mongoose.models.Restaurant || mongoose.model('Restaurant', restaurantSchema);

export default Restaurant;