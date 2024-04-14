import express from "express";
import {deleteJob, getAllJobs, getMyJobs, postJob, updateJob, getSingleJob} from "../controllers/jobController.js"
import { isAuthorized } from "../middlewares/auth.js";

const router = express.Router();

router.get('/getall',getAllJobs);
router.get("/:id", isAuthorized, getSingleJob);
router.post('/post', isAuthorized,postJob);
router.get('/getmyjobs', isAuthorized,getMyJobs);
router.put('/update/:id', isAuthorized,updateJob);
router.delete('/delete/:id', isAuthorized,deleteJob);

export default router