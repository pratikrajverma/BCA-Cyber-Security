import express from "express";
import { createMarks, showMarks } from "../controller/marks.js";
import { auth, isStudent } from "../middleware/auth.js";
const marksrouter = express.Router()



marksrouter.get('/marks', auth , isStudent,  showMarks)


marksrouter.post('/marks' ,auth, isTeacher,  createMarks)

export default marksrouter