import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: [60, "Name cannot be more than 60 characters"],
    },
    creator: {
      type: String,
      required: true,
      maxlength: 60,
    },
    updates: [
      {
        text: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);
