import Note from '../models/note.model';

export const newNote = async (body) => {
    const data = await Note.create(body);
    return data;
}

export const getAllNotes = async () => {
    const data = await Note.find();
    return data;
}


/*
try {
    await newUser.save();
  } catch {
    const error = new Error("Error! Something went wrong.");
    return next(error);
  }
  let token;
  try {
    token = jwt.sign(
      { userId: newUser.id, email: newUser.email },
      "secretkeyappearshere",
      { expiresIn: "1h" }
    );
  } catch (err) {
    const error = new Error("Error! Something went wrong.");
    return next(error);
  }
  res
    .status(201)
    .json({
      success: true,
      data: { userId: newUser.id, 
          email: newUser.email, token: token },
    });
});
*/