import React from 'react';
import { useAlerts } from '../../contexts/AlertContext';
import Alert from './Alert';

const AlertContainer: React.FC = () => {
  const { alerts, removeAlert } = useAlerts();

  if (alerts.length === 0) {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 z-[200] w-full max-w-sm">
      {alerts.map(alert => (
        <Alert key={alert.id} alert={alert} onDismiss={removeAlert} />
      ))}
    </div>
  );
};

export default AlertContainer;
