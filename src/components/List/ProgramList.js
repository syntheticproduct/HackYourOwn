import { TitleStyledList } from "components/List/StyledList.styled";
import { List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useTimelineCircleStyles = makeStyles({
  root: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    background: "white",
    border: "3px solid orange"
  }
});

const TimelineCircle = () => {
  const classes = useTimelineCircleStyles();

  return <div className={classes.root} />
};

const useTimelineStyles = makeStyles({
  root: {
    width: "75%",
    margin: "30px auto",
    "@media (max-width: 600px)": {
      width: "100%",
      margin: 0,
    }
  },
  dFlex: {
    display: "flex"
  },
  left: {
    width: "100%",
    textAlign: "right"
  },
  right: {
    width: "100%",
    textAlign: "left"
  },
  middle: {
    flexDirection: "column",
    marginTop: "10px",
  },
  line: {
    border: "1px solid #222",
    width: "5%",
    margin: "0 auto",
    height: "100%"
  },
  lines: {
    height: "100%",
    margin: "0 auto",
  }
});

export const TimelineList = () => {
  const classes = useTimelineStyles();
  return (
    <List className={classes.root} >
      <div className={classes.dFlex}>
        <div className={classes.left}>
          <TitleStyledList
            left
            title="Week 1"
            text="Git / GitHub, Basics of HTML, Basics of CSS"
          />
        </div>
        <div 
          className={classes.middle} 
          style={{ order: useMediaQuery(theme => theme.breakpoints.down('sm')) ? -1 : 0 }}
        >
          <TimelineCircle />
          <div className={classes.dFlex, classes.lines}>
            <div className={classes.line} />
          </div>
        </div>
        <div className={classes.right} style={{ width: useMediaQuery(theme => theme.breakpoints.down('sm')) ? 0 : "100%" }} />
      </div>
      <div className={classes.dFlex}>
        <div className={classes.left} style={{ width: useMediaQuery(theme => theme.breakpoints.down('sm')) ? 0 : "100%" }} />
        <div 
          className={classes.middle} 
          style={{ order: useMediaQuery(theme => theme.breakpoints.down('sm')) ? -1 : 0 }}
        >
          <TimelineCircle />
          <div className={classes.dFlex, classes.lines}>
            <div className={classes.line} />
          </div>
        </div>
        <div className={classes.right} >
          <TitleStyledList
            title="Week 2"
            text="Intro to JavaScript, DOM Manipulation"
          />
        </div>
      </div>
      <div className={classes.dFlex}>
        <div className={classes.left} >
          <TitleStyledList
            left
            title="Week 3"
            text="Advanced JavaScript (ES6, classes, modules), Functional programming in JavaScript"
          />
        </div>
        <div 
          className={classes.middle} 
          style={{ order: useMediaQuery(theme => theme.breakpoints.down('sm')) ? -1 : 0 }}
        >
          <TimelineCircle />
          <div className={classes.dFlex, classes.lines}>
            <div className={classes.line} />
          </div>
        </div>
        <div className={classes.right} style={{ width: useMediaQuery(theme => theme.breakpoints.down('sm')) ? 0 : "100%" }} />
      </div>
      <div className={classes.dFlex}>
        <div className={classes.left} style={{ width: useMediaQuery(theme => theme.breakpoints.down('sm')) ? 0 : "100%" }} />
        <div 
          className={classes.middle} 
          style={{ order: useMediaQuery(theme => theme.breakpoints.down('sm')) ? -1 : 0 }}
        >
          <TimelineCircle />
          <div className={classes.dFlex, classes.lines}>
            <div className={classes.line} />
          </div>
        </div>
        <div className={classes.right} >
          <TitleStyledList
            title="Week 4"
            text="Javascript Data Structures, NPM, Webpack"
          />
        </div>
      </div>
      <div className={classes.dFlex}>
        <div className={classes.left}>
          <TitleStyledList
            left
            title="Week 5–8"
            text="React, Node.js, Express.js, MongoDB, REST APIs*"
          />
        </div>
        <div 
          className={classes.middle} 
          style={{ order: useMediaQuery(theme => theme.breakpoints.down('sm')) ? -1 : 0 }}
        >
          <TimelineCircle />
        </div>
        <div className={classes.right} style={{ width: useMediaQuery(theme => theme.breakpoints.down('sm')) ? 0 : "100%" }} />
      </div>
    </List>
  );
};
