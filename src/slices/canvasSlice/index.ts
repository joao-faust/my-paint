import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  color: '#000000',
  bgColor: '#FFFFFF',
  lineWidth: 4,
  eraser: { on: false, color: '#FFFFFF' },
};

const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    changeColor(state, action: PayloadAction<string>): void {
      state.color = action.payload;
    },
    activateEraser(state): void {
      state.eraser.on = !state.eraser.on;
    },
    changeLineWidth(state, action: PayloadAction<number>): void {
      state.lineWidth = action.payload;
    },
  },
});

export const { changeColor, activateEraser, changeLineWidth } =
  canvasSlice.actions;
export default canvasSlice.reducer;
