import React, { useState, useCallback } from 'react';
import Input from './Input';
import Button from './Button';
import { createUseStyles } from 'react-jss';

interface SearchStringProps {
  onSearch: (value: string) => void;
}

const SearchString: React.FC<SearchStringProps> = ({ onSearch }) => {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState('');

  const clickHandler = useCallback(() => {
    onSearch(searchValue);
  }, [onSearch, searchValue]);

  const onEnterPressed = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'Enter') {
        onSearch(searchValue);
      }
    },
    [onSearch, searchValue]
  );

  const inputChangedHandler = useCallback(
    (inputValue: string) => {
      setSearchValue(inputValue);

      if (!inputValue) {
        onSearch('');
      }
    },
    [onSearch]
  );

  return (
    <div className={classes.searchContainer}>
      <Input
        placeholder='Search'
        onChange={inputChangedHandler}
        onKeyPress={onEnterPressed}
      />
      <Button className={classes.button} onClick={clickHandler}>
        SEARCH
      </Button>
    </div>
  );
};

const useStyles = createUseStyles({
  searchContainer: {
    display: 'flex',
  },
  button: {
    marginLeft: '1rem',
  },
});

export default SearchString;
