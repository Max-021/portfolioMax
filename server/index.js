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
    const token = req.body;
    try {
        // Sending secret key and response token to Google Recaptcha API for authentication.
        const response = await axios.post(
          `https://www.google.com/recaptcha/api/siteverify?secret=6LduMi8pAAAAAFS1HBlRHFGpibKaTbZKBMSkeLzp&response=${token}`
        );
        
        return res.status(200).json({
            success: true,
            message: 'Token successfully verified',
            data: response.data
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error verifying token"
        })
    }
});

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})