import { createSlice } from "@reduxjs/toolkit";

export const trainer = createSlice({
  name: 'trainer',
  initialState: '',
  reducers: {
    setTrainerG: ( state, action ) => action.payload
  }
})

export const { setTrainerG } = trainer.actions

export default trainer.reducer