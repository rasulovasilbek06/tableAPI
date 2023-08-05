import mongoose from "mongoose"
import app from "./app"
import dotenv from "dotenv"
dotenv.config();
const port = process.env.PORT || 8080;
async function runServer() {
    try {
        await mongoose.connect(process.env.MONGO_URL as string)
        app.listen(port, () => {
            console.log(`Your server is running on port:  ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}
runServer()