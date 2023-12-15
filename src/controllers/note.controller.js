import * as noteService from '../services/note.service';
import HttpStatus from 'http-status-codes'

export const newNote = async (req, res) => {
    try {
        const data = await noteService.newNote(req.body);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: "Note Saved Successfully!!"
        })
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: `${error}`
        })
        console.log(error);
    }
}

export const getAllNotes = async (req, res) => {
    try {
        const data = await noteService.getAllNotes();
        res.status(HttpStatus.ACCEPTED).json({
            code: HttpStatus.ACCEPTED,
            data: data,
            message: "All Notes fetched Successfully!!"
        })
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: `${error}`
        })
    }
}