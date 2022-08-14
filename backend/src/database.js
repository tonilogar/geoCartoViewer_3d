const mongoose = require('mongoose');

const { USERS_APP_MONGODB_HOST, USERS_APP_MONGODB_DATABASE } = process.env;
const MONGODB_URI = `mongodb://${USERS_APP_MONGODB_HOST}/${USERS_APP_MONGODB_DATABASE}`;




(async () => {
    try {
      const db = await mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        //useUnifiedTopology: true,
        //useFindAndModify: false,
        useCreateIndex: true,
      });
      console.log("Mongodb is connected to", db.connection.host);
    } catch (error) {
      console.error(error);
    }
  })();