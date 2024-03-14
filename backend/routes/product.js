const express = require('express');
const router = express.Router();
const vision = require('@google-cloud/vision');
const path = require('path');
const Standard = require('../models/product/Standards')




const CONFIG = {
    credentials: {
        private_key: CREDENTIALS.private_key,
        client_email: CREDENTIALS.client_email
    }
};

router.post('/scanproduct', async (req, res) => {

    try {

        const { cat } = req.body;

        const client = new vision.ImageAnnotatorClient(CONFIG);
        let rt = '';
        const detectText = async (file_path, cat) => {
            const imageFilePath = path.join(__dirname, file_path);

            let [result] = await client.textDetection(imageFilePath);

            rt = result.fullTextAnnotation.text;
            console.log(rt);

            if (cat === "Health Drink") {
                const keyValuePairs = [];
                const dataArray = rt.split(',').map(item => item.trim());

                console.log(dataArray);

                dataArray.forEach(element => {

                    const wordsBeforeDigits = element.match(/^(.*?)(?=\d)/);


                    const restOfText = element.replace(wordsBeforeDigits[0], '').trim();


                    if (wordsBeforeDigits[0] === 'Vitamin B') {

                    } else {

                        keyValuePairs.push({ key: wordsBeforeDigits[0], value: restOfText });
                    }


                });
                console.log(keyValuePairs)
            }
            else if (cat === "Noodles") {

                let tex = rt.split("\n")
                const keyValuePairs = [];
                let count = 0;
                let previouselement = null;
                let arr1 = []
                let arr2 = []

                tex.forEach(element => {
                    if (count < 6) {
                        arr1.push(element);
                        count++;
                    }
                    else if (count < 13) {
                        arr2.push(parseInt(element));

                        count++;
                    }
                    else if (count == 13) {
                        arr1.push(element);
                        count++;
                    }
                    else {

                    }
                    previouselement = element;

                });

                for (let index = 0; index < arr1.length; index++) {

                    keyValuePairs.push({ key: arr1[index], value: arr2[index] });
                }
                console.log(keyValuePairs)
            }
            else {

                let tex = rt.split("\n");
                const keyValuePairs = [];
                let count = 0;
            
                let arr1 = []
                let arr2 = []

                tex.forEach(element => {
                    if (count < 9) {
                        arr1.push(element);
                        count++;
                    }
                    else {
                        arr2.push(parseInt(element));

                        count++;
                    }



                });


                for (let index = 0; index < arr1.length; index++) {

                    keyValuePairs.push({ key: arr1[index], value: arr2[index] });
                }
                console.log(keyValuePairs)
            }
        };

        if (cat === 'Health Drink') {
            detectText('d1.jpeg', cat);
        }
        else if (cat === 'Noodles') {
            detectText('d2.jpeg', cat);

        }
        else {
            detectText('d3.jpeg', cat);
        }

        res.status(201).json({ success: true, message: rt });
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, error: err.message });
    }
});

router.post('/addstandard', async (req, res) => {
    try {
        // Create a new Standard document using the request body
        const newStandard = new Standard(req.body);

        // Save the document to the database
        const savedStandard = await newStandard.save();

        res.status(201).json(savedStandard);
    } catch (error) {
        res.status(500).json({ error: 'Error saving data to the database' });
    }
});

router.get('/getstandard', async (req, res) => {
    try {
        // Retrieve all documents from the "Standard" collection
        const standards = await Standard.find();

        res.status(200).json(standards);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving data from the database' });
    }
});


module.exports = router;



