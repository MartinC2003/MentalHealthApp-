import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core';
import CalendarComponent from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    padding: theme.spacing(2),
  },
  calendarContainer: {
    maxWidth: 600,
    padding: theme.spacing(2),
  },
}));

const Calendar = () => {
  const classes = useStyles();

  const handleDateChange = (date) => {
    console.log(date);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.calendarContainer} elevation={3}>
        <Typography variant="h5" gutterBottom>
          Calendar
        </Typography>
        <CalendarComponent
          onChange={handleDateChange}
          value={new Date()}
        />
      </Paper>
    </div>
  );
};

export default Calendar;
