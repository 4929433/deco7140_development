// server.js
require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const RAWG_KEY = process.env.RAWG_KEY;


app.use(express.static(path.join(__dirname)));


app.get('/api/games', async (req, res) => {
  const { search } = req.query;
  if (!search) return res.status(400).json({ error: 'Missing search parameter' });

  const url = `https://api.rawg.io/api/games?key=${RAWG_KEY}&search=${encodeURIComponent(search)}`;
  try {
    const apiRes = await fetch(url);
    const data = await apiRes.json();
    res.json(data);
  } catch (err) {
    console.error('RAWG fetch error:', err);
    res.status(500).json({ error: 'Failed to fetch from RAWG' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at https://deco7140-64e84824.uqcloud.net on port ${PORT}`);
});
