import React, { useState } from 'react';

import { Button, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HearingIcon from '@material-ui/icons/Hearing';
import Divider from '@material-ui/core/Divider';
import { speakText } from '../settings/config';


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
  const classes = useStyles();
  const [text, setText] = useState('');

  return (
    <>
      <div className={classes.root}>
        <div className={classes.section}>
          <TextField fullWidth label="Text" variant="outlined" onChange={({currentTarget: { value }}) => setText(value)}/>
        </div>
        <Divider variant="middle" />
        <div className={classes.section}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            endIcon={<HearingIcon />}
            onClick={() => text && speakText(text)}
          >
            Play
          </ Button>
        </div>
        <Divider variant="middle" />
      </div>
    </>
  )
}

export default Play;
