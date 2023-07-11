import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Modal = ({ isOpen, onClose, onSubmit }) => {
  
    const [url,setUrl]= useState("")
    function isValidUrl(url) {
        // Regular expression pattern for URL validation
        const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
      
        return urlPattern.test(url);
      }
  const handleFormSubmit = async(event) => {
    event.preventDefault();
 
    if(!isValidUrl(url)){
     return toast.error("Invalid URL",{position:"top-right"})
    }
    
    await onSubmit(url);
    setUrl("")
  };

  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${isOpen ? '' : 'hidden'}`}
    >
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div className="relative bg-white rounded-lg px-8 py-6">
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label
                htmlFor="url"
                className="block text-gray-700 font-bold mb-2"
              >
                URL:
              </label>
              <input
                type="text"
                id="url"
                name="url"
                value={url}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                placeholder="Enter URL"
                onChange={(e)=>setUrl(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="px-4 py-2 mr-2 text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-500 text-white text-sm font-medium rounded hover:bg-indigo-700 focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
