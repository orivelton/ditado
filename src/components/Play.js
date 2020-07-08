import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import HearingIcon from '@material-ui/icons/Hearing';
import ReplayIcon from '@material-ui/icons/Replay';

import Words from '../data/text.json';

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
  // const synth = window.speechSynthesis;
  const [count, setCount] = useState(0);
  const [showPlay, setShowPlay] = useState(true);

  const readText = () => {
    setCount(count + 1);
    console.log(count);
    
    const msg = new SpeechSynthesisUtterance(Words[count].text);
    msg.lang = 'pt-PT';
    msg.voiceURI = "native";
    msg.rate = 0.7;
    window.speechSynthesis.speak(msg);

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