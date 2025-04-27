import React, { useState } from "react";
import { toast } from "react-toastify";
import DeleteAffirmationModal from "./DeleteAffirmationModal";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { logOut } from "@/redux/reducers/AuthReducers";

export default function DeleteUser({ user, deleteAccount }) {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleConfirmDelete = () => {
    if (inputValue !== user?.first_name) {
      toast.error("The name you entered does not match.");
      return;
    }
    setIsOpen(true);
  };

  const handleCancel = () => {
    setIsOpen(false);
    setInputValue("");
  };

  const handleDelete = async () => {
    const requestBody = {
      request: {
        request_id: Date.now(),
        data: {
          id: user.id,
        },
      },
    };

    try {
      const response = await deleteAccount(requestBody).unwrap();
      if (response) {
        setIsOpen(false);
        setInputValue("");
        dispatch(logOut());
        router.push("/");
        toast.success("Account deleted successfully! 🥶");
      }
    } catch (error) {
      setIsOpen(false);
      toast.error("Error deleting account. Please try again later.");
    }
  };

  return (
    <>
      <div className="rounded-lg shadow-md border px-4 py-4 bg-red-100 flex flex-col items-center text-center w-full">
        <h3 className="font-bold text-lg text-red-600">Delete Account</h3>
        <p className="mt-2 text-gray-700">This will permanently delete your account and data.</p>

        <p className="mt-4 text-sm font-semibold text-gray-800">
          To confirm, type <span className="bg-gray-200 px-4 py-1 rounded-md">{user?.firstName}</span> below:
        </p>

        <input
          type="text"
          className="mt-3 px-3 py-2 border rounded-lg w-[75%] text-center"
          placeholder="Enter your first name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button
          className="py-2 mt-4 px-4 text-sm font-bold bg-red-500 hover:bg-red-600 text-white rounded-lg disabled:opacity-50"
        //   disabled={inputValue !== user?.first_name}
          onClick={handleConfirmDelete}
        >
          Delete
        </button>
      </div>

      {isOpen && (
        <DeleteAffirmationModal
          user={user}
          isOpen={isOpen}
          handleCancel={handleCancel}
          handleDelete={handleDelete}
        />
      )}
    </>
  );
}
