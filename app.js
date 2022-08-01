const express = require('express');
const path = require('path')
const app = express();

app.listen(3000);

app.get('/', (req, res) =>{

    res.sendFile( path.join(__dirname, 'views' , 'index.html'));
});
app.get('/about', (req, res) =>{

    res.sendFile( path.join(__dirname, 'views' , 'About.html'));

});
app.get('/courses', (req, res) =>{

    res.sendFile( path.join(__dirname, 'views' , 'Courses.html'));

});
app.get('/course', (req, res) =>{

    res.sendFile( path.join(__dirname, 'views' , 'Courses.html'));

});


