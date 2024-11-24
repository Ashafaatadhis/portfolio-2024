import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import useSidebar from "@/hooks/useSidebar";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const { active, setActive } = useSidebar();
  const handleOpen = () => {
    setActive();
  };
  return (
    <nav className="flex xl:hidden justify-between items-center">
      <div>
        <Image
          height={100}
          width={100}
          className="rounded-full aspect-square w-11"
          alt="User Profile"
          src="/images/user.png"
        />
      </div>
      <div className="flex gap-6 items-center">
        <ThemeToggle active={active} />
        <div
          onClick={handleOpen}
          className="p-3   border-[#dedee6] bg-[#EFEFFD] dark:bg-[#212131] rounded-full border dark:border-[#2E2E44]"
        >
          <RxHamburgerMenu className="text-lg text-[#6A707E]" />
        </div>
      </div>
    </nav>
  );
}
