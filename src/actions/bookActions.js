export const BOOK_SELECTED = 'BOOK_SELECTED';

export const selectBook = book => {
  // selectBook is an ActionCreator, it needs to return an action,
  // on object with a type property.
  return {
    type: BOOK_SELECTED,
    payload: book
  };
};
