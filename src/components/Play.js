import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import HearingIcon from '@material-ui/icons/Hearing';
import ReplayIcon from '@material-ui/icons/Replay';

import Words from '../data/text.json';
import { speakText } from '../settings/config';

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
  const [showPlay, setShowPlay] = useState(true);

  const readText = () => {
    setCount(count + 1);
    speakText(Words[count].text)

    if((Words.length -1) === count) {
      setShowPlay(false);
    }
    
  }

  const reload = () => {
    setCount(0);
    setShowPlay(true);
  }

  const classes = useStyles();

  return (
    <>
      {
        showPlay ? (
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            endIcon={<HearingIcon />}
            onClick={readText}
          >
            Play
          </ Button>

        ) : (
          <Button
            variant="contained"
            size="large"
            className={classes.button}
            endIcon={<ReplayIcon />}
            onClick={reload}
          >
            Reload
          </ Button>
        )
      }
    </>
  )
}

export default Play;