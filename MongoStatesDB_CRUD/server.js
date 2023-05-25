const express = require('express');
const mongoose = require('mongoose')
const State = require('./models/StateModel')
const port = 8080;
const app = express();
require('dotenv').config()

mongoose.set("strictQuery", false);

// Middleware: Allows to access json type
app.use(express.json()); 

const connectionString = process.env.SECRET_CONNECTION_STRING;

console.log(connectionString);

mongoose.connect(connectionString)
    .then(() => {
        console.log('Connected to DB!');

        // fetch all
        app.get('/getStates', async (req, res) => {
            try {
                const states = await State.find({});
                res.status(200).json(states);
            } catch (error) {
                res.status(500).json({message: error.message})
            }
        })

        // fetch one
        app.get('/getState/:id', async (req, res) => {
            try {
                // Deconstruct
                let {id} = req.params;
                let state = await State.findOne({state_id: id});
                res.status(200).json(state);
            } catch (error) {
                res.status(500).json({message: error.message})
            }
        })

        // insert one
        app.post('/createState', async (req, res) => {
            try {
                const state = await State.create(req.body)
                res.status(200).json(state);
            } catch (error) {
                console.error(error);
                res.status(500).json({message: error.message})
            }
        })

        // update one
        app.put('/updateState/:id', async (req, res) => {
            try {
                let {id} = req.params;
                let state = await State.findOneAndUpdate({state_id: id}, req.body);

                if(!state) {
                    res.status(404).json({message: "State not found..."})
                }

                res.status(200).json(state);
            } catch (error) {
                res.status(500).json({message: error.message})
            }
        })

        // delete one
        app.delete('/deleteState/:id', async (req, res) => {
            try {
                let {id} = req.params;
                let state = await State.findOneAndDelete({state_id: id});
                res.status(200).json(state);
            } catch (error) {
                res.status(500).json({message: error.message})
            }            
        })

        // server
        app.listen(port, () => {
            console.log(`Server on ${port}`);
        })

    })
    .catch(err => console.error(err))