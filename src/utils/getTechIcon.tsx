import IconCloud from "../components/Icons/IconCloud";
import IconCode from "../components/Icons/IconCode";
import IconDB from "../components/Icons/IconDB";
import IconGitHub from "../components/Icons/IconGitHub";
import IconLinkedIn from "../components/Icons/IconLinkedIn";
import IconMail from "../components/Icons/IconMail";
import IconPaint from "../components/Icons/IconPaint";
import IconTesting from "../components/Icons/IconTesting";
import IconTools from "../components/Icons/IconTools";

export const getTechIcon = (title: string): React.ReactNode => {
  switch (title) {
    case "Core Frameworks & Languages":
      return <IconCode />;
    case "State & Data Management":
      return <IconDB />;
    case "Styling, UI/UX & Design":
      return <IconPaint />;
    case "Testing & Quality Assurance (QA)":
      return <IconTesting />;
    case "Ecosystem & Dev-Ops":
      return <IconCloud />;
    case "Development & AI Tools":
      return <IconTools />;
    case "GitHub":
      return <IconGitHub />;
    case "LinkedIn":
      return <IconLinkedIn />;
    case "Mail":
      return <IconMail />;
    default:
      return <IconCode />;
  }
};
