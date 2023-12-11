const express = require('express');
const router = express.Router();
const app = express();
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const port = process.env.PORT || 2000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/',router);

router.post('/post',async (req, res) => {
    const {captchaToken,inputVal} = req.body;
    try {
        // Sending secret key and response token to Google Recaptcha API for authentication.
        const response = await axios.post(
          `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.REACT_APP_SECRET_KEY}&response=${captchaToken}`
        );
        console.log(process.env.REACT_APP_SECRET_KEY)
        // Check response status and send back to the client-side
        if (response.data.success) {
            res.send("Human 👨 👩");
        } else {
            res.send("Robot 🤖");
        }
    } catch (error) {
        // Handle any errors that occur during the reCAPTCHA verification process
        console.error(error);
        res.status(500).send("Error verifying reCAPTCHA");
    }
});

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})