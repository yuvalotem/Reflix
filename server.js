const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'build')));



app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 4000
app.listen(port, function(req, res){
    console.log('running on ' + port);
})