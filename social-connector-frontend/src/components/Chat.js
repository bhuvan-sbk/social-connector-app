import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Paper, List, ListItem, ListItemText } from '@material-ui/core';
import { useUser } from '../contexts/UserContext';

function Chat() {
  const { user } = useUser();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: user.name, text: newMessage }]);
      setNewMessage('');
      
      setTimeout(() => {
        setMessages(prevMessages => [
          ...prevMessages, 
          { sender: 'Bot', text: `You said: ${newMessage}. How can I help you with that?` }
        ]);
      }, 1000);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Chat
      </Typography>
      <Paper style={{ height: '300px', overflow: 'auto', marginBottom: '20px', padding: '10px' }}>
        <List>
          {messages.map((message, index) => (
            <ListItem key={index}>
              <ListItemText 
                primary={message.sender}
                secondary={message.text}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
      <div style={{ display: 'flex' }}>
        <TextField
          fullWidth
          label="Type a message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleSendMessage}
          style={{ marginLeft: '10px' }}
        >
          Send
        </Button>
      </div>
    </Container>
  );
}

export default Chat;
