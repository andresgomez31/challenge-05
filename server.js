/**
 * In your server.js, set up a basic Express server (use the techstore as an example).

    Configure cors and express.json().

    Serve your static files from the public folder.

    Create the Endpoint: Create a POST route to receive the data.
    JavaScript

    // Example hint:
    app.post('/api/register-patient', (req, res) => {
        const patientData = req.body;
        console.log("New Patient Received:", patientData);
        res.status(200).send({ message: "Registration successful!" });
    });
 */
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.post('/api/register-patient', (req, res) => {
    const patientData = req.body;
    console.log("New Patient Received:", patientData);
    res.status(200).send({ message: "Registration successful!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

