import React, { useState } from 'react';
import { User } from './AuthPage'; // Re-use User definition

interface AccountManagementPageProps {
  currentUser: User;
  onUpdateProfile: (updatedData: Partial<User>) => void; // Simulate update
  onChangePassword: () => void; // Simulate triggering change password flow
}

const AccountManagementPage: React.FC<AccountManagementPageProps> = ({ currentUser, onUpdateProfile, onChangePassword }) => {
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editableName, setEditableName] = useState(currentUser.name);
  // Email editing is often more complex due to verification, so keeping it simple
  // const [editableEmail, setEditableEmail] = useState(currentUser.email);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditableName(e.target.value);
  };

  const handleSaveProfile = () => {
    if (editableName.trim() === '') {
      alert("Name cannot be empty.");
      return;
    }
    onUpdateProfile({ name: editableName });
    setIsEditingProfile(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">My Account</h1>

      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl border border-gray-200">
        {/* Profile Information Section */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl font-semibold mb-6 border-b pb-3">Profile Information</h2>
          {!isEditingProfile ? (
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Full Name</p>
                <p className="text-lg text-gray-800">{currentUser.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email Address</p>
                <p className="text-lg text-gray-800">{currentUser.email}</p>
              </div>
              <button
                onClick={() => setIsEditingProfile(true)}
                className="mt-2 text-sm text-[#D4AF37] hover:underline"
              >
                Edit Profile
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  value={editableName}
                  onChange={handleNameChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#D4AF37] focus:border-[#D4AF37]"
                />
              </div>
               <div>
                <p className="text-sm text-gray-500">Email Address (cannot be changed here)</p>
                <p className="text-lg text-gray-400 bg-gray-100 p-2 rounded-md">{currentUser.email}</p>
              </div>
              <div className="flex space-x-3 mt-3">
                <button
                  onClick={handleSaveProfile}
                  className="bg-[#D4AF37] text-white px-4 py-2 !rounded-button hover:bg-[#B8860B] transition-colors"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => {
                    setIsEditingProfile(false);
                    setEditableName(currentUser.name); // Reset on cancel
                  }}
                  className="bg-gray-200 text-gray-700 px-4 py-2 !rounded-button hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Security Section */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl font-semibold mb-6 border-b pb-3">Security</h2>
          <div className="flex justify-between items-center">
            <p className="text-gray-700">Password</p>
            <button
              onClick={() => {
                alert("Change Password functionality not implemented in this prototype.");
                // onChangePassword(); // This would trigger a modal or new page in a real app
              }}
              className="text-sm bg-gray-100 text-gray-800 px-4 py-2 !rounded-button hover:bg-[#D4AF37] hover:text-white transition-colors"
            >
              Change Password
            </button>
          </div>
        </section>

        {/* Address Management Placeholder */}
        <section>
          <h2 className="font-serif text-2xl font-semibold mb-6 border-b pb-3">Address Book</h2>
          <div className="text-center py-6 bg-gray-50 rounded-md">
            <p className="text-gray-600 italic mb-3">Manage your saved shipping and billing addresses.</p>
            <button
              onClick={() => alert("Address management not implemented in this prototype.")}
              className="text-sm bg-gray-100 text-gray-800 px-4 py-2 !rounded-button hover:bg-[#D4AF37] hover:text-white transition-colors"
            >
              Manage Addresses
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AccountManagementPage;
