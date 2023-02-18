import mongoose from 'mongoose'

mongoose
  .set('strictQuery', true)
  .connect(process.env.MONGODB_URI as string, {
    dbName: 'products',
  })
  .then(() => {
    console.log('Connect MongoDb successful')
  })
  .catch((err) => {
    console.log(err)
  })
