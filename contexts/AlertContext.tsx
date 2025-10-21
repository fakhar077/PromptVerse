import React, { createContext, useState, useContext, ReactNode } from 'react';

export type AlertType = 'success' | 'error' | 'info';

export interface Alert {
  id: number;
  message: string;
  type: AlertType;
}

interface AlertContextProps {
  alerts: Alert[];
  addAlert: (message: string, type?: AlertType) => void;
  removeAlert: (id: number) => void;
}

const AlertContext = createContext<AlertContextProps | undefined>(undefined);

export const AlertProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  const addAlert = (message: string, type: AlertType = 'info') => {
    const id = Date.now();
    setAlerts(prevAlerts => [...prevAlerts, { id, message, type }]);
  };

  const removeAlert = (id: number) => {
    setAlerts(prevAlerts => prevAlerts.filter(alert => alert.id !== id));
  };

  return (
    <AlertContext.Provider value={{ alerts, addAlert, removeAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlerts = (): AlertContextProps => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlerts must be used within an AlertProvider');
  }
  return context;
};
