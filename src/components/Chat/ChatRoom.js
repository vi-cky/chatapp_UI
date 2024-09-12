import React, { useState, useEffect } from 'react';
import { List, Button, Card, Typography } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const ChatRoomPage = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get('/api/chat/rooms'); // Adjust API endpoint as needed
        setRooms(response.data);
      } catch (error) {
        console.error('Error fetching chat rooms', error);
      }
    };

    fetchRooms();
  }, []);

  return (
    <Card
      title={<Title level={2}>Chat Rooms</Title>}
      style={{ width: 600, margin: 'auto', marginTop: '50px' }}
    >
      <List
        bordered
        dataSource={rooms}
        renderItem={(room) => (
          <List.Item
            actions={[
              <Button type="primary">
                <Link to={`/chat/${room.id}`}>Join</Link>
              </Button>
            ]}
          >
            <List.Item.Meta
              title={room.name}
              description={`Created by User ${room.created_by}`}
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default ChatRoomPage;
