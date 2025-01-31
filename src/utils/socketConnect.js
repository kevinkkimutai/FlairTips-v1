"use client"
import { useGetUserQuery } from '@/redux/actions/authActions';
import socket from '@/services/socket';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

export default function SocketConnect() {
  const [currentUser, setCurrentUser] = useState(null);
  const { data: user, isLoading, error } = useGetUserQuery();

   useEffect(() => {
    if (user) {
      setCurrentUser(user);
    }
  }, [user]);
  useEffect(() => {

    if (!user) return;
    console.log(currentUser);
    // Connect to the WebSocket server with user ID
    socket.auth = { userId: user.id };
    socket.connect();
  
    // Listen for new notifications
    socket.on('newNotification', (data) => {
      console.log('New notification received:', data.message);
      setNotifications((prev) => [...prev, data.message]);
      toast.success(data.message);
    });
  
    return () => {
      socket.disconnect();
    };
  }, []);

}
