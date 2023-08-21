import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import ContactForm from "../components/contactForm";
import ContactList from "../components/contactList";

interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  status: string;
}

const ContactPage = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editContactId, setEditContactId] = useState<string | null>(null);

  const [selectedContact, setSelectedContact] = useState<Contact | null>(null); // Add this state
  
  const handleCreateContact = () => {
    setIsFormVisible(true);
    setEditContactId(null);
  };

  const handleHideForm = () => {
    setIsFormVisible(false);
  };

  const viewContact = (contact:Contact)=>{
    setSelectedContact(contact)
  }
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-3/4 p-8">
        <div className="text-center">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
            onClick={handleCreateContact}
          >
            Create Contact
          </button>
        </div>
        <div className="contact-form">
          {isFormVisible && (
            <ContactForm
              editContactId={editContactId}
              setEditContactId={setEditContactId}
              hideForm={!isFormVisible}
              onHideForm={handleHideForm}
            />
          )}
        </div>
        <div className="flex justify-center items-center p-y-2">
          <ContactList
            setEditContactId={(id) => {
              setIsFormVisible(true);
              setEditContactId(id);
            }}
            handleViewDetails={viewContact}
          />
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 ${
          selectedContact ? "" : "hidden"
        }`}
      >
        <div className="fixed top-1/4 left-1/4 right-1/4 p-6 bg-white rounded-lg shadow-md">
          {selectedContact && (
            <>
              <h2 className="text-lg font-semibold mb-2">Contact Details</h2>
              <p>
                Name: {selectedContact.firstName} {selectedContact.lastName}
              </p>
              <p>Status: {selectedContact.status}</p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
                onClick={()=> setSelectedContact(null)}
              >
                Close
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
