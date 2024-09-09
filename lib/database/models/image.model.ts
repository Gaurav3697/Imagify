import { transformationTypes } from "@/constants";
import { Document, model, models, Schema } from "mongoose";
import { title } from "process";

export interface IImage extends Document {
    title: String;
    transformationType: string;
    publicId: string;
    secureURL: string;
    width?: number;
    height?: number;
    config?: object;
    transformationUrl?: string;
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author: {
        _id: string;
        firstName: string;
        lastName: string;
    }
    createdAt?: Date;
    updatedAt?: Date;
}

const ImageSchema = new Schema({
    title:{type: String, required: true},
    transformationTypes:{type: String,required: true},
    publicId:{type: String, required: true},
    secureURL:{type: String, required: true},
    width:{type: Number},
    height:{type: Number},
    config:{type: Object},
    transformationUrl:{type: String},
    aspectRatio:{type: String},
    color:{type: String},
    prompt:{type: String},
    author:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Image = models?.Image || model("Image", ImageSchema);

export default Image;