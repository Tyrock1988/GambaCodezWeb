const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static HTML files
app.use(express.static('public'));

// Parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// POST endpoint to handle code submission
app.post('/submitCode', (req, res) => {
  const code = req.body.code;
  
  // Here you can process the code or send it to your Telegram bot
  console.log('Received code:', code);
  
  // Respond to the client
  res.status(200).json({ message: 'Code received' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});