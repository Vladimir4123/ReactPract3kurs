import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const addComment = createAsyncThunk(
  "comments/addComment",
  async (comment, thunkAPI) => {
    try {
      const response = await fetch("https://dummyjson.com/comments/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(comment),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error adding comment");
    }
  }
);

const initialState = {
  comments: [],
  loading: false,
  error: null,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addComment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.loading = false;
        state.comments.push(action.payload.comment);
      })
      .addCase(addComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.comment;
      });
  },
});

export default commentsSlice.reducer;
