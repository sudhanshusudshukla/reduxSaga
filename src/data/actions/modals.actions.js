const types = {
  OPEN_EDIT_MODAL: "OPEN_EDIT_MODAL",
  CLOSE_EDIT_MODAL: "CLOSE_EDIT_MODAL",
};

export default types;

export const openEditModal = (id) => {
  return { type: "OPEN_EDIT_MODAL", payload: { id } };
};

export const closEditModal = () => {
  return { type: "CLOSE_EDIT_MODAL" };
};
