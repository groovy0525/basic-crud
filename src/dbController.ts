import fs from "fs"
import { resolve } from "path"

const basePath = resolve()

const filenames = {
  posts: resolve(basePath, "src/db/posts.json"),
}

export const readDB = () => {
  try {
    return JSON.parse(fs.readFileSync(filenames["posts"], "utf-8"))
  } catch (e) {
    console.error(e)
  }
}

export const writeDB = (data: any) => {
  try {
    return fs.writeFileSync(filenames["posts"], JSON.stringify(data))
  } catch (e) {
    console.error(e)
  }
}
