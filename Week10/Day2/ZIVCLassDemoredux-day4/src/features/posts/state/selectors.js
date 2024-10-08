import { createSelector } from "@reduxjs/toolkit";

import { state } from "./slice";

export const selectPosts = createSelector([state], (state) => state.posts);

export const selectStatus = createSelector([state], (state) => state.status);
