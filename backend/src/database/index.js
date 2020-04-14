const mongoose = require('mongoose');

require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

module.exports = {
  connect: () => {
    mongoose.Promise = global.Promise;

    if (process.env.NODE_ENV == 'production') {
      mongoose.connect(
        'mongodb+srv://calcio:calcio@cluster0-kj5ow.mongodb.net/calcio?retryWrites=true&w=majority',
        {
          useNewUrlParser: true,
          useFindAndModify: false,
          useCreateIndex: true,
          useUnifiedTopology: true,
        },
        (err, dbref) => {
          if (!err) console.log('Connected');
          else console.log(err);
        }
      );
    } else {
      mongoose.connect(
        `mongodb://${process.env.DB_HOST}:27017/${process.env.DB_NAME}`,
        {
          useNewUrlParser: true,
          useFindAndModify: false,
          useCreateIndex: true,
          useUnifiedTopology: true,
        },
        (err, dbref) => {
          if (!err) {
            if (process.env.NODE_ENV !== 'test') {
              console.log('Connected');
            }
          } else console.log(err);
        }
      );
    }
  },
  disconnect: (done) => {
    mongoose.disconnect(done);
  },
  truncate: async () => {
    const collections = Object.keys(mongoose.connection.collections);
    for (const collectionName of collections) {
      const collection = mongoose.connection.collections[collectionName];
      await collection.deleteMany();
    }
  },
  mongoose,
};
