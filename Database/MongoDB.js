import mongoose from "mongoose"


const userSchema = mongoose.Schema( {
    userId: mongoose.Types.ObjectId,
    loginTime: Date
})


const User = mongoose.model("User", userSchema)

const mongoDB_setup = async () => {
    try {
        await mongoose.connect("mongodb+srv://uninowcoding:Pizza123@cluster0-nkgjo.mongodb.net/test?retryWrites=true", {
            useNewUrlParser: true,
        },() => console.log("MongoDB started"))
    } catch (error) {
        console.error(error)
    }

}




export {
    mongoDB_setup,
    User
}