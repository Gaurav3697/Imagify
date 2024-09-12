import { model, models, Schema } from "mongoose";

const userSchema = new Schema({
    clerkId: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    photo: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    planId: {
        type: Number,
        default: 1
    },
    creditbalance: {
        type: Number,
        default: 10,
    }
});

const user = models?.user || model("user", userSchema);
export default user;