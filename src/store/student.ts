import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Student } from "../services/jsonPlaceholder";

export const initialState = [{
  "id": "Id1637586198021",
  "firstName": "melek",
  "lastName": "mliki",
  "birthday": "26/02/1996",
  "course": "ReactJs",
  "hours": "23",
  "price": "25"
}] as Student[];

const studentsList = createSlice({
  name: "studentsList",
  initialState,
  reducers: {

    addStudent: {
      reducer: (state, action: PayloadAction<Student>) => {
        state.push(action.payload);
      },
      prepare: ({firstName, lastName, birthday, course, hours, price}) => ({
        payload: {
          id: `Id${(new Date()).getTime()}`,
          firstName,
          lastName,
          birthday,
          course,
          hours,
          price,
        } as Student,
      }),
    },
    updateStudent: {
      reducer: (state, action: PayloadAction<Student>) => {
        const index = state.findIndex((student) => student.id === action.payload.id);
        state.splice(index, 1);
        state.push(action.payload);
      },
      prepare: ({firstName, lastName, birthday, course, hours, price}) => ({
        payload: {
          id: `Id${(new Date()).getTime()}`,
          firstName,
          lastName,
          birthday,
          course,
          hours,
          price,
        } as Student,
      }),
    },
    removeStudent(state, action: PayloadAction<string>) {
      const index = state.findIndex((student) => student.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export default studentsList.reducer;
export const { addStudent,updateStudent, removeStudent } = studentsList.actions;
