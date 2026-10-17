import Image from "next/image";
import NavLinks from "./NavLinks";
import UserInfo from "./Userinfo";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="w-full bg-white">
      <div className="relative mx-auto h-18 max-w-7xl px-4">
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2">
          <div className="h-10 w-10 overflow-hidden rounded-lg bg-gray-900">
            <Image
              src="/logo.webp"
              alt="Bangla News 24"
              width={40}
              height={40}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="font-serif text-[20px] font-bold leading-5 text-[#d60000]">
              Bangla News 24
            </h1>

            <p className="mt-0.5 text-[9px] font-medium text-gray-400">
              {date}
            </p>
          </div>
        </div>
        <UserInfo/>
      </div>

      <NavLinks />
    </header>
  );
};

export default Header;
