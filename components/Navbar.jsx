/* eslint-disable react/react-in-jsx-scope */
import Link from 'next/link'
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';


const AntTabs = withStyles({
  root: {
    // borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#8B2635',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#8B2635',
      opacity: 1,
    },
    '&$selected': {
      color: '#8B2635',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#8B2635',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(1),
  },
  tabs: {
  },
}));

export default function Navbar(props) {
  const classes = useStyles();
  const value = props.value
  const setValue = props.setValue

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return (
    <>
      <nav>
        <div className={classes.root}>
          <div className={classes.tabs}>
            <AntTabs value={value} onChange={handleChange} aria-label="tabs">
              <AntTab value="home" label="Home"/>
              <AntTab value="about" label="About" />
              <AntTab value="projects" label="Projects"/>
              <AntTab value="contact" label="Contact"  />
            </AntTabs>
            <Typography className={classes.padding} />
          </div>
        </div>
      </nav>
      <style jsx>
      {`
        nav {
          display: flex;
          margin-left: 40vw;
          margin-right: 40vw;

        }
      `}
      </style>
    </>
  )
}
