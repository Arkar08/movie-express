import MovieModal from "../models/movieScheme.js";

//get movie

export const getMovieController = async (req, res) => {
  const movie = await MovieModal.find({});
  return res.status(200).json({ data: movie });
};

// post movie
export const postMovieController = async (req, res) => {
  const {
    title,
    genre,
    poster,
    year,
    director,
    summary,
    language,
    rating,
    company,
  } = req.body;

  try {
    // Create a new movie instance with the provided data
    // Save the new movie to the database
    const savedMovie = await MovieModal.create({
      title,
      genre,
      poster,
      year,
      director,
      summary,
      language,
      rating,
      company,
    });

    // Return the saved movie in the response
    return res.status(201).json(savedMovie);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// get movieID
export const getMovieIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const movieId = await MovieModal.findById({ _id: id });
    return res.status(200).json(movieId);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
// patch movie
export const patchMovieControllers = async (req, res) => {
  const { id } = req.params;
  try {
    const patchmovie = await MovieModal.findOneAndUpdate(
      { _id: id },
      { ...req.body }
    );
    return res.status(200).json(patchmovie);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// delete movie
export const deleteMovieController = async (req, res) => {
  const { id } = req.params;
  try {
    const deletemovie = await MovieModal.findOneAndDelete({ _id: id });
    return res.status(200).json(deletemovie);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
