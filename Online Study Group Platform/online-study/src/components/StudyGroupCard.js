import React from 'react';
import { Card, CardContent, Typography, Button, CardActions, Chip } from '@mui/material';

const StudyGroupCard = ({ group }) => {
  return (
    <Card sx={{ maxWidth: 300, margin: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {group.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Subject: {group.subject}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Members: {group.members}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" size="small">
          Join Group
        </Button>
      </CardActions>
      <CardActions>
        <Chip label="Active" color="success" size="small" />
      </CardActions>
    </Card>
  );
};
export default StudyGroupCard;