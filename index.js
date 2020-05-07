const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

const spawn = require('child_process').spawn

const python = spawn('python', ['./cv.py'])


app.use(cors())
app.get('/', (request, response) => {
    python.stdout.on('data', (data) => {
        console.log(data.toString())
    })
    
    // response.send({id:1,name:"KDD"})
})

app.listen(port, console.log(`server started at ${port} .....`))