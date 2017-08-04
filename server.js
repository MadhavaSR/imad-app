var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    articleone:{
        title:'articelone',
        date:'1 aug 2017',
        content:` <p>
                this is the content of my page article this is the content of my page article this is the content of my page article this is the content of my page article this is the content of my page article this is the content of my page article
            </p>`,
         heading:'Article-one'    
    },
    articletwo:{
         title:'articelone',
        date:'2 aug 2017',
        content:` <p>
                this is the content of my page article this is the content of my page article this is the content of my page article this is the content of my page article this is the content of my page article this is the content of my page article
            </p>
            <p>
                this is the content of my page article this is the content of my page article this is the content of my page article this is the content of my page article this is the content of my page article this is the content of my page article
            </p>`,
        heading:'Article-one' 
    },
    articlethree:{
         title:'articelthree',
        date:'3 aug 2017',
        content:` <p>
                this is the content of my page article this is the content of my page article this is the content of my page article this is the content of my page article this is the content of my page article this is the content of my page article
            </p>
            <p>
                this is the content of my page article this is the content of my page article this is the content of my page article this is the content of my page article this is the content of my page article this is the content of my page article
            </p>
            <p>
                this is the content of my page article this is the content of my page article this is the content of my page article this is the content of my page article this is the content of my page article this is the content of my page article
            </p>`,
        heading:'Article-three' 
    }
    
};




function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var contnet=data.content;
    var heading=data.heading;
    
    var htmlTemplate=`<html>
    <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h2>
            ${heading}
        </h2>
        <div>
            ${date}
        </div>
        <div>
           ${content}
        </div>
    </body>
</html>
`
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req, res){
	var articleName = req.params.articleName;
	res.send(createTemplate(articleName));
});




app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 8080;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
