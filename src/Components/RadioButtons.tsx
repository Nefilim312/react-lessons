import React, { useState } from 'react';
import ToggleButton from './ToggleButton';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';

const useStyles = createUseStyles({
  toggleButtonGroup: {
    display: 'inline-block',
    '&>label': {
      padding: '.5rem 1.5rem;',
      fontWeight: '300',
      fontSize: '1rem',
      borderRadius: '0',
      '&:first-of-type': {
        borderRadius: 'var(--borderSize) 0 0 var(--borderSize)',
      },
      '&:last-of-type': {
        borderRadius: '0 var(--borderSize) var(--borderSize) 0',
      },
    },
  },
  caption: {
    marginRight: '1.5rem',
    color: '#FFF',
    fontWeight: '400',
  },
});

interface RadioButtonsProps {
  caption?: string;
  className?: string;
  buttons: { value: string; title: string }[];
  selectedValue: string;
  onChange?: (value: any) => void;
}

const RadioButtons: React.FC<RadioButtonsProps> = ({
  caption,
  className,
  buttons,
  onChange,
  ...props
}: RadioButtonsProps) => {
  const classes = useStyles();

  const [selectedValue, setSelectedValue] = useState(props.selectedValue);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event?.target.value);
    onChange && onChange(event?.target.value);
  };

  const Caption = caption ? (
    <span className={classes.caption}>{caption}</span>
  ) : null;

  return (
    <div className={classNames(classes.toggleButtonGroup, className)}>
      {Caption}

      {buttons.map((button) => (
        <ToggleButton
          caption={button.title}
          key={button.value}
          type='radio'
          value={button.value}
          checked={selectedValue === button.value}
          onChange={changeHandler}
        ></ToggleButton>
      ))}
    </div>
  );
};

export default RadioButtons;
