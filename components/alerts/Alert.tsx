import React, { useEffect, useState } from 'react';
import { Alert as AlertInterface, AlertType } from '../../contexts/AlertContext';
// FIX: Corrected import path for Icons.
import { CheckCircleIcon, XCircleIcon, InfoIcon, XIcon } from '../icons/Icons';

interface AlertProps {
  alert: AlertInterface;
  onDismiss: (id: number) => void;
}

const alertStyles: Record<AlertType, { icon: React.FC<any>; ring: string; bg: string; text: string; }> = {
  success: {
    icon: CheckCircleIcon,
    ring: 'ring-green-500/50',
    bg: 'bg-green-500',
    text: 'text-green-500',
  },
  error: {
    icon: XCircleIcon,
    ring: 'ring-red-500/50',
    bg: 'bg-red-500',
    text: 'text-red-500',
  },
  info: {
    icon: InfoIcon,
    ring: 'ring-blue-500/50',
    bg: 'bg-blue-500',
    text: 'text-blue-500',
  },
};

const Alert: React.FC<AlertProps> = ({ alert, onDismiss }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 4500); // Start exit animation slightly before removal

    const dismissTimer = setTimeout(() => {
      onDismiss(alert.id);
    }, 5000); // Remove from DOM after 5s

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(dismissTimer);
    };
  }, [alert.id, onDismiss]);

  const handleDismiss = () => {
    setIsExiting(true);
    setTimeout(() => onDismiss(alert.id), 400); // Wait for animation to finish
  };

  const styles = alertStyles[alert.type];
  const Icon = styles.icon;

  return (
    <div
      className={`relative w-full max-w-sm rounded-lg shadow-lg overflow-hidden my-2 animate-alert-enter ${isExiting ? 'animate-alert-exit' : ''} bg-gray-800 ring-1 ${styles.ring}`}
      role="alert"
    >
      <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${styles.bg}`}></div>
      <div className="flex items-center p-4 pl-5">
        <Icon className={`w-6 h-6 ${styles.text} flex-shrink-0`} />
        <p className="ml-3 text-sm font-medium text-gray-200">{alert.message}</p>
        <button
          onClick={handleDismiss}
          className="ml-auto -mr-2 p-1.5 rounded-full text-gray-500 hover:bg-gray-700 hover:text-gray-200 transition-colors"
          aria-label="Dismiss"
        >
          <XIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Alert;