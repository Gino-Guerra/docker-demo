import express from "express"
import cors from 'cors'
const PORT = process.env.PORT || 3000



const app = express()
app.use(cors())


app.get('/',(req,res) => {
    res.send('hello docker! 🐳')
})
app.get('/test',(req,res) => {
    res.send('This is a test!')
})



app.listen(PORT,() => {
    console.log(`Listening on http://localhost:${PORT}...`)
})