import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Chip, Paper } from '@material-ui/core';
import { useUser } from '../contexts/UserContext';

function Profile() {
  const { user, updateUser } = useUser();
  const [newInterest, setNewInterest] = useState('');

  const handleAddInterest = () => {
    if (newInterest && !user.interests.includes(newInterest)) {
      updateUser({ interests: [...user.interests, newInterest] });
      setNewInterest('');
    }
  };

  const handleRemoveInterest = (interestToRemove) => {
    updateUser({ 
      interests: user.interests.filter(interest => interest !== interestToRemove) 
    });
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Your Profile
      </Typography>
      <Paper style={{ padding: '20px', marginBottom: '20px' }}>
        <TextField
          fullWidth
          label="Name"
          value={user.name}
          onChange={(e) => updateUser({ name: e.target.value })}
          margin="normal"
        />
        <Typography variant="h6" gutterBottom>
          Interests
        </Typography>
        <div style={{ display: 'flex', marginBottom: '10px' }}>
          <TextField
            fullWidth
            label="Add an interest"
            value={newInterest}
            onChange={(e) => setNewInterest(e.target.value)}
          />
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleAddInterest}
            style={{ marginLeft: '10px' }}
          >
            Add
          </Button>
        </div>
        <div>
          {user.interests.map((interest, index) => (
            <Chip
              key={index}
              label={interest}
              onDelete={() => handleRemoveInterest(interest)}
              style={{ margin: '5px' }}
            />
          ))}
        </div>
      </Paper>
    </Container>
  );
}

export default Profile;
