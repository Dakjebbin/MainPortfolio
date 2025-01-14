
import createProjectModel from "../models/create.model.js";


const CreateProject = async (req, res) => {

    try {
        const { title, githubLink, liveLink, image } = req.body;

    if (!title || !githubLink || !liveLink || !image) {
        res.status(404).json({
            success: false,
            message: "Please fill all fields"
        })
        return
    }

    const projectExists = await createProjectModel.findOne({ title }).exec();

    if (projectExists) {
       return res.status(400).json({
            success: false,
            message: "Project already exists"
        })  
    }
  
    const project = new createProjectModel({
        title,
        githubLink,
        liveLink,
        image
    })

    await project.save();

    res.status(200).json({
        success: true,
        message: "Project created successfully",
        data: project
    })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
    
}

const getProjects = async (req, res) => {
    try {
        const allProjects = await createProjectModel.find({}).exec()

        if(allProjects?.length === 0) {
            res.status(404).json({
                success: false,
                message: "No projects found"
            })
            return
        }

        res.status(200).json({
            success: true,
            data: allProjects
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"    
        })
    }
}

const deleteProject = async (req,res) => {
        try {
                const {id} = req.params
                const project = await createProjectModel.findByIdAndDelete(id).exec();
        } catch {
            res.status(500).json({
                success: false,
                message: "Internal Server Error"
            })
        }
}


export {CreateProject, getProjects, deleteProject}