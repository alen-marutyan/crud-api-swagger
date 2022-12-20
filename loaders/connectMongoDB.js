const mongoose = require('mongoose');

const connectMongoDB = () => {
    try {
        mongoose.connect(process.env.MONGO_URI, {
            dbName: "Todo",
            useNewUrlParser: true,
            useUnifiedTopology:true
        },(error)=>{
            if (error) throw error;

            console.log('Database connected!')
        });

    }catch (error) {
        console.log("Database Error: ", error.message);
    }
}

module.exports = connectMongoDB;
