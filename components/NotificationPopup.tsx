'use client';

import { useNotification } from '@/components/context/NotificationContext';
import { useEffect, useState } from 'react';

const NotificationPopup = () => {
  const { message } = useNotification();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  if (!visible || !message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-[#7F1D1D] text-white px-6 py-3 rounded shadow-lg transition-all duration-300">
        {message}
      </div>
    </div>
  );
};

export default NotificationPopup;
