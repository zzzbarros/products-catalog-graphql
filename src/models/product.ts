import { model, Schema } from 'mongoose'

const schema = new Schema({
  name: String,
  description: String,
  price: Number,
  stock: Number,
})

export default model('Product', schema)
