'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

interface NotificationContextProps {
  showNotification: (message: string) => void;
  message: string;
  visible: boolean;
}

const NotificationContext = createContext<NotificationContextProps>({
  showNotification: () => {},
  message: '',
  visible: false,
});

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);

  const showNotification = (msg: string) => {
    setMessage(msg);
    setVisible(true);
    setTimeout(() => setVisible(false), 2500);
  };

  return (
    <NotificationContext.Provider value={{ showNotification, message, visible }}>
      {children}
      {visible && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-[#1E293B] text-white px-6 py-3 rounded shadow-lg transition-all duration-300">
          {message}
        </div>
      )}
    </NotificationContext.Provider>
  );
};
