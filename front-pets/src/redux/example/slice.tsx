import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Example {
  name: string;
  age: number;
}

const initialState: Example = {
  name: "",
  age: 0,
};

const exampleSlice = createSlice({
  name: "exampleSlice",
  initialState: initialState,
  reducers: {
    setName(state) {
      state.name = "Exemple";
    },
    setAge(state) {
      state.age = 21;
    },
  },
});

export const { setName, setAge } = exampleSlice.actions;

export default exampleSlice.reducer;
