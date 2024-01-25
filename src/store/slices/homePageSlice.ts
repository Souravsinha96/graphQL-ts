import { createSlice } from '@reduxjs/toolkit';
import { GetAnimePageQuery } from '../../__generated__/graphql';

type homePage = {
  animePage: GetAnimePageQuery | null;
};

const initialState: homePage = {
  animePage: null,
};
const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    setAnimePage(state, action) {
      state.animePage = action.payload;
    },
  },
});

export const { setAnimePage } = homePageSlice.actions;
export default homePageSlice.reducer;
