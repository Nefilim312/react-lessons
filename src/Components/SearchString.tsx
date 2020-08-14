import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import { createUseStyles } from 'react-jss';

interface SearchStringProps {
  onSearch: (value: string) => void;
}

const useStyles = createUseStyles({
  searchContainer: {
    display: 'flex',
  },
  button: {
    marginLeft: '1rem',
  },
});

const SearchString: React.FC<SearchStringProps> = ({
  onSearch,
}: SearchStringProps) => {
  const classes = useStyles();

  const [searchValue, setSearchValue] = useState('');

  const clickHandler = () => {
    console.log('Search button clicked', searchValue);
    onSearch(searchValue);
  };

  const onEnterPressed = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onSearch(searchValue);
    }
  };

  const inputChangedHandler = (inputValue: string) => {
    console.log('Search input changed:', inputValue);
    setSearchValue(inputValue);

    if (!inputValue) {
      onSearch('');
    }
  };

  return (
    <div className={classes.searchContainer}>
      <Input
        placeholder='Search'
        onChange={inputChangedHandler}
        onKeyPress={onEnterPressed}
      />
      <Button
        className={classes.button}
        caption='SEARCH'
        onClick={clickHandler}
      />
    </div>
  );
};

export default SearchString;
