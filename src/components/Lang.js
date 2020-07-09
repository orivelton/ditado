import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { sortByProperty } from '../helpers/helper';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 100,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


const Lang = () => {
  const classes = useStyles();
  const speechSynthesis = window.speechSynthesis;
  const [voices, setVoices] = useState([]);
  const [lang, setLang] = React.useState('');

  const handleChange = ({target: { value }}) => {
    setLang(value);
    localStorage.setItem('lang', value);
  };

  const handleOpen = () => {
    !voices.length && setVoices(sortByProperty(speechSynthesis.getVoices()));
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">Lang</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={lang}
        onChange={handleChange}
        label="Age"
        onOpen={handleOpen}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {
          voices.map(({ lang, voiceURI }) => <MenuItem key={voiceURI} value={lang}>{voiceURI} - {lang}</MenuItem>)
        }
      </Select>
    </FormControl>
  ) 
}

export default Lang;