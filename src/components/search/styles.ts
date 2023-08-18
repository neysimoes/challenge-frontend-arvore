import styled from 'styled-components'
import {ReactComponent as SearchIcon} from '../../assets/search-icon.svg';
import { Form } from "react-router-dom";

export const InputSearch = styled.input`
    background-color: #F1F7FC;
    border: 1px solid #DEE1E6;
    outline: #DEE1E6;
    line-height: 300%;
    font-size: 16px;
    font-weight: 400;
    cursor: default;
    color: #406a76;
    border-radius: 50px;
    padding: 0 16px;
    width: 100%;

    &:placeholder {
        color: #406a76;
        opacity: 0;
    }

    &.hasResults {
      border-radius: 25px 25px 0 0;
    }
`

export const Icon = styled(SearchIcon)`
    position: absolute;
    right: 32px;
    z-index: 2;

    @media (min-width: 992px) {
        right: 42px;
    }
`

export const SearchForm = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
`

export const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`

export const SearchResultItem = styled.li`
  padding: 0 16px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  &:hover {
    background-color: #ccc;
  }
`

export const SearchResultList = styled.ul`
  list-style: none;
  z-index: 1;
  position: absolute;
  background-color: #F1F7FC;
  border: 1px solid #DEE1E6;
  outline: #DEE1E6;
  line-height: 300%;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  color: #406a76;
  border-radius: 0 0 25px 25px;
  width: calc(100%);
  box-sizing: border-box;
  top: calc(100% - 17px);
  border-top: 0;
  padding: 0;
  overflow: hidden;
`
