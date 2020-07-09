import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import HearingIcon from '@material-ui/icons/Hearing';

import Words from '../data/text.json';
import { speakText } from '../settings/config';
import ProgressStepper from './ProgressStepper';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Play = () => {
  const [count, setCount] = useState(0);

  const handleNextPlayer = () => {
    setCount((count) => count + 1);
  }

  const handleBackPlayer = () => {
    setCount((count) => count - 1);
  }

  const classes = useStyles();
  const progressStepper = { steps: Words.length, count, handleNextPlayer, handleBackPlayer };

  return (
    <>
      {
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          endIcon={<HearingIcon />}
          onClick={() => speakText(Words[count].text)}
        >
          Play
        </ Button>
      }

      <ProgressStepper {...progressStepper}/>
    </>
  )
}

export default Play;