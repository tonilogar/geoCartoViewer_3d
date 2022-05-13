const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
}) 
    .then(db => console.log(`DB is connected`))
    .catch(err => console.error(err))

    console.group('Data base ' + process.env.MONGODB_URI )