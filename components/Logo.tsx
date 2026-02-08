import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/mint_glow_logo.png"
        alt="Mint Glow Salon Logo"
        width={120}
        height={120}
        priority
      />
    </Link>
  );
}