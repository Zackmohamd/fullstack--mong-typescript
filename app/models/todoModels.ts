import { Model } from "mongoose";
import { model, models, Schema } from "mongoose";

interface TodoDocument {
  _id: string;
  title: string;
  isDone: boolean;
//   createdAt: Date;
//   updatedAt: Date;
}

const TodoSchema = new Schema({
    title: { type: String, 
    required: true 
   },
    isDone: { 
        type: Boolean,
        default: false
    }
}, 
{ 
    timestamps: true } 
);
 
const TodoModel = models.Todo || model("Todo", TodoSchema);

export default TodoModel as Model<TodoDocument>;
