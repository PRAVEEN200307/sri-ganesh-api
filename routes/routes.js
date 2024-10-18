import express from 'express';
import { createPost, delectPost, getAlldata, getOneData, updatePost } from '../controllers/controller.js';

const router = express.Router();

// get the all the data
router.get('/', getAlldata)

//get One data
router.get('/:id', getOneData)

// create
router.post("/", createPost);

// update
router.put('/:id', updatePost)

// delect
router.delete('/:id', delectPost)

export default router;