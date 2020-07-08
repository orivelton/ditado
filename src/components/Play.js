import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import HearingIcon from '@material-ui/icons/Hearing';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

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
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const readText = () => {
    setCount(count + 1);
    console.log(count);
    
    
    const msg = new SpeechSynthesisUtterance(Words[count].text);
    msg.lang = 'pt-PT';
    msg.voiceURI = "native";
    window.speechSynthesis.speak(msg);
    
  }



  const classes = useStyles();
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<HearingIcon />}
        onClick={readText}
      >
        Play
      </ Button>

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Ditado</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={text}
          onChange={handleChange}
          label="Ditado"
        >
          <MenuItem value="">
            <em>Selecione</em>
          </MenuItem>
          {
            Words.map(({ text }) => <MenuItem key={text} value={text}>{text}</MenuItem>)
          }
          
        </Select>
      </FormControl>
    </>
  )
}

export default Play;