const mongoose = require('mongoose')
const connect = () => {
  mongoose
    .connect('mongodb://localhost:27017/chinyee', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err))
}

const disconnect = () => {
  mongoose.connection
    .close()
    .then(() => console.log('MongoDB connection closed'))
    .catch((err) => console.error('Error closing MongoDB connection:', err))
}

module.exports = { connect, disconnect }
