import { useLocalStorage } from 'hooks';
import { nanoid } from 'nanoid';
import React, { Component } from 'react';

import { FiSearch } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { addTodo } from 'redux/slice';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export const SearchForm = () => {
  const [query, setQuery] = useLocalStorage("search", "")
  const dispatch = useDispatch()
  
  const handleInput = e => {
      setQuery(e.currentTarget.value)
  };

  const handleSubmit = e => {
    e.preventDefault();

    const todo = { id: nanoid(), query }
    dispatch(addTodo(todo))
    setQuery("")
  };

    return (
      <SearchFormStyled onSubmit={handleSubmit}>
        <FormBtn type="submit">
          <FiSearch size="16px" />
        </FormBtn>
        <InputSearch
          onChange={handleInput}
          placeholder="What do you want to write?"
          name="search"
          required
          value={query}
          autoFocus
        />
      </SearchFormStyled>
    );

}
