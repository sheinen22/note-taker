const notes = require('express').Router();
const { read, append } = require('../helpers/utils');
const uuid = require('../helpers/uuid');

notes.get('/', (req, res) => {
    console.log(req)
    read('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });

  notes.post('/', (req, res) => {
    console.log(req.body);
  
    const { title, text } = req.body;
  
    if (req.body) {
      const newNote = {
        title,
        text,
        id: uuid()
      };
      
    append(newNote, './db/db.json');
    res.json(`New note added!`);
  } else {
    res.error('Error.');
  }
});


  module.exports = notes;