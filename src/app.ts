import express from "express"
import cors from "cors"

import rootRouter from "./routes"

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api", rootRouter)

app.listen(8080, () => {
  console.log(`server is running at http://localhost:8080`)
})
