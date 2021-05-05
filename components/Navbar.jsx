/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'


const AntTabs = withStyles({
  root: {
    // borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#7D98A1',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(2),
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
      color: '#7D98A1',
      opacity: 1,
    },
    '&$selected': {
      color: '#7D98A1',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#7D98A1',
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
        <div className="header">
          <div className="header-name">Anderson Chan</div>
          <div className="title">Software Engineer</div>
        </div>
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
        <div className="header-right">
          <a
            href="https://www.linkedin.com/in/andersonchan4574/"
            aria-label="LinkedIn"
            target="_blank" rel="noopener noreferrer"
          >
            <LinkedInIcon fontSize="large" />
          </a>
          <a href="https://github.com/ac4574" target="_blank" rel="noopener noreferrer" aria-label="Github">
            <GitHubIcon fontSize="large" />
          </a>
      </div>
      </nav>
      <style jsx>
      {`
        nav {
          align-items: center;
          position: fixed;
          top: 0;
          z-index: 10000;
          width: 100%;
          display: flex;
          flex-direction: column;
          background-color: #080808;
          height: 8.5em;
          padding-top: 1em;

        }
        .header {
        }
        .header-name {
          text-align: center;
          font-weight: bold;
        }
        .title {
          color: #999999;
        }
        .header-right {
          display: flex;
          position: absolute;
          right: 30px;
          align-items: center;
        }
        a {
          color: white;
        }
      `}
      </style>
    </>
  )
}
