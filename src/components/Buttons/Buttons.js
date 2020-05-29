import { StyledButton } from "./StyledButton.styled";
import { faDiscord, faPaypal } from "@fortawesome/free-brands-svg-icons";

export function DiscordButton() {
  return (
    <StyledButton
      icon={faDiscord}
      href="https://discord.gg/KNKdGGe"
      color="#738ADB"
      text="Join Our Discord!"
    />
  );
}

export function DonateButton() {
  return (
    <StyledButton
      icon={faPaypal}
      href="https://paypal.me/hackyourown"
      color="#00457C"
      text="Donate!"
    />
  );
}
