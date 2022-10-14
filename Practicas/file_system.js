const fs = require('fs')

fs.writeFile('data.txt', 'ayelen', (err) =>{//cuando ejecutas aparece automaticamente el archivo hechoh al costado de data.txt
    if (err) {
        console.log(`error ${err}`);
    }
})





