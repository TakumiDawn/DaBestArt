var http = require('http');
var fs = require('fs');

const total = [
    {
        name: 'city',
        children: [
            {
                name: 'building',
                children: [
                    {
                        name: 'pedestrian',
                        children: []
                    },
                    {
                        name: 'car',
                        children: []
                    }
                ]
            },
            {
                name: 'bridge',
                children: [
                    {
                        name: 'boat',
                        children: []
                    },
                    {
                        name: 'car',
                        children: []
                    }
                ]

            }
        ]
    },
    {
        name: 'nature',
        children: [
            {
                name: 'river',
                children: [
                    {
                        name: 'boat',
                        children: []
                    },
                    {
                        name: 'stone',
                        children: []
                    }
                ]
            },
            {
                name: 'snow mountain',
                children: [
                    {
                        name: 'tree',
                        children: []
                    },
                    {
                        name: 'grass',
                        children: []
                    }
                ]

            }
        ]
    }
]

//var levelCounter = 0

function onRequest(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./giphy.html', null, function (error, data){
        if (error){
            res.writeHead(404);
            res.write('File not found');
        } else {
            res.write(data);
        }
        res.end();
    });
}

http.createServer(onRequest).listen(8080);