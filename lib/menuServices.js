import { readDir, readFile } from './fileServices'

export function getAllCategories() {
  const fileNames = readDir('/data/menu')

  return fileNames.map(f => ({
    params: {
      category: f.replace(/\.json$/, '').split(' ').join('%20')
    }
  }))
}

export function getItems(category) {
  const file = readFile(`/data/menu/${category}.json`)

  return JSON.parse(file)
}