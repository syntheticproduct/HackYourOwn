import { StyledButton } from "./StyledButton.styled";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

export default function DiscordButton() {
  return (
    <StyledButton
      icon={faDiscord}
      href="https://discord.gg/KNKdGGe"
      color="#738ADB"
      text="Join Our Discord!"
    />
  );
}
