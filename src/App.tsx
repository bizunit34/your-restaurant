import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { HeaderToolbar } from './component';

interface Post {
  id: number;
  title: string;
}

const App: React.FC = () => {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container>
      <HeaderToolbar />
      <Typography variant="h4" gutterBottom sx={{ marginTop: 4 }}>
        Top Posts
      </Typography>
      <List>
        {data.slice(0, 5).map((item) => (
          <Card key={item.id} sx={{ marginBottom: 2 }}>
            <CardContent>
              <ListItem>
                <ListItemText primary={item.title} />
              </ListItem>
            </CardContent>
          </Card>
        ))}
      </List>
    </Container>
  );
};

export default App;
