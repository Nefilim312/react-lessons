import React from 'react';
import Logo from './Logo';
import { createUseStyles } from 'react-jss';
import SearchString from './SearchString';
import RadioButtons from './RadioButtons';

interface HeaderProps {
  onSearch: (searchValue: string) => void;
  onSearchByChanged: (searchBy: any) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch, onSearchByChanged }) => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <div className={classes.headerTop}>
        <Logo />
      </div>
      <div className={classes.headerMain}>
        <h3 className={classes.title}>FIND YOUR MOVIE</h3>
        <SearchString onSearch={onSearch} />
        <RadioButtons
          className={classes.searchBy}
          buttons={[
            { value: 'title', title: 'TITLE' },
            { value: 'genres', title: 'GENRE' },
          ]}
          selectedValue='title'
          caption='SEARCH BY'
          onChange={onSearchByChanged}
        />
      </div>
    </div>
  );
};

const useStyles = createUseStyles({
  header: {
    backgroundImage: 'url(bg.jpg)',
  },
  title: {
    color: '#FFF',
    fontWeight: 200,
    fontSize: '2.4rem',
    letterSpacing: '0.05em',
  },
  headerTop: {
    padding: '1rem 2rem',
  },
  headerMain: {
    padding: '0 5rem 5rem 5rem',
  },
  searchBy: {
    marginTop: '1rem',
  },
});

export default Header;
