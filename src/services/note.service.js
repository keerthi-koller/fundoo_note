import Note from '../models/note.model';

export const newNote = async (body) => {
    const data = await Note.create(body);
    return data;
}

export const getAllNotes = async () => {
    const data = await Note.find();
    return data;
}