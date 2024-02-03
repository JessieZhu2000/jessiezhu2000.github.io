
// Chatbox.js

import React, { useState, useRef, useEffect } from 'react';
import '../css/Chatbox.css'; // Create a CSS file for styling

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const chatBoxRef = useRef(null);

  const sendMessage = () => {
    if (userInput.trim() === '') return;

    setMessages([...messages, { sender: 'user', text: userInput }]);
    setUserInput('');

    // Call your chatbot API or use a chatbot library here
    // For simplicity, let's assume a synchronous response from the chatbot
    const botResponse = getChatbotResponse(userInput);
    setMessages([...messages, { sender: 'bot', text: botResponse }]);
  };

  const getChatbotResponse = (userMessage) => {
    const responses = {
        'hi': 'Hi there! How can I help you?',
        'how are you': 'I\'m just a chatbot, but thanks for asking!',
        'bye': 'Goodbye! Have a great day.',
        // Add more responses as needed
      };
  
      // Check if the user's message has a predefined response
      const response = responses[userMessage.toLowerCase()];
      
      // Return the predefined response or a default message
      return response || 'I\'m sorry, I didn\'t understand that.';
  };

  useEffect(() => {
    // Scroll to the bottom when new messages are added
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="chat-container">
      <div className="chat-box" ref={chatBoxRef}>
        {messages.map((message, index) => (
          <div key={index} className={message.sender}>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <div className="user-input">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbox;

