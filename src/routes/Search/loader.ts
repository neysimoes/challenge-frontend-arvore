import { QueryClient } from '@tanstack/react-query';
import { getBooksQuery } from '../../api/books'

const searchLoader = (queryClient: QueryClient) =>
  async () => {
    const query = getBooksQuery({ query: 'harry potter' })
    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query))
    )
  }

export default searchLoader
