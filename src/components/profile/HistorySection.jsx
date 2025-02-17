'use client';
import { useGetPaymentHistoryMutation } from '@/redux/actions/paymentHistoryActions';
import { selectPaymentHistory, setPaymentHistory } from '@/redux/reducers/paymentHistoryReducers';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function HistorySection() {
  const paymentHistory = useSelector(selectPaymentHistory);
  const [getPaymentHistory] = useGetPaymentHistoryMutation();
  const dispatch = useDispatch();
  
  const [paymentStatus, setPaymentStatus] = React.useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const requestBody = {
        request: {
          request_id: Date.now(),
          data: {
            page: 0,
          },
        },
      };

      try {
        const response = await getPaymentHistory(requestBody).unwrap();
        console.log("Payment History fetched", response);
        setPaymentStatus(response.status); 
        dispatch(setPaymentHistory(response.items)); 

      } catch (error) {
        console.log("Please log in to get subscription history", error);
      }
    };

    fetchUser();
  }, [getPaymentHistory, dispatch]);

  return (
    <div className='rounded-lg shadow-md border md:w-2/5 px-4 max-h-[400px] hide-scrollbar overflow-scroll'>
      <div className='w-full flex items-center justify-start bg-white border-b py-2 sticky top-0'>
        <h3 className='font-semibold'>Subscription History</h3>
      </div>

      <div>
        {paymentHistory && paymentHistory.length > 0 ? (
          <>
            {/* Display payment status
            <div className="py-2">
              <p className="text-gray-700 font-semibold">Payment Status: {paymentStatus === 1 ? 'Success' : 'Failure'}</p>
            </div> */}

            {paymentHistory.map((payment, index) => (
              <div key={index} className='border rounded-md mt-3 p-2 mb-2 shadow-md'>
                <p className='text-gray-700 flex items-center justify-between'>
                  <span className='text-sm'>{new Date(payment.deposit_date * 1000).toLocaleString()}</span> 
                  <span className='text-sm bg-green-400 rounded-lg px-2'>{payment.method}</span>
                </p>
                <div className='flex gap-2 mt-2 items-center justify-between'>
                  <p className='text-gray-700'>
                    Transaction Id: <br /> {payment.transaction_id}
                  </p>
                  <p className='text-gray-700'>
                    Amount: <br /> Ksh: {payment.amount}
                  </p>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div>
            <p className='text-gray-700 text-center'>No payment history found</p>
          </div>
        )}
      </div>
    </div>
  );
}
