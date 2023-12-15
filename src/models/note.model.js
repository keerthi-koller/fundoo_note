import { Schema, model } from "mongoose";

const noteSchema = new Schema (
    {
        sub: {type: String},
        description: {type: String}
    },
    {
        timestamps: true
    }
)

export default model('Note', noteSchema);