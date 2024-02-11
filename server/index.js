const multipart = require('parse-multipart');
const uWS = require('uWebSockets.js');
const db = require('./db.js');
const fs = require('fs');

const PORT = 3000;

const app = uWS./*SSL*/App().listen(PORT, (token) => {
    if (token) {
        console.log('Server Listening to Port ' + PORT);
    } else {
        console.log('Failed to Listen to Child Server ' + PORT);
    }
});

// app.options('/*', (res, req) => {
//     res.writeHeader('Access-Control-Allow-Origin', '*');
//     res.writeHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
//     res.writeHeader('Access-Control-Allow-Headers', 'Content-Type');
//     res.end();
// });

app.get('/', (res, req) => {
    res.cork(() => {
        // res.writeHeader('Access-Control-Allow-Origin', '*');
        
        const path = 'client/index.html';
    
        if (fs.existsSync(path)) {
            const file = fs.readFileSync(path);
            res.end(file);
        } else {
            res.writeStatus('404 Not Found');
            res.end();
        }
    })
});

app.get('/editor', (res, req) => {
    res.cork(() => {
        // res.writeHeader('Access-Control-Allow-Origin', '*');
        
        const path = 'editor/dist/index.html';
    
        if (fs.existsSync(path)) {
            const file = fs.readFileSync(path);
            res.end(file);
        } else {
            res.writeStatus('404 Not Found');
            res.end();
        }
    })
});

app.get('/bundle.js', (res, req) => {
    const path = 'editor/dist/bundle.js';
    res.cork(() => {
        res.writeHeader('Content-Type', 'text/javascript');
    })

    console.log(path);
    
    // Check if the file exists
    if (fs.existsSync(path)) {
        // Read and serve the file
        const file = fs.readFileSync(path);
        res.end(file);
    } else {
        // File not found
        res.writeStatus('404 Not Found');
        res.end();
    }
});

app.get('/game', (res, req) => {
    // res.cork(() => {
    //     res.writeHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    //     res.writeHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    //     res.writeHeader('Access-Control-Allow-Headers', 'Content-Type');

    //     res.writeHeader('Content-Type', 'text/javascript');

    //     // res.writeHeader('Content-Disposition', `filename="test.js"`);
    // });

    // temp, just serving a random file. TODO: in prod remove async and cache serving somehow??
    const downloadStream = db.getFile(db.getRandomFileName());

    // hack, TODO fix later?
    let closed = false;

    downloadStream.on('data', (chunk) => {
        if(closed === true) return;
        res.cork(() => {
            res.write(chunk);
        })
    });

    downloadStream.on('end', () => {
        if(closed === true) return;
        res.cork(() => {
            res.end();
        })
    });

    downloadStream.on('error', (error) => {
        if(closed === true) return;
        res.cork(() => {
            console.error('Error fetching file from GridFS:', error);
            res.status(500).send('Internal Server Error');
        })
    });

    res.onAborted(() => {
        console.log('aborted!!');
        closed = true;
    });
})

app.post('/upload', (res, req) => {
    console.log('post recieved!');

    // res.cork(() => {
    //     res.writeHeader('Access-Control-Allow-Origin', '*');
    // })

    // res.writeHeader('Access-Control-Allow-Origin', '*');
    // res.writeHeader('Access-Control-Allow-Methods', 'POST');
    // res.writeHeader('Access-Control-Allow-Headers', 'Content-Type');

    const boundary = req.getHeader('content-type').split('boundary=')[1];

    let buffer = Buffer.alloc(0);
  
    // handle data streaming
    res.onData((ab, isLast) => {
        let chunk = Buffer.from(ab);
        buffer = Buffer.concat([buffer, chunk]);
  
        if (isLast) {
            // Extract the file content using parse-multipart
            const parts = multipart.Parse(buffer, boundary);

            // Assume the first part is the file
            const fileContent = parts[0].data;

            db.uploadFile(fileContent);
        }
    });
    
    res.onAborted(() => {
        // Request was aborted, clean up if necessary
        console.log('File upload aborted');
    });
});

app.get("/:filename", (res, req) => {
    const path = 'client' + req.getUrl();
    
    // only js files check for mime type so everything can be text/javascript lol
    // TODO: GET WEBPACK SET UP!!!!!! WITHOUT IT THERE's A PREFLIGHT REQUEST WHICH IS REALLY SLOW
    res.cork(() => {
        if(path.endsWith('css')){
            res.writeHeader('Content-Type', 'text/css');
        } else {
            res.writeHeader('Content-Type', 'text/javascript');
        }
    })
    
    // Check if the file exists
    if (fs.existsSync(path)) {
        // Read and serve the file
        const file = fs.readFileSync(path);
        res.end(file);
    } else {
        // File not found
        res.writeStatus('404 Not Found');
        res.end();
    }
});

// we'll have a post request handler here that will take file content and upload it to the db
//onPost: db.uploadFile(data);

// app.get("/:filename", (res, req) => {
//     const path = 'src/client' + req.getUrl();
    
//     // Check if the file exists
//     if (fs.existsSync(path)) {
//         // Read and serve the file
//         const file = fs.readFileSync(path);
//         res.end(file);
//     } else {
//         // File not found
//         res.writeStatus('404 Not Found');
//         res.end();
//     }
// });

// running python!
// const nodecallspython = require("node-calls-python");

// const py = nodecallspython.interpreter;

// py.import("./AI/main.py").then(async function(pymodule) {
//     // we have no idea when the db finishes connecting, let's wait 3s
//     setTimeout(async () => {
//         const result = await py.call(pymodule, "magnificent_ai", "65b724abb0dbba1b7b2fc936");
//         console.log(result);
//     }, 3000)
// });

// 3---
// const express = require('express');
// const cors = require('cors');

// const app = express();

// // Enable CORS with custom options
// app.use(cors({
//     origin: '*',
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     allowedHeaders: 'Content-Type,Authorization',
// }));

// // Your routes and other middleware go here

// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });