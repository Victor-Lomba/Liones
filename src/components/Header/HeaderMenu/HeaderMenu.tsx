import Image from "next/image";
import Link from "next/link";

interface Options {
  img: string;
  text: string;
  url: string;
}

interface HeaderMenuProps {
  options: Options[];
}

export default function HeaderMenu({ options }: HeaderMenuProps) {
  return (
    <div>
      {options.map(({ text, img, url }) => (
        <div key={text}>
          <Link href={url} />
          <Image src={img} alt="Option" />
        </div>
      ))}
    </div>
  );
}
