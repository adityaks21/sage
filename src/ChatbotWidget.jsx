import React, { useState } from "react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5"; // Chat Icon


const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ text: "Hello! How can I assist you?", sender: "bot" }]);
  const [input, setInput] = useState("");

  // Toggle Chatbot Visibility
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  // Handle Sending Messages
  const handleSend = async () => {
    if (!input.trim()) return;
    const newMessage = { text: input, sender: "user" };
    setMessages([...messages, newMessage]);
    setInput("");

    // API Call (Replace with ChatAI API Key)
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer YOUR_CHAT_AI_API_KEY` // Replace with your actual API Key
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: input }]
        })
      });

      const data = await response.json();
      const botReply = { text: data.choices[0].message.content, sender: "bot" };
      setMessages([...messages, newMessage, botReply]);
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };

  return (
    <div>
      {/* Floating Chat Button */}
      <div className="chat-button" onClick={toggleChatbot}>
        <IoChatbubbleEllipsesOutline size={30} color="white" />
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h4>Chat Support</h4>
            <button onClick={toggleChatbot}>&times;</button>
          </div>
          <div className="chat-body">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-footer">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;
