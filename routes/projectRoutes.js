const express = require('express');
const router = express.Router();
const projectController = require('../projectController.getAllProjects',projectController.getProjectById, projectController.createProject, projectController.updateProjectById, projectController.deleteProjectById);


// GET route to fetch all projects
router.get('/', projectController.getAllProjects);

// GET route to fetch a specific project by ID
router.get('/:id', projectController.getProjectById);

// POST route to create a new project
router.post('/create', projectController.createProject);

// PUT route to update a project by ID
router.put('/:id', projectController.updateProjectById);

// DELETE route to delete a project by ID
router.delete('/:id', projectController.deleteProjectById);

module.exports = router;

