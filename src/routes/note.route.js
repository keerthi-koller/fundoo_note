import express from 'express'
import * as noteController from '../controllers/note.controller'

const router = express.Router();

router.post('', noteController.newNote);
router.get('', noteController.getAllNotes);

export default router;