import { StyledButton } from "./StyledButton.styled";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";

export default function DiscordButton() {
  return (
    <StyledButton
      icon={faPaypal}
      href="https://paypal.me/hackyourown"
      color="#00457C"
      text="Donate!"
    />
  );
}
