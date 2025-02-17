"use client";

import React, { useState, useEffect } from "react";
import AvatarSection from "./AvatarSection";
import DetailsSection from "./DetailsSection";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/reducers/AuthReducers";
import HistorySection from "./HistorySection";
import DeleteUser from "./DeleteUser";
import ProfileActions from "./ProfileActions";
import { useForgetPasswordMutation } from "@/redux/actions/authActions";
import { toast } from "react-toastify";
import UpdateFormModal from "./UpdateFormModal";

export default function ProfileCompiler() {
  const user = useSelector(selectUser);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // State for form data
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    full_name: "",
  });

  // UseEffect to sync formData with user updates
  useEffect(() => {
    if (user) {
      setFormData({
        email: user.email || "N/A",
        phone: user.phone || "N/A",
        full_name: `${user.first_name} ${user.middle_name || ""} ${user.last_name}`.trim(),
      });
    }
  }, [user]); // Runs whenever `user` updates

  const [forgotPass] = useForgetPasswordMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const requestBody = {
        request: {
          request_id: Date.now(),
          data: {
            email: formData.email,
            phone: formData.phone,
            full_name: formData.full_name,
          },
        },
      };

      console.log("Request body:", requestBody);

      const result = await forgotPass(requestBody).unwrap();
      console.log("Profile update response:", result);
      setIsOpen(false);
      setLoading(false);
      toast.success("Profile updated successfully. 🎉");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error(error?.data?.message || "Failed to update profile!");
      setLoading(false);
      setIsOpen(false);
    }
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCancel = () => {
    setIsOpen(false);
    setFormData({
      email: user?.email || "",
      phone: user?.phone || "",
      full_name: `${user?.first_name} ${user?.middle_name || ""} ${user?.last_name}`.trim(),
    });
  };

  return (
    <>
      <div className="flex max-md:flex-col gap-5 w-full">
        {/* Left section */}
        <div className="md:w-1/3 w-full flex flex-col gap-5">
          <AvatarSection user={user} />
        </div>

        {/* Right section */}
        <div className="flex-1 flex flex-col gap-5">
          <DetailsSection user={user} handleOpenModal={handleOpenModal} />
          <div className="flex max-md:flex-col gap-4">
            <HistorySection />
            <div className="flex-1 max-h-[400px] w-full flex flex-col gap-5">
              <ProfileActions user={user} />
              <DeleteUser user={user} />
            </div>
          </div>
        </div>
      </div>
      
      <UpdateFormModal
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formData={formData}
        handleCancel={handleCancel}
        isOpen={isOpen}
      />
    </>
  );
}
