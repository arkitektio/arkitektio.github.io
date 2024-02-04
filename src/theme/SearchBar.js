import React from 'react';
import SearchBar from '@theme-original/SearchBar';

export default function SearchBarWrapper(props) {
  return (
    <div style={{marginRight: "1rem"}}>
      <SearchBar {...props} />
    </div>
  );
}
