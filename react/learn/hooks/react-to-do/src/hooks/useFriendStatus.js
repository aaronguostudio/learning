import React, { useState, useEffect } from 'react';

function setFriendStatus (friendId) {
  const [isOnline, setIsOnline] = useState(null);
  function handleStatusChange (status) {
    setIsOnline(status.isOnline);
  }
  useEffect(() => {
    setTimeout(() => {
      handleStatusChange({isOnline: true});
      console.log('>>>');
    }, 1000);
    return () => {
      console.log('unmount');
    }
  })
  return isOnline;
}