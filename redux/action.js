export const CREATE = "CREATE";
export const DELETE = "DELETE";
export const UPDATE = "UPDATE";
export const THEME = "THEME";

export const create = (list) => ({
  type: CREATE,
  payload: list,
});

export const deleteItem = (id) => ({
  type: DELETE,
  payload: id,
});

export const update = (item) => ({
  type: UPDATE,
  payload: item,
});

export const themeItem = (color) => ({
  type: THEME,
  payload: color,
});
