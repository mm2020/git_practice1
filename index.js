const express =  require('express')
const app = express()
const port = 18000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log('Running!')
})