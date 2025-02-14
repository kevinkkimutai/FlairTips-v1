import React from "react";

export default function DetailsSection({ user, handleOpenModal }) {
  const formatDate = (timestamp) => {
    if (!timestamp) return "N/A";
    const date = new Date(timestamp * 1000); 
    return date.toLocaleString(); 
  };

  return (
    <>
      <div className="w-full rounded-lg border shadow-md">
        {/* header */}
<div className="w-full px-4 flex items-center justify-between border-b py-2">
<h3 className="font-bold">My Bio</h3>
<button onClick={handleOpenModal} className="py-[2px] flex items-center text-center justify-center px-2 text-sm font-bold bg-blue-500 text-white rounded-lg">
    EDIT
</button>
</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          <div>
            <label htmlFor="first_name" className="text-gray-700">First Name</label>
            <p className="py-2">{user?.first_name}</p>
          </div>
          <div>
            <label htmlFor="middle_name" className="text-gray-700">Middle Name</label>
            <p className="py-2">{user?.middle_name || "N/A"}</p>
          </div>
          <div>
            <label htmlFor="last_name" className="text-gray-700">Last Name</label>
            <p className="py-2">{user?.last_name}</p>
          </div>
          <div>
            <label htmlFor="email" className="text-gray-700">Email</label>
            <p className="py-2">{user?.email}</p>
          </div>
          <div>
            <label htmlFor="phone" className="text-gray-700">Phone</label>
            <p className="py-2">{user?.phone}</p>
          </div>
          <div>
            <label htmlFor="subscription_end_date" className="text-gray-700">Subscription End Date</label>
            <p className="py-2">{formatDate(user?.subscription_end_date)}</p>
          </div>
        </div>
      </div>
    </>
  );
}
