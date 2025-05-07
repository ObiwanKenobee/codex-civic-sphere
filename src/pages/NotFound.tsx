
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-serif font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">This page doesn't exist in the Codex</p>
        <Link to="/" className="px-4 py-2 bg-codex-blue hover:bg-blue-800 text-white rounded-md">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
