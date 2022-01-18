require('./db/connection');
const yargs = require('yargs');
const { addMovie } = require('./movie/movie.functions');
const mongoose = require('mongoose');

const app = async (args) => {
  try {
    if (args.add) {
      const movieObj = {
        title: args.title,
        actor: args.actor,
        rating: args.rating,
      };
      await addMovie(movieObj);
      //run add movie functionality, passing a movieObj
    
    } else {
      console.log('Incorrect command');
      mongoose.disconnect();
    }
  } catch (error) {
    console.log(error);
    mongoose.disconnect();
  }
};

app(yargs.argv);
