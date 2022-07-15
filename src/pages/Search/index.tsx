import React, {useState} from 'react';
import {Container, SearchArea, SearchInput} from './styles';

export function Search() {
  const [searchText, setSearchText] = useState('');

  const searchBarbers = () => {};

  return (
    <Container>
      <SearchArea>
        <SearchInput
          placeholder="digite o nome do barbeiro"
          value={searchText}
          onChangeText={setSearchText}
          onEndEditing={searchBarbers}
          returnKeyType="search"
          autoFocus
          selectTextOnFocus
        />
      </SearchArea>
    </Container>
  );
}
