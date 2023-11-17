const Project = require('../Contact.js');

const projectController = {
  // Get all projects
  getAllProjects: async (req, res) => {
    try {
      const projects = await Project.find();
      return res.status(200).json(projects);
    } catch (error) {
      console.error('Error fetching projects:', error);
      return res.status(500).json({ error: 'Server error, unable to fetch projects' });
    }
  },

  // Get a specific project by ID
  getProjectById: async (req, res) => {
    const projectId = req.params.id;
    try {
      const project = await Project.findById(projectId);
      if (!project) {
        return res.status(404).json({ error: 'Project not found' });
      }
      return res.status(200).json(project);
    } catch (error) {
      console.error('Error fetching project by ID:', error);
      return res.status(500).json({ error: 'Server error, unable to fetch project' });
    }
  },

  // Create a new project
  createProject: async (req, res) => {
    const { title, description, deployedLink, githubLink, imageUrl } = req.body;
    try {
      const newProject = new Project({
        title,
        description,
        deployedLink,
        githubLink,
        imageUrl
      });
      await newProject.save();
      return res.status(201).json({ message: 'Project created successfully' });
    } catch (error) {
      console.error('Error creating project:', error);
      return res.status(500).json({ error: 'Server error, unable to create project' });
    }
  },

  // Update a project by ID
  updateProjectById: async (req, res) => {
    const projectId = req.params.id;
    const updateData = req.body;
    try {
      const updatedProject = await Project.findByIdAndUpdate(projectId, updateData, { new: true });
      if (!updatedProject) {
        return res.status(404).json({ error: 'Project not found' });
      }
      return res.status(200).json(updatedProject);
    } catch (error) {
      console.error('Error updating project by ID:', error);
      return res.status(500).json({ error: 'Server error, unable to update project' });
    }
  },

  // Delete a project by ID
  deleteProjectById: async (req, res) => {
    const projectId = req.params.id;
    try {
      const deletedProject = await Project.findByIdAndDelete(projectId);
      if (!deletedProject) {
        return res.status(404).json({ error: 'Project not found' });
      }
      return res.status(200).json({ message: 'Project deleted successfully' });
    } catch (error) {
      console.error('Error deleting project by ID:', error);
      return res.status(500).json({ error: 'Server error, unable to delete project' });
    }
  }
};

module.exports = projectController;
