const { response, request } = require('express');

const bmiPost = (req = request, res = response) => {
    
        const { weight, height } = req.body;
    
        if (!weight || !height) {
            return res.status(400).send('Invalid parameters. Make sure you provide both weight and height.');
        }
    
        const bmi = weight / (height * height);
        res.send(`Your BMI is ${bmi}. <br><br> <button onclick="location.href='/'" type="button">Return to Home</button>`);
}

module.exports = {
    bmiPost
}