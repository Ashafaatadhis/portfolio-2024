import HomeCard from "./HomeCard";

export default function Footer() {
  return (
    <HomeCard className="p-8 hover:opacity-100">
      <div className="grid grid-cols-3 w-1/2">
        <ul className="flex flex-col gap-3 ">
          <li className="cursor-pointer">Pages</li>
          <li className="text-[#818794] cursor-pointer  hover:text-black dark:hover:text-white">
            Home
          </li>
          <li className="text-[#818794] cursor-pointer hover:text-black dark:hover:text-white">
            Courses
          </li>
          <li className="text-[#818794] cursor-pointer hover:text-black dark:hover:text-white">
            Works
          </li>
        </ul>
        <ul className="flex flex-col gap-3">
          <li className="cursor-pointer">Services</li>
          <li className="text-[#818794] cursor-pointer hover:text-black dark:hover:text-white">
            Contact
          </li>
          <li className="text-[#818794] cursor-pointer hover:text-black dark:hover:text-white">
            Blog
          </li>
        </ul>
        <ul className="flex flex-col gap-3">
          <li className="cursor-pointer">Follow</li>
          <li className="text-[#818794] cursor-pointer hover:text-black dark:hover:text-white">
            LinkedIn
          </li>
          <li className="text-[#818794] cursor-pointer hover:text-black dark:hover:text-white">
            Facebook
          </li>
          <li className="text-[#818794] cursor-pointer hover:text-black dark:hover:text-white">
            Instagram
          </li>
        </ul>
      </div>
      <div className="flex gap-2 items-center mt-10 border-b pb-10 border-[#2E2E44]">
        <div className="w-[6px] aspect-square rounded-full bg-[#65B463]" />
        <p className="text-[#818794]">Open for Work</p>
      </div>
      <p className="text-[#818794] text-xs mt-8">Build By Adhis With ❤️</p>
    </HomeCard>
  );
}
