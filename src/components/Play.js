import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import HearingIcon from '@material-ui/icons/Hearing';
import Divider from '@material-ui/core/Divider';

import Words from '../data/text.json';
import { speakText } from '../settings/config';
import ProgressStepper from './ProgressStepper';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    margin: 'auto',
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    width: '100%'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  section: {
    margin: theme.spacing(3, 2),
  }
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
      <div className={classes.root}>
        <div className={classes.section}>
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
        </div>
        <Divider variant="middle" />
        <div className={classes.section}>
          <ProgressStepper {...progressStepper}/>
        </div>
      </div>
    </>
  )
}

export default Play;
