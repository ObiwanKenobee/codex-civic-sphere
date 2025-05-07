
import React from 'react';
import Navigation from '@/components/layout/Navigation';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif font-bold mb-6">Your Profile</h1>
        <p className="text-lg mb-6">Manage your citizen account, view your participation history, and track your contributions.</p>
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4">
          <p className="text-yellow-700">Coming soon: Detailed user profile and settings.</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
