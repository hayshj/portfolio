const express = require('express');
const path = require('path');

const app = express();
const PORT = 4000;

// Serve static files from your site folder
app.use(express.static(path.join(__dirname, 'public'))); // 👈 'public' = your site folder

// Fallback to index.html for SPA routing (optional)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
