import express from "express";
import { createMarks, showMarks } from "../controller/marks.js";
const marksrouter = express.Router()



marksrouter.get('/marks', showMarks)


marksrouter.post('/marks' , createMarks)

export default marksrouter