// actions.tsx
export const addContact = (contact: any) => ({
  type: "ADD_CONTACT",
  payload: contact,
});

export const editContact = (id:any, updatedContact: any) => ({
  type: "EDIT_CONTACT",
  payload: { id, updatedContact },
});

export const deleteContact = (id:any) => ({
  type: "DELETE_CONTACT",
  payload: id,
});
