import { Alert, Snackbar } from "@mui/material";
import { createContext, useContext, useEffect, useState } from "react";

interface NotificationProps {
    title?: string;
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
}

export interface NotificationContextProps {
    createNotification: (notification: NotificationProps) => void;
    clearNotifications: () => void;
}

const NotificationContext = createContext<NotificationContextProps | null>(null);

export const NotificationProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
    const [notifications, setNotifications] = useState<NotificationProps[]>([]);

    const createNotification = (notification: NotificationProps) => {
        setNotifications([...notifications, notification]);
    }

    const clearNotifications = () => {
        setNotifications(() => ([]));
    }

    useEffect(() => {
        if (notifications.length > 0) {
            const timer = setTimeout(() => {
                setNotifications(([, ...restOfTheNotifications]) => [...restOfTheNotifications]);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [notifications]);

    console.log(`notifications :::`, notifications)

    return <>
        <NotificationContext.Provider value={{ createNotification, clearNotifications }}>
            {children}
            {notifications.map((notification, i) =>
                <Snackbar
                    key={i}
                    anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                    open={notifications.length > 0}
                >
                    <Alert
                        severity={notification.type}
                        sx={{ width: '350px' }}
                    >{notification.message}</Alert>
                </Snackbar>
            )
            }
        </NotificationContext.Provider>
    </>
}

export const useNotification = () => {
    const context = useContext(NotificationContext);
    if (context === null) {
        throw new Error('useNotification must be used within a NotificationProvider');
    }
    return context;
}