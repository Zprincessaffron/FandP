import React from 'react';
import { FaShoppingCart, FaExclamationTriangle } from 'react-icons/fa';

const NotificationsAlerts = () => {
  // Sample notifications
  const notifications = [
    { id: 1, type: 'New Order', message: 'You have 3 new orders!', icon: <FaShoppingCart />, alertType: 'order' },
    { id: 2, type: 'Low Stock', message: 'Stock running low for product: Rose Bouquet', icon: <FaExclamationTriangle />, alertType: 'low-stock' },
  ];

  return (
    <section className="p-6">

      {/* Real-time Alerts */}
      <div className="space-y-4">
        {notifications.map(notification => (
          <div
            key={notification.id}
            className={`flex items-center p-4 shadow-md ${
              notification.alertType === 'order' ? 'bg-green-100' : 'bg-red-100'
            }`}
          >
            <div className="text-3xl mr-4">
              {notification.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                {notification.type}
              </h3>
              <p>{notification.message}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NotificationsAlerts;
