const express = require('express');
const bodyParser = require('body-parser');
const usersController = require('../controllers/usersController');
const loginController = require('../controllers/loginController');
const recipeController = require('../controllers/recipesController');
const validateWebToken = require('../middlewares/validateToken');
const validateRoleAdmin = require('../middlewares/validateRoleAdmin');
const imageUpload = require('../middlewares/imageUpload');

const app = express();
app.use(bodyParser.json());

// faz parte do multer
app.use('/images', express.static('src/uploads/'));

app.get('/', (request, response) => {
  response.send();
});

app.get('/recipes', recipeController.getAll);
app.get('/recipes/:id', recipeController.getById);

app.post('/users', usersController.create);
app.post('/users/admin', validateWebToken, validateRoleAdmin, usersController.createAdmin);
app.post('/login', loginController.logIn);
app.post('/recipes', validateWebToken, recipeController.create);

app.put('/recipes/:id', validateWebToken, recipeController.update);
app.put('/recipes/:id/image', validateWebToken, 
                              imageUpload.single('image'),
                              recipeController.imageAdded);

app.delete('/recipes/:id', validateWebToken, recipeController.exclude);

module.exports = app;
