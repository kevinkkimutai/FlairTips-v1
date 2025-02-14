'use client';
import { useForgetPasswordMutation } from '@/redux/actions/authActions';
import React from 'react'
import { toast } from 'react-toastify';

export default function ProfileActions({user}) {
    const [forgotPass] = useForgetPasswordMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const requestBody = {
            request: {
              request_id: Date.now(),
              data: {
                identity: user.email,
              },
            },
          };
          const result = await forgotPass(requestBody).unwrap();
            toast.success("Password reset email sent!");
         
        } catch (error) {
          console.log("Error sending reset email:", error);
          toast.error(error?.data?.message || "Failed to send reset email!");
        }
      };

      
  return (
    <div className='rounded-lg shadow-md border px-4 py-4 flex- w-full flex gap-5'>
<div>
<button onClick={handleSubmit} className='py-2 px-2 bg-blue-600 text-white rounded-lg'>
    Change Password
</button>
</div>

<div>
<button className='py-2 px-2 bg-blue-600 text-white rounded-lg'>
    Request Validation
</button>
</div>
    </div>
  )
}
