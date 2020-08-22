import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  input: {
    width: '100%',
    border: 'none',
    background: 'var(--darkGrey-transparent)',
    padding: '1rem',
    fontSize: '1.4rem',
    fontWeight: '300',
    borderRadius: 'var(--borderSize)',
    color: '#FFF',
    outline: 'none',
  },
});

export interface InputProps {
  placeholder?: string;
  initialValue?: string;
  onChange?: (value: string) => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  initialValue,
  onChange,
  onKeyPress,
}: InputProps) => {
  const classes = useStyles();
  const [value, setValue] = useState(initialValue || '');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);

    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <input
      className={classes.input}
      type='text'
      placeholder={placeholder}
      value={value}
      onChange={changeHandler}
      onKeyPress={onKeyPress}
    />
  );
};

export default Input;
