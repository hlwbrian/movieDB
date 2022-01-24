const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const database = require('../mysql/db');
const path = require('path');

//Return error message
const returnError = (err, req, res, next) => {
  res.json({
    status: 500,
    error : err
  });
}
 
exports.addMovies = catchAsync(async (req, res, next) => {
  let sql = 'INSERT INTO movies (movieName) VALUES ("The Man from U.N.C.L.E")';
  database.query(sql, (err, result)  => {
    if (err) returnError(err, req, res, next);
    console.log("data inserted");
  });

  res.status(200).json({
    msg: 'testing ok'
  });
});

//Drop Movie Table
exports.dropTables = catchAsync(async (req, res, next) => {
  //1.1 DROP MOVIES TABLE
  let moviesDrop = 'DROP TABLE movies';
  database.query(moviesDrop, function (err, result) {
    if (err) returnError(err, req, res, next);
    console.log("1. Movies Table DROP");
  });

  //2.1 DROP MOVIES-ACTORS TABLE
  let moviesActorDrop = 'DROP TABLE moviesActors';
  database.query(moviesActorDrop, function (err, result) {
    if (err) returnError(err, req, res, next);
    console.log("2. Movies-Actors Table DROP");
  });

  //3.1 DROP ACTORS TABLE
  let actorDrop = 'DROP TABLE actors';
  database.query(actorDrop, function (err, result) {
    if (err) returnError(err, req, res, next);
    console.log("3. Actors Table DROP");
  });

  //4.1 DROP MOVIES-DIRECTORS TABLE
  let movieDirDrop = 'DROP TABLE moviesDirectors';
  database.query(movieDirDrop, function (err, result) {
    if (err) returnError(err, req, res, next);
    console.log("4. Movies-Directors Table DROP");
  });

  //5.1 DROP DIRECTORS TABLE
  let directorsDrop = 'DROP TABLE directors';
  database.query(directorsDrop, function (err, result) {
    if (err) returnError(err, req, res, next);
    console.log("5. Directors Table DROP");
  });

  //6.1 DROP MOVIE_GENRE TABLE
  let movieGenreDrop = 'DROP TABLE movieGenre';
  database.query(movieGenreDrop, function (err, result) {
    if (err) returnError(err, req, res, next);
    console.log("6. Movie-Genre Table DROP");
  });

  //7.1 DROP GENRES TABLE
  let genresDrop = 'DROP TABLE genres';
  database.query(genresDrop, function (err, result) {
    if (err) returnError(err, req, res, next);
    console.log("7. Genres Table DROP");
  });

  //8.1 DROP Stage Images
  let stageImgDrop = 'DROP TABLE stageimages';
  database.query(stageImgDrop, function (err, result) {
    if (err) returnError(err, req, res, next);
    console.log("8. Stage Imgs Table DROP");
  });

  //8.1 DROP Ratings
  let ratingsDrop = 'DROP TABLE ratings';
  database.query(ratingsDrop, function (err, result) {
    if (err) returnError(err, req, res, next);
    console.log("9. Ratings Table DROP");
  });

  //send testing page to user
  res.json({
    status: 200,
    msg: 'Drop successful'
  });
});

//Add Movie Table
exports.addTables = catchAsync(async (req, res, next) => {
  //1.2 CREATE MOVIES TABLE
  let moviesCreate = 'CREATE TABLE movies (movie_id INT AUTO_INCREMENT PRIMARY KEY, movie_name VARCHAR(50), movie_release_date DATE, movie_budget INT, movie_box_office INT, movie_language VARCHAR(5), movie_country VARCHAR(50), movie_price INT, movie_cover_img BLOB, UNIQUE(movie_name))';
  database.query(moviesCreate, function (err, result) {
    if (err) returnError(err, req, res, next);
    console.log("1. Movies Table RESET");
  });
  
  //2.2 CREATE MOVIES-ACTORS TABLE
  let moviesActorReset = 'CREATE TABLE moviesActors (actor_id INT, movie_id INT, role VARCHAR(50))';
  database.query(moviesActorReset, function (err, result) {
    if (err) returnError(err, req, res, next);
     console.log("2. Movies-Actors Table RESET");
  });

  //3.2 CREATE ACTORS TABLE
  let actorReset = 'CREATE TABLE actors (actor_id INT AUTO_INCREMENT PRIMARY KEY, actor_name VARCHAR(50), actor_born_date DATE, actor_gender VARCHAR(1), actor_nationality VARCHAR(30), actor_age INT, actor_image BLOB)';
  database.query(actorReset, function (err, result) {
    if (err) returnError(err, req, res, next);
     console.log("3. Actors Table RESET");
  });

  //4.2 CREATE MOVIES-DIRECTORS TABLE
  let moviesDirReset = 'CREATE TABLE moviesDirectors (director_id INT, movie_id INT)';
  database.query(moviesDirReset, function (err, result) {
    if (err) returnError(err, req, res, next);
     console.log("4. Movies-Directors Table RESET");
  });

  //5.2 CREATE DIRECTORS TABLE
  let directorsReset = 'CREATE TABLE directors (director_id INT AUTO_INCREMENT PRIMARY KEY, director_name VARCHAR(50), director_born_date DATE, director_gender VARCHAR(1), director_nationality VARCHAR(30), director_age INT, director_image BLOB)';
  database.query(directorsReset, function (err, result) {
    if (err) returnError(err, req, res, next);
     console.log("5. Directors Table RESET");
  });

  //6.2 CREATE MOVIE_GENRE TABLE
  let movieGenreReset = 'CREATE TABLE movieGenre (movie_id INT, genre_id INT)';
  database.query(movieGenreReset, function (err, result) {
    if (err) returnError(err, req, res, next);
     console.log("6. Movie-Genre Table RESET");
  });

  //7.2 CREATE GENRES TABLE
  let genresReset = 'CREATE TABLE genres (genre_id INT AUTO_INCREMENT PRIMARY KEY, genre_name VARCHAR(40))';
  database.query(genresReset, function (err, result) {
    if (err) returnError(err, req, res, next);
     console.log("7. Genres Table RESET");
  });

  //7.3 INSERT GENRES TABLE
  let genresInsert = 'INSERT INTO genres (genre_name) VALUES ("Genre 1"), ("Genre 2"), ("Genre 3")';
  database.query(genresInsert, function (err, result) {
    if (err) returnError(err, req, res, next);
     console.log("7.1 Genres Table Insertion completed");
  });

  //8.2 CREATE Stage Images
  let stageImgReset = 'CREATE TABLE stageimages (movie_id INT, stage_image BLOB)';
  database.query(stageImgReset, function (err, result) {
    if (err) returnError(err, req, res, next);
     console.log("8. Stage Imgs Table RESET");
  });

  //9.2 CREATE Ratings
  let ratingsReset = 'CREATE TABLE ratings (rating_id INT AUTO_INCREMENT PRIMARY KEY, rating_avg_point FLOAT, rating_no_of_ratings INT, movie_id INT)';
  database.query(ratingsReset, function (err, result) {
    if (err) returnError(err, req, res, next);
     console.log("9. Ratings Table RESET");
  });

  //send testing page to user
  res.json({
    status: 200,
    msg: 'add successful'
  });
});

exports.addActor = catchAsync(async (req, res, next) => {
  //INSERT into Actor table
  let sql = `INSERT INTO actors (actor_name, actor_born_date, actor_gender, actor_nationality, actor_age) VALUES ("${req.body.name}", "${req.body.bornDate}", "${req.body.gender}", "${req.body.nation}", ${req.body.age})`;
  let newActor = {};
  database.query(sql, function (err, result) {
    if (err) returnError(err, req, res, next);

    newActor.id = result.insertId;
    newActor.name = req.body.name;

    res.json({
      status: 203,
      actor: newActor,
      msg: 'success'
    })
  });
});

exports.addDirector = catchAsync(async (req, res, next) => {
  //INSERT into Actor table
  let sql = `INSERT INTO directors (director_name, director_born_date, director_gender, director_nationality, director_age) VALUES ("${req.body.name}", "${req.body.bornDate}", "${req.body.gender}", "${req.body.nation}", ${req.body.age})`;
  let newDirector = {};

  database.query(sql, function (err, result) {
    if (err) returnError(err, req, res, next);

    newDirector.id = result.insertId;
    newDirector.name = req.body.name;

    res.json({
      status: 203,
      director: newDirector,
      msg: 'success'
    })
  });
});

exports.addMovie = catchAsync(async (req, res, next) => {
  //format data 
  let movieName = req.body.movieName;
  let moviePrice = parseInt(req.body.moviePrice);
  let movieCountry = req.body.movieCountry;
  let movieLanguage = req.body.movieLanguage;
  let movieBoxOffice = parseInt(req.body.movieBoxOffice);
  let movieBudget = parseInt(req.body.movieBudget);
  let movieReleaseDate = req.body.movieReleaseDate;
  let actorList = req.body.actorList;
  let actorRoleList = req.body.actorRoleList;
  let directorList = req.body.directorList;
  let genreList = req.body.genreList;
  
  //Insert into Movie Table
  let movieSQL = `INSERT INTO movies (movie_name, movie_price, movie_country, movie_language, movie_box_office, movie_budget, movie_release_date, movie_cover_img) VALUES ("${movieName}", ${moviePrice}, "${movieCountry}", "${movieLanguage}", ${movieBoxOffice}, ${movieBudget},"${movieReleaseDate}", "${movieName}.png")`;
  let newMovie = {};
  database.query(movieSQL, function (err, result) {
    if (err) returnError(err, req, res, next);

    newMovie.id = result.insertId;
    newMovie.name = req.body.name;

    //Insert into genre table
    let genreListSQL = '';
    for(let i = 0; i < genreList.length; i++){
      genreListSQL += (genreListSQL !== '')? `, ("${newMovie.id}", "${genreList[i]}")` : `("${newMovie.id}", "${genreList[i]}")`;
    }
    
    let genreSQL = `INSERT INTO movieGenre (movie_id, genre_id) VALUES ${genreListSQL}`;
    database.query(genreSQL, function (err, result) {
      if (err) returnError(err, req, res, next);

      //Insert into director list
      let directorListSQL = '';
      for(let i = 0; i < directorList.length; i++){
        directorListSQL += (directorListSQL !== '')? `, ("${newMovie.id}", "${directorList[i]}")` : `("${newMovie.id}", "${directorList[i]}")`;
      }
      
      let directorSQL = `INSERT INTO moviesDirectors (movie_id, director_id) VALUES ${directorListSQL}`;
      database.query(directorSQL, function (err, result) {
        if (err) returnError(err, req, res, next);

        //Insert into actor list
        let actorListSQL = '';
        for(let i = 0; i < actorList.length; i++){
          actorListSQL += (actorListSQL !== '')? `, ("${newMovie.id}", "${actorList[i]}", "${actorRoleList[i]}")` : `("${newMovie.id}", "${actorList[i]}", "${actorRoleList[i]}")`;
        }
        let actorSQL = `INSERT INTO moviesActors (movie_id, actor_id, role) VALUES ${actorListSQL}`;
        database.query(actorSQL, function (err, result) {
          if (err) returnError(err, req, res, next);

          res.json({
            status: 203,
            movie: newMovie,
            msg: 'success'
          });
        });
      });
    });
  });
});

exports.admin = catchAsync(async (req, res, next) => {
  //send testing page to user
  res.sendFile(process.env.ABS_PATH_DEV + '/admin/movie.html');
});

exports.getDirectors = catchAsync(async (req, res, next) => {
  let sql = 'SELECT * FROM directors';
  let directors;

  database.query(sql, (err, result)  => {
    if (err) returnError(err, req, res, next);
    else{
      directors = result;

      res.status(200).json({
        status: 200,
        directors
      });
    }
  });
});

exports.getActors = catchAsync(async (req, res, next) => {
  let sql = 'SELECT * FROM actors';
  let actors;

  database.query(sql, (err, result)  => {
    if (err) returnError(err, req, res, next);
    else{
      actors = result;

      res.status(200).json({
        status: 200,
        actors
      });
    }
  });
});

exports.getGenres = catchAsync(async (req, res, next) => {
  let sql = 'SELECT * FROM genres';
  let genres;

  database.query(sql, (err, result)  => {
    if (err) returnError(err, req, res, next);
    else{
      genres = result;

      res.status(200).json({
        status: 200,
        genres
      });
    }
  });
});

exports.getMoviesList = catchAsync(async (req, res, next) => {
  let sql = 'SELECT movie_id, movie_name FROM movies';
  let movies;

  database.query(sql, (err, result)  => {
    if (err) returnError(err, req, res, next);
    else{
      movies = result;

      res.status(200).json({
        status: 200,
        movies
      });
    }
  });
});

exports.updateCover = catchAsync(async (req, res, next) => {
  let uploadFile;
  let uploadPath;
  let fileName;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  // name of the input is sampleFile
  uploadFile = req.files.coverImage;
  uploadPath = path.normalize(__dirname + '/../public/upload/') + fileName;
  
  uploadFile.mv(uploadPath, function (err) {
    if (err) returnError(err, req, res, next);

    res.status(200).json({
      status: 200
    });
  });


});
/*
#1. Update add movie form's actor list(w new ID)
#2. Create add movies form (with cover image upload)
#3. Create add stage images for specific movie
4. Client Side:
  1. Login function (recaptcha)

  //Before login
  1. Home page
    - Latest releases (GET 20 records : Before today's date)
    - Upcoming (GET ALL records BY PAGING : After today's date)
    - Website top pick (GET ALL records : Movie.topPick == TRUE)
    - Popular (GET ALL records : sort by noOfRatings)
    - Best 50 reviewed & worst reviewed (GET 50 records each : sort by highest/lowest rating points)
    - News [HARDCODED]
  2. Search function
    - Search movies by categories, datetime, actor/actress/director, rating (GET ALL records BY PAGING)
  3. Display Movie Info page
    - add rating
    
  //After login
  1. Home page
    + Your favorite (by rating)
  2. Display Movie Info Page
    + Rate Movie with comment
  3. Buy a movie with Stripe page
*/