import { books } from "../shelves/constants"

export type SearchProps = {
    value: string
}

export type volumeInfo = {
  title: string
  authors: [string]
}

export type book = {
  volumeInfo: volumeInfo
}

export type books = [book]

export type booksApiResponse = {
  items: books
}
