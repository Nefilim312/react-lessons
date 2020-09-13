import React from 'react';
import Button from '../Button/Button';
import classNames from 'classnames';
import { createUseStyles } from 'react-jss';
import { DARKGREY_TRANSPARENT } from '../../constants/styles';

interface ToggleButtonProps {
  className?: string;
  caption: string;
  type: 'radio' | 'checkbox';
  value: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  className,
  caption,
  type,
  value,
  checked,
  onChange,
}) => {
  const classes = useStyles();

  return (
    <Button
      as='label'
      className={classNames(!checked && classes.notChecked, className)}
    >
      <input
        className={classes.input}
        type={type}
        value={value}
        autoComplete='off'
        checked={!!checked}
        onChange={onChange}
      />
      {caption}
    </Button>
  );
};

const useStyles = createUseStyles({
  input: {
    position: 'absolute',
    clip: 'rect(0,0,0,0)',
    pointerEvents: 'none',
  },
  notChecked: {
    background: DARKGREY_TRANSPARENT,
  },
});

export default ToggleButton;
