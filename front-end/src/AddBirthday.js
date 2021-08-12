import Modal, {closeStyle} from 'simple-react-modal';

import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '300px',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

let AddBirthday = (props) => {
  const classes = useStyles();

  let [formData, setFormData] = useState({
      'name': '',
      'date_of_birth': '',
      'thumbnail': '',
  })

  let onChange = (event) => {
    if (event.target.name === 'thumbnail'){
      setFormData({
        ...formData,
        [event.target.name]: event.target.files[0],
      })
    }else{
      setFormData({
          ...formData,
          [event.target.name]: event.target.value
      })
    }
  }

  let submit = () => {
      let submissiondata = new FormData();

      submissiondata.append('name', formData.name);
      submissiondata.append('date_of_birth', formData.date_of_birth);
      submissiondata.append('thumbnail', formData.thumbnail);

      console.log(submissiondata);

      axios.post('/api/birthday/', submissiondata).then((res) => {
          props.onClose()
      }).catch(err => console.error(err));
  }

  return (
    <div component="main" style={{height: '400px'}}>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Add New
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Name"
            name="name"
            autoFocus
            value={formData.name}
            onChange={onChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="date_of_birth"
            label="Date of Birth"
            type="date"
            value={formData.date_of_birth}
            onChange={onChange}
            InputLabelProps={{
                shrink: true
            }}
          />
          <input
            accept="image/*"
            className={classes.input}
            style={{ display: 'none' }}
            id="raised-button-file"
            multiple
            name="thumbnail"
            type="file"
            onChange={onChange}
            />
            <label htmlFor="raised-button-file">
                <Button variant="contained" component="span" className={classes.button}>
                    Upload
                </Button>
            </label> 
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submit}>
            Add New
          </Button>          
        </form>
      </div>
    </div>
  );
}


let AddBirthdayModal = (props) => {

    return (
        <Modal
            closeOnOuterClick={true}
            show={props.show}
            onClose={props.onClose}>
                <AddBirthday
                  onClose={props.onClose}
                />
            </Modal>
    )
}

export default AddBirthdayModal;
export {
    AddBirthday
}