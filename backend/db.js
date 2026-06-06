const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://vineetgoyal1709:Vineet%40890@cluster0.ufoewc0.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0';

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


