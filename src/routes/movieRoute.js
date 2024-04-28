import { Router } from "express";
import * as movieOff from "../controllers/movieController.js";

const router = Router();
// get movie
router.get("/", movieOff.getMovieController);
// post movie
router.post("/", movieOff.postMovieController);
// get movieId
router.get("/:id", movieOff.getMovieIdController);
//patch movie
router.patch("/:id", movieOff.patchMovieControllers);
// delete movie
router.delete("/:id", movieOff.deleteMovieController);
export default router;
