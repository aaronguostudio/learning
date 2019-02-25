import React, { useState, useEffect } from 'react'

export default function FriendStatus (props) {
  const [isOnline, setIsOnline] = useState(null)

  function handleStatusChange (status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    setTimeout(() => {
      handleStatusChange(true)
      console.log('>>>')
    }, 1000)
    return () => {
      console.log('unmount')
    }
  })

  // I can use multiple effect hooks
  // useEffect(() => {
  //   setTimeout(() => {
  //     handleStatusChange(true)
  //     console.log('>>>')
  //   }, 1000)
  //   return () => {
  //     console.log('unmount')
  //   }
  // })

  if (isOnline === null) return 'Loading...';

  return isOnline ? `${props.friendName} is online` :  `${props.friendName} is offline`;
}
