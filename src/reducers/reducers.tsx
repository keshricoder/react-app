// reducers.tsx
import {v4 as uuid} from 'uuid';

let initialState = {
  contacts: [
    {id:uuid(), firstName: "Shailesh", lastName: "Keshri", status: "active"},
    {id:uuid(), firstName: "John", lastName: "Doe", status: "inactive"},
    {id:uuid(), firstName: "Martin", lastName: "Rose", status: "active"},
  ],
};

const contactReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case "EDIT_CONTACT":
      const updatedContacts = state.contacts.map((contact) => {
        if (contact.id === action.payload.id) {
          return {
            ...contact,
            ...action.payload.updatedContact,
          };
        }
        return contact;
      });
      return {
        ...state,
        contacts: updatedContacts,
      };
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default contactReducer;
