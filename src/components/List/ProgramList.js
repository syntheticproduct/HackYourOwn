import { StyledList, TitleStyledList } from "components/List/StyledList.styled";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

export const ProgramList = () => {
  return (
    <>
      <StyledList
        icon={faStar}
        text="The first 8 weeks will be focused on learning the basics of web development from course material that we will distribute weekly over Discord and video. Small projects will also be assigned to help you build your skills."
      />
      <StyledList
        icon={faStar}
        text="The last 4 weeks will be focused on using what you’ve learned over the summer to create and showcase a final project in groups of 4-6 Learners, which can be put in your portfolio and resume."
      />
    </>
  );
}

const TimelineCircle = () => (
  <div 
  style={{ 
    width: "30px", height: "30px", borderRadius: "50%", 
    background: "white", border: "2px solid orange", 
    position: "relative", left: "-16px", top: "43px"
  }} 
  />
);

export const TimelineList = () => {
  return (
    <List style={{ borderLeft: "2px solid #000", margin: "0 auto", width: "40%" }}>
      <TimelineCircle />
      <TitleStyledList
        title="Week 1:"
        text="Git / GitHub, Basics of HTML, Basics of CSS"
      />
      <TimelineCircle />
      <TitleStyledList
        title="Week 2:"
        text="Intro to JavaScript, DOM Manipulation"
      />
      <TimelineCircle />
      <TitleStyledList
        title="Week 3:"
        text="Advanced JavaScript (ES6, classes, modules),Functional programming in JavaScript"
      />
      <TimelineCircle />
      <TitleStyledList
        title="Week 4:"
        text="Javascript Data Structures, NPM, Webpack"
      />
      <TimelineCircle />
      <TitleStyledList
        title="Week 5-8:"
        text="React, Node.js, Express.js, MongoDB, REST APIs*"
      />
      <TimelineCircle />
      <TitleStyledList
        title="Week 9-12:"
        text="Capstone Project (full-stack MERN project)"
      />
    </List>
  );
};