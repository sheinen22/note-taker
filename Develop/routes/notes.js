const notes = require('express').Router();
const { read, append } = require('../helper/utils');

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
      };
      
    append(newNote, './db/db.json');
    res.json(`New note added!`);
  } else {
    res.error('Error.');
  }
});

notes.delete(`/:{id}`, (req, res) => {
    delete('./db/db.js.{id}')
    res.json(`Deleted`)
  });

  module.exports = notes;