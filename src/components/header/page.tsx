import Link from "next/link"; // Lib usada para navegacao com o Next
import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className="bg-black text-white p-4 w-full fixed shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center">
            Estudos em
            <Image src="/next.svg" alt="Next.js Logo" className="invert ml-2" width={100} height={100} />
          </h1>
          <nav>
            <ul className="flex gap-4">
              <li>
                <Link href="/" className="hover:underline mr-4">
                  Principal
                </Link>
                <Link href="/contatos" className="hover:underline mr-4">
                  Contatos
                </Link>
                <Link href="/posts" className="hover:underline mr-4">
                  Posts
                </Link>
                <Link href="/posts-client" className="hover:underline mr-4">
                  Posts Client
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
