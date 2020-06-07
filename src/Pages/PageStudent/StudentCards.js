import {
  AvatarCards,
  NoPictureAvatarCards,
} from "components/Cards/AvatarCards.styled";
import { Link } from "@material-ui/core"; // Can't use next link for some reason

export function FirstStudent() {
  return (
    <AvatarCards src="/images/students/jake.jpg" name="Jake B.">
      Hey everyone! I&apos;m Jake and I am a rising junior studying Computer
      Science at the University of Massachusetts Boston. Last Summer I was a web
      development intern at a company that offered me a role as a software
      development intern this Summer. Unfortunately that was rescinded due to
      COVID-19, so I am looking to put my skills to good work. I have experience
      with web development and this year I was one of fifteen people selected to
      take a course offered at Google&apos;s Cambridge offices in Android
      development (you can see my final project
      <Link href="https://github.com/jpbates13/ubored"> here!</Link>
      ).
    </AvatarCards>
  );
}

export function SecondStudent() {
  return (
    <NoPictureAvatarCards name="Aaron">
      Hi everyone, I am Aaron, and I am going to be a senior in the fall at
      Rutgers University New Brunswick majoring in Computer Science. Back in
      November 2019 I was accepted into an internship for the summer but due to
      COVID-19, it was rescinded. I am most experienced in Java, but I know a
      fair amount of C#, Python, and C++, having worked in C# with Unity in
      class, and having made simple games in C++ and Python too. I hope that
      through this progam I can help create something meaningful over the summer
      and build up my programming ability.
    </NoPictureAvatarCards>
  );
}

export function ThirdStudent() {
  return (
    <NoPictureAvatarCards name="Gabriel">
      Hi guys, my name is Gabriel and I’m a rising junior studying Information
      Science on a cybersecurity track and minoring in cybersecurity. I’ve
      worked with HTML/CSS/JavaScript but it was rudimentary. I just finished my
      second semester working with Python and I love it. I am also starting to
      familiarize myself with Linux, Kalilinux and violent python. I am mostly
      here because my internship got cancelled and I want to keep learning but
      it’s harder to learn alone so this is a perfect environment.
    </NoPictureAvatarCards>
  );
}

export function FourthStudent() {
  return (
    <NoPictureAvatarCards name="Ashim Sedhain">
      Hey everyone, my name is Ashim Sedhain. I am an international student at
      the University of Texas. I am a rising junior interesting in web
      development and machine learning. I had a software engineering internship
      for the summer in which I was hoping to work with a team and solve
      real-world problems. But unfortunately, it was canceled. I am hoping I
      will still be able to do that while meeting new people and learning cool
      new technologies. HYO seems like a great place to start. Talking to people
      who share the same passion as me will be a good way to stay motivated and
      accountable. And at the end of the day, I want a cool story of how I spent
      my summer and what I did when faced with a challenge. I am currently
      working on a black and white colorization web application that you can see
      <Link href="https://github.com/asimsedhain/Color-This"> here!</Link>
    </NoPictureAvatarCards>
  );
}
