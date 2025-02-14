import React from "react";

export default function UpdateFormModal({
  handleCancel,
  handleSubmit,
  handleChange,
  formData,
  isOpen,
}) {
  return (
    <>
      {isOpen && (
        <div className=" overflow-y-auto overflow-x-hidden bg-red-50/50 flex  fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full max-h-full">
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow-sm border">
              <button
                type="button"
                onClick={handleCancel}
                className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                data-modal-hide="popup-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="px-4 md:px-5 pb-4 text-start">
                <div className="border-b py-4">
                  <h2 className="text-2xl font-semibold">
                    Update User Details
                  </h2>
                </div>
                <form>
                  <div className="flex flex-col gap-4 mt-8">
                    <div className="mb-4">
                      <label
                        htmlFor="full_name"
                        className="text-start flex mb-2 text-sm font-medium text-gray-900 "
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="full_name"
                        value={formData.full_name}
                        onChange={handleChange}
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="name@flowbite.com"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="text-start flex mb-2 text-sm font-medium text-gray-900 "
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="name@flowbite.com"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="text-start flex mb-2 text-sm font-medium text-gray-900 "
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="name@flowbite.com"
                        required
                      />
                    </div>
                  </div>
                </form>

                <button
                  onClick={handleSubmit}
                  type="button"
                  className="py-2.5 px-5 ms-3 text-sm font-medium text-white focus:outline-none bg-blue-600 rounded-lg border border-gray-200 hover:bg-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
