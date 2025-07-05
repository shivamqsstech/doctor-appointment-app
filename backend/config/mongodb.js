// import mongoose from "mongoose";

// const connectDB = async () => {

//     mongoose.connection.on('connected', () => console.log("Database Connected"))
//     await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`)

// }

// export default connectDB;


import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on('connected', () => console.log("Database Connected"))

    await mongoose.connect(process.env.MONGODB_URI, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        writeConcern: {
            w: "majority"  // explicitly set correct write concern
        }
    });
};

export default connectDB;
