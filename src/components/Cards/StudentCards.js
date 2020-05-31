import {
  AvatarCards,
  NoPictureAvatarCards,
} from "components/Cards/AvatarCards.styled";
import { Link } from "@material-ui/core"; // Can't use next link for some reason

export function FirstStudent() {
  return (
    <AvatarCards src="/images/students/jake.jpg" name="Jake B.">
      Hey everyone! I'm Jake and I am a rising junior studying Computer Science
      at the University of Massachusetts Boston. Last Summer I was a web
      development intern at a company that offered me a role as a software
      development intern this Summer. Unfortunately that was rescinded due to
      COVID-19, so I am looking to put my skills to good work. I have experience
      with web development and this year I was one of fifteen people selected to
      take a course offered at Google's Cambridge offices in Android
      development (you can see my final project
      <Link href="https://github.com/jpbates13/ubored"> here!</Link>
      ).
    </AvatarCards>
  );
}
