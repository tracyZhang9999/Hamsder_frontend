import React, { useState } from 'react';
import './chat.css';

function ChatBox(props) {
//chat dispay depends on id (this is a frame without id)
// message history should be fecthed from backend
  const [messages, setMessages] = useState([]);

  const [inputText, setInputText] = useState('');

  //fetch current_contact from back end
  const current_contact="Eric";

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

 
  const handleSubmit = (event) => {
    event.preventDefault();
    setMessages([...messages, { text: inputText, sender: props.currentUser }]);
    setInputText('');
  };

  return (
    <div className="chatbox">
       
      <h1 >Chat with {current_contact}</h1>
      <div className="message-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender === props.currentUser ? 'sent' : 'received'}`}>
            {message.text}
          </div>
        ))}
      </div>
      <form className="chatbox-sender" onSubmit={handleSubmit}>
        <input type="text" value={inputText} onChange={handleInputChange} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatBox;
