const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Your Project is Running on PORT Number ${PORT}`);
});

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World Hussnains',
  });
});

app.get('/user', (req, res) => {
  res.render('user');
});

app.get('/about', (req, res) => {
  const fileUrl = 'http://localhost:3000/files/Project%20Report.docx';
  res.redirect(`https://docs.google.com/gview?url=${fileUrl}&embedded=true`);
});

app.get('/abouts', (req, res) => {
  res.sendFile(path.join(__dirname, 'Files', 'ali.pdf'));
});

app.post('/submit', (req, res) => {
  res.send(req.body);
});

app.get('/gallery', (req, res) => {
  const Items = ['Hussnain', 'Ali', 'Hassan', 'Ali'];
  const data = [
    {
      name: 'Hussnain',
      age: 22,
      university: 'UET',
    },
    {
      name: 'Hussnain',
      age: 22,
      university: 'UET',
    },
    {
      name: 'Hussnain',
      age: 22,
      university: 'UET',
    },
    {
      name: 'Hussnain',
      age: 22,
      university: 'UET',
    },
  ];
  res.render('Gallery', {
    title: 'Gallery Page',
    message: ' Lorem ipsum, dolor sit ',
    items: Items,
    data
  });
});
