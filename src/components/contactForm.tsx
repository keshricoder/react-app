import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, editContact } from '../action/actions';

interface ContactFormProps {
  editContactId?: string | null;
  setEditContactId: React.Dispatch<React.SetStateAction<string | null>>;
  hideForm: boolean;
  onHideForm: () => void;
}

const ContactForm = ({editContactId, setEditContactId, hideForm, onHideForm} : ContactFormProps) => {
  const dispatch = useDispatch();
  const contacts = useSelector((state: any) => state.contacts);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [status, setStatus] = useState('active');
  const [formTitle, setFormTitle] = useState('Add New Contact');

  useEffect(() => {
    if (editContactId) {
      const contactToEdit = contacts.find((contact: { id: string; }) => contact.id === editContactId);
      if (contactToEdit) {
        setFirstName(contactToEdit.firstName);
        setLastName(contactToEdit.lastName);
        setStatus(contactToEdit.status);
        setFormTitle('Edit Your Contact');
      }
    }
  }, [editContactId, contacts]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editContactId) {
      const updatedContact = {
        id: editContactId,
        firstName,
        lastName,
        status,
      };
      dispatch(editContact(editContactId, updatedContact));
      setFormTitle('Add New Contact'); // Reset title after editing
    } else {
      const newContact = {
        id: Date.now().toString(),
        firstName,
        lastName,
        status,
      };
      dispatch(addContact(newContact));
    }

    setFirstName('');
    setLastName('');
    setStatus('active');
    setEditContactId(null);
    onHideForm();
  };

  return (
    <div className={`flex justify-center items-center ${hideForm? 'hidden': ''} `}>
      <div className="w-1/2 p-4 border rounded">
        <h2 className="text-center text-lg font-semibold mb-2">{formTitle}</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <label className="text-primary">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border p-2 rounded w-full"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <label className="text-primary">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border p-2 rounded w-full"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <label>Status</label>
            <div>
              <label className="mr-4">
                <input
                  type="radio"
                  value="active"
                  checked={status === 'active'}
                  onChange={() => setStatus('active')}
                />
                Active
              </label>
              <label>
                <input
                  type="radio"
                  value="inactive"
                  checked={status === 'inactive'}
                  onChange={() => setStatus('inactive')}
                />
                Inactive
              </label>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Save Contact
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
