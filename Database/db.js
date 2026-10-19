const mongoose =require('mongoose');

const ConnectDB = async () =>{
    try {
        const mongoUrl = process.env.MONGODB_URL;
        if (!mongoUrl) {
            throw new Error('MONGODB_URL is not defined in the environment');
        }

        await mongoose.connect(mongoUrl);
        console.log('MongoDB Connection Successful')
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1)    
    }
}

module.exports = ConnectDB;