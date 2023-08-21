import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../action/actions";

interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  status: string;
}
interface ContactListProps {
  setEditContactId: React.Dispatch<React.SetStateAction<string | null>>;
  handleViewDetails: (contact:Contact)=> void;
}

const ContactList = ({ setEditContactId, handleViewDetails }: ContactListProps) => {
  const dispatch = useDispatch();
  const contacts: Contact[] = useSelector((state: any) => state.contacts);

  const handleDelete = (id: string) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Contact List</h2>
      {contacts.length === 0 ? (
        <p className="text-gray-600">No Contacts Found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          {contacts.map((contact: Contact) => (
            <div
              key={contact.id}
              className="w-full block p-6 bg-slte-100 rounded-lg border border-gray-200 shadow-md"
            >
              <div className="flex-col justify-between items center">
                <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                  {contact.firstName} {contact.lastName}
                </h1>
                <p
                  className={` ${
                    contact.status === "inactive"
                      ? "text-rose-500"
                      : "text-green-500"
                  } font-medium uppercase `}
                >
                  {contact.status}
                </p>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <button
                  className="ml-2 text-blue-600"
                  onClick={() => handleViewDetails(contact)}
                >
                  View
                </button>
                <button
                  className="ml-2 text-indigo-600"
                  onClick={() => setEditContactId(contact.id)}
                >
                  Edit
                </button>
                <button
                  className="ml-2 text-rose-600"
                  onClick={() => handleDelete(contact.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactList;
