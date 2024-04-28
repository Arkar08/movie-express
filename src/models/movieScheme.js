/* eslint-disable no-undef */
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    poster: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    director: [
      {
        name: {
          type: String,
          required: true,
        },
      },
    ],
    summary: [
      {
        list: {
          type: String,
          required: true,
        },
      },
    ],
    languages: [
      {
        language: {
          type: String,
          required: true,
        },
      },
    ],
    rating: {
      type: Number,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const MovieModal = mongoose.model("movieModal", movieSchema);

export default MovieModal;
