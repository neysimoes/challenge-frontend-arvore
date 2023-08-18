import React, { useState } from 'react'
import { getBooksQuery } from '../../api/books'

import {
  useQueryClient,
} from '@tanstack/react-query'
import { redirect } from "react-router-dom"

import { Icon, InputSearch, SearchForm, SearchContainer,
  SearchResultItem,
  SearchResultList } from './styles'
import type { SearchProps, booksApiResponse, books } from './types'

const listResults = (results: books) => results.map((item, index) => (<SearchResultItem key={index} onClick={() => redirect(`/busca?q=${item.volumeInfo.title}`)}>{item.volumeInfo.title}</SearchResultItem>))

const Search: React.FC<SearchProps> = () => {
  const queryClient = useQueryClient()

  const [ searchValue, setSearchValue ] = useState('')
  const [ isSearchOpen, setSearchOpen ] = useState(false)
  const [ searchResult, setSearchResult ] = useState([])

  const handleSubmit = (event: Event) => {
    event.preventDefault()
    redirect(`/busca?q=${searchValue}`)
  }

  const handleSearchInputChange = async ({ target }: InputEvent) => {
    const { value } = target as HTMLInputElement;
    setSearchValue(value)
    const query = getBooksQuery({ query: value, limit: 5 })

    const response = (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query)))

    const { items } = await response as booksApiResponse;

    setSearchOpen(items?.length)

    setSearchResult(items?.length ? items : [])
  }

  return (
    <SearchContainer>
      <SearchForm onSubmit={handleSubmit}>
        <InputSearch type="text" placeholder='Pesquisar...'
          value={searchValue}
          className={`${isSearchOpen ? 'hasResults' : ''}`}
          onChange={handleSearchInputChange}
          onBlur={() => setSearchOpen(false)}
          onFocus={handleSearchInputChange}
        />
        <Icon />
      </SearchForm>
        {isSearchOpen && <SearchResultList>
          {listResults(searchResult)}
        </SearchResultList>
      }
    </SearchContainer>
  )
}

export default Search
