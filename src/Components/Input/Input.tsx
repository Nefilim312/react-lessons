import React, { useState, useCallback } from 'react';
import { createUseStyles } from 'react-jss';
import { DARKGREY_TRANSPARENT, BORDER_SIZE } from '../../constants/styles';

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
}) => {
  const classes = useStyles();
  const [value, setValue] = useState(initialValue || '');

  const changeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);

      if (onChange) {
        onChange(event.target.value);
      }
    },
    [onChange]
  );

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

const useStyles = createUseStyles({
  input: {
    width: '100%',
    border: 'none',
    background: DARKGREY_TRANSPARENT,
    padding: '1rem',
    fontSize: '1.4rem',
    fontWeight: '300',
    borderRadius: BORDER_SIZE,
    color: '#FFF',
    outline: 'none',
  },
});

export default Input;
