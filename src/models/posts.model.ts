import mongoose, { Schema } from "mongoose";
export interface ITable {
    title: string,
    body: string
}
const postsSchema = new Schema<ITable>({
    title: {
        type: String,
    },
    body: String
},
    {
        timestamps: true,
    },
)
const poststModel = mongoose.model<ITable>(
   "posts",
    postsSchema
)
export default poststModel