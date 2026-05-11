const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'Startup Idea Finder Backend Running' });
});

app.post('/generate', (req, res) => {
  const topic = req.body.topic || 'AI SaaS';

  res.json({
    startup: `${topic} AI`,
    revenue: 'Subscription',
    mvp: 'Landing page + AI workflow'
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});