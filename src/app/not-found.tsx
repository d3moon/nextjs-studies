import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center font-bold mt-9 text-6xl mb-4">
          Essa página não existe!
        </h1>
        <Link href="/" className="text-blue-500 underline">Voltar para home</Link>
      </div>
    </>
  );
}
