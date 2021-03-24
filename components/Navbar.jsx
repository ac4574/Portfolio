/* eslint-disable react/react-in-jsx-scope */
import Link from 'next/link'
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Projects from './Projects'
import About from './About'
import Contact from './Contact'

const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#1890ff',
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
      color: '#40a9ff',
      opacity: 1,
    },
    '&$selected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  tabs: {
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return (
    <>
      <nav>
        <div className={classes.root}>
          <div className={classes.tabs}>
            <AntTabs value={value} onChange={handleChange} aria-label="tabs">
              <AntTab label="Home"/>
              <AntTab value="about" label="About" />
              <AntTab value="projects" label="Projects"/>
              <AntTab value="contact" label="Contact"  />
            </AntTabs>
            <Typography className={classes.padding} />
          </div>
        </div>
      </nav>
      {value === 'about' ? <About/> : ''}
      {value === 'projects' ? <Projects/> : ''}
      {value === 'contact' ? <Contact/> : ''}
    </>
  )
}
