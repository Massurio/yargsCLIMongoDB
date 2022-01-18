const Movie = require('./model');
const mongoose = require('mongoose');

exports.addMovie = async (movieObj) => {
  try {
    const newMovie = new Movie(movieObj);
    await newMovie.save();
    mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
};

exports.deleteMovie = async (movieObj) => {
  try {
    await Movie.deleteOne(movieObj);
    console.log(`${movieObj.title} has been removed.`);
    mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
};
exports.updateMovie = async (filter, update) => {
  try {
    await Book.findOneAndUpdate(filter, update);
    console.log(`Successfully updated.`);
    mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
};
exports.listAllMovies = async () => {
  try {
    await Movie.find();
    mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
};
