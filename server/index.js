import multipart from 'parse-multipart';
import uWS from 'uWebSockets.js';
import db from './db.js';
import fs from 'fs';
import validateCode from './validation/validateCode.js';

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

app.get("/standalone/gfx/:filename", (res, req) => {
    let fileName = req.getParameter(0);
    let path = 'client/gfx/' + fileName;

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

app.get('/standalone/:filename', (res, req) => {
    let fileName = req.getParameter(0);
    if(fileName.includes('.') === true){
        // it's a file
        let path = 'client/' + fileName;
        
        res.cork(() => {
            if(path.endsWith('css')){
                res.writeHeader('Content-Type', 'text/css');
            } else {
                res.writeHeader('Content-Type', 'text/javascript');
            }
        });

        if(path.endsWith('bundle.js') || path.endsWith('png')){
            path = 'editor/dist' + req.getUrl();
        }

        if (fs.existsSync(path)) {
            // Read and serve the file
            const file = fs.readFileSync(path);
            res.end(file);
        } else {
            // File not found
            res.writeStatus('404 Not Found');
            res.end();
        }
    } else {
        // its the index.html file
        res.cork(() => {  
            const path = 'client/index.html';
            
            if (fs.existsSync(path)) {
                const file = fs.readFileSync(path);
                res.end(file);
            } else {
                res.writeStatus('404 Not Found');
                res.end();
            }
        })
    }
});

app.get('/account', (res, req) => {
    res.cork(() => {
        // res.writeHeader('Access-Control-Allow-Origin', '*');
        
        const path = 'account/index.html';
    
        if (fs.existsSync(path)) {
            const file = fs.readFileSync(path);
            res.end(file);
        } else {
            res.writeStatus('404 Not Found');
            res.end();
        }
    })
});

app.get("/account/:filename", (res, req) => {
    let path = '.' + req.getUrl();

    res.cork(() => {
        if(path.endsWith('css')){
            res.writeHeader('Content-Type', 'text/css');
        } else {
            res.writeHeader('Content-Type', 'text/javascript');
        }
    });

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

app.get('/profile/:filename', (res, req) => {
    let fileName = req.getParameter(0);
    if(fileName.includes('.') === true){
        // it's a file
        let path = 'profile/' + fileName;
        
        res.cork(() => {
            if(path.endsWith('css')){
                res.writeHeader('Content-Type', 'text/css');
            } else {
                res.writeHeader('Content-Type', 'text/javascript');
            }
        });

        if(path.endsWith('bundle.js') || path.endsWith('png')){
            path = 'editor/dist' + req.getUrl();
        }

        if (fs.existsSync(path)) {
            // Read and serve the file
            const file = fs.readFileSync(path);
            res.end(file);
        } else {
            // File not found
            res.writeStatus('404 Not Found');
            res.end();
        }
    } else {
        // its the index.html file
        res.cork(() => {
            const path = 'profile/index.html';
            
            if (fs.existsSync(path)) {
                const file = fs.readFileSync(path);
                res.end(file);
            } else {
                res.writeStatus('404 Not Found');
                res.end();
            }
        })
    }
});

// get username from level
app.get("/getUser/:levelName", async (res, req) => {
    let aborted = false;
    res.onAborted(() => {
        aborted = true;
    });

    const levelName = req.getParameter(0);
    const creator = await db.getCreator(levelName);
    if(aborted === false){
        res.cork(() => {
            res.end(creator);
        })
    }
});

// get 5 most recent fileNames
app.get("/getFns/:username", async (res, req) => {
    let aborted = false;
    res.onAborted(() => {
        aborted = true;
    });

    const username = req.getParameter(0);
    const fileNames = await db.getRecentFileNames(username);
    if(aborted === false){
        res.cork(() => {
            res.end(fileNames.join('|'));
        })
    }
});

// get profile picture if any
app.get("/getPfp/:username", async (res, req) => {
    let aborted = false;
    res.onAborted(() => {
        aborted = true;
    });

    const creatorName = req.getParameter(0);

    const downloadStream = await db.getProfilePic(creatorName);

    if(downloadStream === false){
        res.cork(() => {
            res.end('n');
        })
        return;
    }

    downloadStream.on('data', (chunk) => {
        if(aborted === true) return;
        res.cork(() => {
            res.write(chunk);
        })
    });

    downloadStream.on('end', () => {
        if(aborted === true) return;
        res.cork(() => {
            res.end();
        })
    });

    downloadStream.on('error', (error) => {
        if(aborted === true) return;
        aborted = true;
        res.cork(() => {
            console.error('Error fetching file from GridFS:', error);
            res.end('Internal Server Error');
        })
    });
});

app.post("/createAccount", async (res, req) => {
    res.aborted = false;
    res.onAborted(() => {
        res.aborted = true;
    });

    // req.headers
    const username = req.getHeader('u');
    const hashedPassword = req.getHeader('hp');

    const boundary = req.getHeader('content-type').split('boundary=')[1];
  
    if (req.getHeader('content-length') > 0) {
        // profile picture provided
        let fileExtension = req.getHeader('ext');
        if(!['png', 'jpeg', 'jpg'].includes(fileExtension)) {res.end('p'); return;}
        let dataLen = 0;
        let buffer = Buffer.from('');
        res.onData((ab, isLast) => {
            if(res.aborted === true) return;
            dataLen += ab.length;
            if (dataLen > 1024 * 1024) {res.end('l'); return;}
            let chunk = Buffer.from(ab);
            buffer = Buffer.concat([buffer, chunk]);
            if (isLast) {
                (async()=>{
                    const parts = multipart.Parse(buffer, boundary);

                    // Assume the first part is the file
                    const fileContent = parts[0].data;

                    let succeeded = await db.createAccount(username, hashedPassword, fileContent, fileExtension);

                    if(!res.aborted){
                        res.cork(() => {
                            res.end(succeeded ? 'y' : 'n');
                        });
                    }
                })();
            }
        });
    } else {
        // no profile picture provided
        let succeeded = await db.createAccount(username, hashedPassword);

        if(!res.aborted){
            res.cork(() => {
                res.end(succeeded ? 'y' : 'n');
            });
        }
    }
});

app.post("/login", async (res, req) => {
    res.onAborted(() => {
        res.aborted = true;
    });

    // req.headers
    const username = req.getHeader('u');
    const hashedPassword = req.getHeader('hp');

    let userData = await db.getUserData(username, hashedPassword);

    if(!res.aborted){
        res.cork(() => {
            res.end(userData !== null ? 'y' : 'n');
        });
    }
});

app.get('/favicon.ico', (res, req) => {
    const path = 'client/favicon.ico';
    res.cork(() => {
        res.writeHeader('Content-Type', 'image/x-icon');
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
    const fileName = db.getRandomFileName();

    res.cork(() => {
        res.writeHeader('Fn', fileName);
    })

    const downloadStream = db.getFile(fileName);

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
        closed = true;
        res.cork(() => {
            console.error('Error fetching file from GridFS:', error);
            res.end('Internal Server Error');
        })
    });

    res.onAborted(() => {
        console.log('aborted!!');
        closed = true;
    });
})

// get a specific file. Used for standalone.
app.get('/game/:filename', (res, req) => {
    let fileName = req.getParameter(0) + '.js';

    // temp, just serving a random file. TODO: in prod remove async and cache serving somehow??
    const downloadStream = db.getFile(fileName);

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
        closed = true;
        res.cork(() => {
            console.error('Error fetching file from GridFS:', error);
            res.end('Internal Server Error');
        })
    });

    res.onAborted(() => {
        console.log('aborted!!');
        closed = true;
    });
})

app.post('/upload', (res, req) => {
    // uploadState = enum[0: good, 1: aborted, 2: loginFailed]
    let uploadState = 0;

    res.onAborted(() => {
        // Request was aborted, clean up if necessary
        console.log('File upload aborted');
        uploadState = 1;
    });
    
    console.log('post recieved!');

    // res.cork(() => {
    //     res.writeHeader('Access-Control-Allow-Origin', '*');
    // })

    // res.writeHeader('Access-Control-Allow-Origin', '*');
    // res.writeHeader('Access-Control-Allow-Methods', 'POST');
    // res.writeHeader('Access-Control-Allow-Headers', 'Content-Type');

    const boundary = req.getHeader('content-type').split('boundary=')[1];

    const username = req.getHeader('u');
    const hashedPassword = req.getHeader('hp');

    let buffer = Buffer.alloc(0);
  
    // handle data streaming
    res.onData((ab, isLast) => {
        if(uploadState !== 0) {
            // only send message if we're in loginFailed, which is the
            // only state where we're aborted but still on the connection.
            if(uploadState === 2){
                res.end();
            }
            return;
        }
        let chunk = Buffer.from(ab);
        buffer = Buffer.concat([buffer, chunk]);
  
        if (isLast === true) {
            // Extract the file content using parse-multipart
            const parts = multipart.Parse(buffer, boundary);

            // Assume the first part is the file
            const fileContent = parts[0].data;
            
            // verification
            const textContent = validateCode(fileContent.toString());

            if(textContent === false){
                res.end();
                return;
            }
            
            db.uploadFile(Buffer.from(textContent, 'utf8'), fileContent, textContent, username, hashedPassword);
            res.end();
        }
    });

    (async()=>{
        let userData = await db.getUserData(username, hashedPassword);
        if(userData === null){
            uploadState = 2;
        }
    })();
});

app.get("/:filename", (res, req) => {
    let path = 'client' + req.getUrl();

    // console.log(path);
    
    // only js files check for mime type so everything can be text/javascript lol
    // TODO: GET WEBPACK SET UP!!!!!! WITHOUT IT THERE's A PREFLIGHT REQUEST WHICH IS REALLY SLOW
    res.cork(() => {
        if(path.endsWith('css')){
            res.writeHeader('Content-Type', 'text/css');
        } else {
            res.writeHeader('Content-Type', 'text/javascript');
        }
    });

    if(path.endsWith('bundle.js') || path.endsWith('png')){
        path = 'editor/dist' + req.getUrl();
    }

    // hacky fix
    // if(path.endsWith('svg')){
    //     path = 'editor/dist' + req.getUrl();
    //     console.log(path);
    // }

    // TODO: to avoid all of this garbage use publicPath: '/editor/dist' and make sep routes for those files
    // if(path.endsWith('svg')){
    //     const svgPath = 'editor/dist' + req.getUrl();
    //     console.log(svgPath);

    //     // Read and serve the file
    //     if (fs.existsSync(path)) {
    //         const file = fs.readFileSync(svgPath, 'utf-8');
    //         res.cork(() => {
    //             res.writeHeader('Content-Type', 'image/svg+xml');// TODO: Investigate if res.cork is faster for res.end as well
    //         })
    //         res.end(file);
    //     } else {
    //         // File not found
    //         res.writeStatus('404 Not Found');
    //         res.end();
    //     }
    // } else {
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
    // }
});

app.get("/gfx/:filename", (res, req) => {
    let path = 'client' + req.getUrl();

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

app.post('/like/:filename', (res, req) => {
    console.log('someone likes ' + req.getParameter(0));
    res.cork(()=>{res.end();});
})

app.post('/dislike/:filename', (res, req) => {
    console.log('someone dislikes ' + req.getParameter(0));
    res.cork(()=>{res.end();});
})
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