
import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './config/db.js'
import userRouter from './routes/user.route.js'
import cors from 'cors'
const app = express()
const port = process.env.PORT || 3000

connectDB()

app.use(cors())
//middleware
app.use(express.json())


app.use('/user', userRouter)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
