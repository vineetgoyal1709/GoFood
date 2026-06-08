const mongoose = require('mongoose');

require('dotenv').config();

const mongoURI = process.env.MONGO_URI;

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB');
        const fetched_data = await mongoose.connection.db.collection("food_items");
        const data = await fetched_data.find({}).toArray();
        const FoodCategory = await mongoose.connection.db.collection("foodCategory");
        const catData = await FoodCategory.find({}).toArray();
        global.food_items = data;
        global.foodCategory = catData;
        
    } catch (error) {
        console.log('MongoDB connection error:', error);
    }
}

module.exports = mongoDB;


