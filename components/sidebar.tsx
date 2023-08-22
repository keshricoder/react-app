import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
      <div className="w-1/4 bg-sky-900 text-white p-4">
        <h1 className="text-2xl font-semibold mb-4">Contact Management App</h1>
        <ul className="space-y-2">
          <li><Link to="/contacts">Contacts</Link></li>
          <li><Link to="/charts">Charts and Maps</Link></li>
        </ul>
      </div>
  );
}

export default Sidebar;
