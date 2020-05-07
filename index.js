const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000
app.use(cors())
app.get('/', (request, response) => {
    response.send({id:1,name:"KDD"})
})

app.listen(port, console.log(`server started at ${port} .....`))