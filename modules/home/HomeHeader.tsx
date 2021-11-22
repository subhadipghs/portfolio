import { Bold } from "@/components/bold/Bold";
import { Header } from "@/components/header/Header";
import { AnimatedMsgBox } from "@/components/msgbox/AnimatedMsgBox";
import { MobileNavbar } from "@/components/navbar-ui/MobileNavbar";

export function HomeHeader() {
  return (
    <Header>
      <MobileNavbar />
      <AnimatedMsgBox whileTap={{ scale: 0.9 }}>
        Hello I&apos;m a Fullstack developer, from <Bold text="India" /> 👋
      </AnimatedMsgBox>
    </Header>
  );
}
