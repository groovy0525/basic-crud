import express from "express"
import cors from "cors"
import fs from "fs"
import { readDB, writeDB } from "./dbController"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get("/", (req, res) => {
  try {
    const posts = readDB()

    if (!posts) {
      return res.status(404).json({
        success: false,
        message: "Not Found",
      })
    }

    res.status(200).json(posts)
  } catch (e) {
    console.error(e)

    res.status(500).json({
      success: false,
      message: "server error",
    })
  }
})

app.post("/", async (req, res) => {
  try {
    const { title, content } = req.body

    if (!title || !content) {
      return res.status(400).send({
        success: false,
        message: "Bad Request",
      })
    }

    const posts = readDB()
    const newPost = {
      id: Date.now(),
      title,
      content,
    }
    writeDB([newPost, ...posts])
    res.status(201).json(newPost)
  } catch (e) {
    console.error(e)

    res.status(500).json({
      success: false,
      message: "server error",
    })
  }
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`)
})
