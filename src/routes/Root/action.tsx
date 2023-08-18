import { QueryClient } from '@tanstack/react-query';
import { getBooksQuery } from '../../api/books'

const rootAction = (queryClient: QueryClient) =>
  async (data) => {
    console.log(data)
    // let formData = await request.formData();
    // console.log(formData)
    // const query = getBooksQuery({ query: 'harry potter' })

    // return (
    // queryClient.getQueryData(query.queryKey) ??
    // (await queryClient.fetchQuery(query))
    // )
  }


export default rootAction
