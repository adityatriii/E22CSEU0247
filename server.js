const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

const posts = [
  { id: 1, content: 'Post 1', commentsCount: 10 },
  { id: 2, content: 'Post 2', commentsCount: 15 },
  { id: 3, content: 'Post 3', commentsCount: 5 },
  { id: 4, content: 'Post 4', commentsCount: 20 },
  { id: 5, content: 'Post 5', commentsCount: 8 },
  { id: 6, content: 'Post 6', commentsCount: 30 },
];

const users = [
  { id: 1, name: 'Ali', commentsCount: 25 },
  { id: 2, name: 'Baldev', commentsCount: 15 },
  { id: 3, name: 'Chaitanya', commentsCount: 30 },
  { id: 4, name: 'Dada', commentsCount: 10 },
  { id: 5, name: 'Eshaan', commentsCount: 35 },
  { id: 6, name: 'Fahad', commentsCount: 5 },
];

app.get('/', (req, res) => {
  res.send('Hi im E22CSEU0247');
});

app.get('/users/top', (req, res) => {
  const topUsers = users
    .sort((a, b) => b.commentsCount - a.commentsCount)
    .slice(0, 5);
  res.json(topUsers);
});

app.get('/posts/trending', (req, res) => {
  const trending = posts
    .sort((a, b) => b.commentsCount - a.commentsCount)
    .slice(0, 5);
  res.json(trending);
});


app.get('/posts/latest', (req, res) => {
  const latest = posts
    .sort((a, b) => b.id - a.id)
    .slice(0, 5);
  res.json(latest);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
