import React, { useState, useEffect } from 'react';
import { List, Input, Button, Card } from 'antd';
import axios from 'axios';

const { TextArea } = Input;

const ChatPage = ({ match }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const roomId = match.params.roomId;

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`/api/chat/rooms/${roomId}/messages`);
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages', error);
      }
    };

    fetchMessages();
  }, [roomId]);

  const handleSendMessage = async () => {
    try {
      await axios.post(`/api/chat/rooms/${roomId}/messages`, {
        senderId: 1, // Replace with actual user ID
        content: newMessage
      });
      setMessages([...messages, { content: newMessage, senderId: 1 }]);
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message', error);
    }
  };

  return (
    <Card title="Chat Room">
      <List
        dataSource={messages}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              description={item.content}
            />
          </List.Item>
        )}
      />
      <TextArea
        rows={4}
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <Button type="primary" onClick={handleSendMessage} style={{ marginTop: '10px' }}>
        Send
      </Button>
    </Card>
  );
};

export default ChatPage;
