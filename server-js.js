const express = require('express');
const path = require('path');
const app = express();

// Gemini API calls go directly from the browser — no proxy needed!
// This server just hosts the static files.
app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (_req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('✅ Postcraft running on port ' + PORT));
