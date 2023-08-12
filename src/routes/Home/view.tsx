import Shelves from "../../components/shelves";
import { useLoaderData } from 'react-router-dom'

function Home() {
    const books = useLoaderData()
    console.log('books ', books)
    return <Shelves />
}

export default Home