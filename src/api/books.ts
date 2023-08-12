type getBooksParams = {
    query: string,
    limit?: number
}

export const getBooksQuery = ({ query, limit = 10 }: getBooksParams) => ({
    queryKey: ['books', { query, limit}],
    queryFn: async () => getBooks({ query, limit }),
  })

export const getBooks = ({ query, limit = 10 }: getBooksParams) =>
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=0&maxResults=${limit}`)