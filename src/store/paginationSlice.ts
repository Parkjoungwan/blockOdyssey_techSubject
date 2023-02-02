import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { Ipagination } from "../component/admin/types";

const initialState:Ipagination = { pageNumber: 1, rowNumber: 10 };

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    changePage(state, action: PayloadAction<number>) {
      state.pageNumber = action.payload;
    },
    changeRow(state, action: PayloadAction<number>) {
      state.rowNumber = action.payload;
    }
  },
});

export const { changePage, changeRow } = paginationSlice.actions
export default paginationSlice.reducer;