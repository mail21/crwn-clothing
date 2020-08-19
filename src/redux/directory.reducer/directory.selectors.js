import { createSelector } from 'reselect';

const selectDirectory = (state) => state.directory;

export const getSections = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
