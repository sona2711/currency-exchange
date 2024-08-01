import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface INote {
  currency: string;
  title: string;
  body: string;
}

interface INotesState {
  notes: INote[];
}

const initialState: INotesState = {
  notes: []
};

const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<INote>) => {
      state.notes.push(action.payload);
    },
    updateNote: (state, action: PayloadAction<INote>) => {
      const index = state.notes.findIndex(note => note.currency === action.payload.currency);
      if (index !== -1) {
        state.notes[index] = action.payload;
      }
    }
  }
});

export const { addNote, updateNote } = noteSlice.actions;
export default noteSlice.reducer;
