import Image from "next/image";

export const Header = () => {
  return (
    <div>
      <Image src="/logo.svg" width={82} height={30} alt="Logo" />
    </div>
  );
};
