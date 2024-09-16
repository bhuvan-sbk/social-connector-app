import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@material-ui/core';
import { getRecommendations } from '../utils/recommendationEngine';

function Recommendations() {
  // For now, we'll use mock data. In a real app, this would come from an API or state management.
  const currentUser = { id: 1, name: 'Current User', interests: ['coding', 'AI', 'hiking'] };
  const allUsers = [
    { id: 2, name: 'Alice', interests: ['AI', 'robotics', 'hiking'] },
    { id: 3, name: 'Bob', interests: ['coding', 'gaming', 'movies'] },
    { id: 4, name: 'Charlie', interests: ['hiking', 'photography', 'travel'] },
    // ... more users
  ];

  const recommendations = getRecommendations(currentUser, allUsers);

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Recommended Connections
      </Typography>
      <List>
        {recommendations.map(user => (
          <ListItem key={user.id}>
            <ListItemText
              primary={user.name}
              secondary={`Similarity: ${user.similarity.toFixed(2)}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Recommendations;