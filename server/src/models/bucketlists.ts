import { model, Schema } from "mongoose";

const bucketlistSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        completed: {
            type: Boolean,
            default: false,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "Users",
        },
        expectedDate: {
            type: Date,
        },
    },
    {
        collection: "bucketlists",
        timestamps: true,
    }
);

export default model("Bucketlists", bucketlistSchema);
