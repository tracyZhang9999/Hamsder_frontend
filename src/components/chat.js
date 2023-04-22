import React, { useState } from 'react';
import './chat.css';

function ChatBox(props) {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessages([...messages, { text: inputText, sender: props.currentUser }]);
    setInputText('');
  };
// //{props.contact.name}
  return (
    <div>
       
      <h1>Chat with Eric</h1>
      <div className="message-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender === props.currentUser ? 'sent' : 'received'}`}>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputText} onChange={handleInputChange} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatBox;
