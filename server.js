const app = require('./app');

const PORT = 3000;

// Start the server
app.listen(PORT, () => {
  console.log('Server running in port ' + `${PORT}!`);
});