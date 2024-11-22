const axios = require('axios');

exports.getNearbyHospitals = async (req, res) => {
  const { lat, lng } = req.query;
  try {
    const response = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json`, {
      params: {
        location: `${lat},${lng}`,
        radius: 5000,
        type: 'hospital',
        key: process.env.GOOGLE_MAPS_API_KEY,
      },
    });
    res.json(response.data.results);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch nearby hospitals' });
  }
};
