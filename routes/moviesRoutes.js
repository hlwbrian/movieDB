const express = require('express');
const moviesController = require('./../controllers/moviesController');

const router = express.Router();

router
    .route('/add')
    .get(moviesController.addMovies);

router
    .route('/addTables')
    .patch(moviesController.addTables);

router
    .route('/dropTables')
    .patch(moviesController.dropTables);

router
    .route('/addActor')
    .patch(moviesController.addActor);

router
    .route('/addDirector')
    .patch(moviesController.addDirector);

router
    .route('/addMovie')
    .patch(moviesController.addMovie);

router
    .route('/getDirectors')
    .get(moviesController.getDirectors);

router
    .route('/getActors')
    .get(moviesController.getActors);

router
    .route('/getGenres')
    .get(moviesController.getGenres);

router
    .route('/getMoviesList')
    .get(moviesController.getMoviesList);

router
    .route('/updateCover')
    .post(moviesController.updateCover);

//Create simple backdoor page for testing
router
    .route('/shuiSei5ahzah3ahfup3Foh6eis9saub')
    .get(moviesController.admin); 

module.exports = router;