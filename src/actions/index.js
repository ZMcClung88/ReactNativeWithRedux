export const selctLibrary = libraryId => {
  return {
    type: 'select_library',
    payload: libraryId
  };
};
