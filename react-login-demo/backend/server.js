const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
  origin: '*', // Temporarily allow all origins for debugging
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});

// Listen on the environment's preferred port, or 8080 if there's none specified.
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("%cAPI is running. Access it via the forwarded port URL provided by Codespaces. %cTo ensure the proper functioning of the program, make sure to change the visibility of the ports to 'Public' in the configuration settings.", "color: black", "color: black");
});
