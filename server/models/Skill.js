const mongoose = require('mongoose')

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  icon: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    enum: ['Frontend', 'Backend', 'Database', 'Tools'],
    required: true
  },
  visible: {
    type: Boolean,
    default: true
  },
  order: {
    type: Number,
    default: 0
  }
}, { timestamps: true })

module.exports = mongoose.model('Skill', skillSchema)