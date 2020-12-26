import fs from 'fs'
import path from 'path'

export default function(targetPath) {
  const dirPath = path.join(process.cwd(), targetPath)

  return fs.readdirSync(dirPath)
}