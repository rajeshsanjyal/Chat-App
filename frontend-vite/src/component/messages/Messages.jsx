import React, { useEffect, useRef } from "react"
import Message from "./Message"
import useGetMessages from "../../hooks/useGetMessages"

const Messages = () => {
  const { messages, loading } = useGetMessages()
  // console.log(messages)

  const lastMessageRef = useRef()

  useEffect(()=>{
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({behaviour: "smooth"})
    })
  },[messages])
  
  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading && messages.length === 0 && (
        <p className="text-center">Start Conversation by sending a message</p>
      )}

      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
    </div>
  )
}

export default Messages
