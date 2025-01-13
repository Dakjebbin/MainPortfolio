import mongoose from "mongoose";

const createProject = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    githubLink: {
        type: String,
        required: true
    },
    liveLink: {
        type: String
    },
    image: {
        type: String,
        required: true
    }
});

const createProjectModel = mongoose.model("CreateProject", createProject)

export default createProjectModel;