import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { Isearch } from "../component/admin/types";

const initialState: Isearch = { condition: "all", keyword: "" };

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    changeCondition(state, action: PayloadAction<string>) {
      state.condition = action.payload;
    },
    changeKeyword(state, action: PayloadAction<string>) {
      state.keyword = action.payload;
    },
  },
});

export const { changeCondition, changeKeyword } = searchSlice.actions;
export default searchSlice.reducer;
