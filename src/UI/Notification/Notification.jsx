import React from 'react';
import s from './Notification.module.css';

function Notification() {
  return (
    <div className={s.notification__container}>
      <span className={s.notification}>
        <i className="ri-notification-3-line" />
        <span className={s.badge} />
      </span>
    </div>
  );
}

export default Notification;
