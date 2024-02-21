const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const pluralize = require('pluralize');
const basename = path.basename(__filename);
const config = require('../config/db.config');

// Connect to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${config.HOST}:${config.PORT}/${config.DB}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // other options
}).then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

const db = {};

// Custom function to add prefix and pluralize to collection names
const getCollectionName = (modelName) => {
    return config.tablePrefix + pluralize(modelName.toLowerCase());
};

//read all model files
fs.readdirSync(__dirname)
.filter(file => {
    return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
})
.forEach(file => {
    const modelName = file.split('.')[0];
    const schema = require(path.join(__dirname, file));
    //generate collection name with prefix and pluralization
    schema.set('collection', getCollectionName(modelName));
    //Add Timestamps
    schema.set('timestamps', {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });
    db[modelName] = mongoose.model(modelName, schema);
});

// db.mongoose = mongoose;

module.exports = db;
