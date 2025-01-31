import React, { createContext, useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useSelector } from 'react-redux';
import { selectUser } from '@/redux/reducers/AuthReducers';

const SocketContext = createContext(null);

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const currentUser = useSelector(selectUser);

  useEffect(() => {
    if (currentUser?.id) {
      // Initialize socket with only userId in auth
      const socketInstance = io('https://testbackend.cinab.co.ke', {
        auth: {
          userId: currentUser.id,  // Only send userId
        },
      });

      // Socket connection successful
      socketInstance.on('connect', () => {
        console.log('WebSocket connection established');
        socketInstance.emit('join', currentUser.id);  // Emit 'join' event after connection
      });

      // Handle socket connection errors
      socketInstance.on('connect_error', (error) => {
        console.log('WebSocket connection error:', error);
      });

      // Handle socket disconnection
      socketInstance.on('disconnect', (reason) => {
        console.log('WebSocket connection closed:', reason);
      });

      // Set the socket instance in state
      setSocket(socketInstance);

      // Cleanup function to disconnect socket on component unmount
      return () => {
        socketInstance.disconnect();
      };
    }
  }, [currentUser]); 

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

// Custom hook to access socket in other components
export const useSocket = () => {
  return useContext(SocketContext);
};
