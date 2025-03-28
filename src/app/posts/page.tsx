// Server Component -> Os dados dos componentes já são carregados antes de enviar para o client

import Button from "@/components/button/page";
import Link from "next/link";

export interface PostsProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface Response {
  posts: PostsProps[];
}

export default async function Posts() {
  const res = await fetch("https://dummyjson.com/posts", {
    cache: 'force-cache', // forcar cache
    next: {
      revalidate: 3600 //revalida em x tempos
    }
  });
  const data = await res.json();

  const handleServerAction = async () => {
    // Server Actions sao functions executadas direto no servidor
    "use server";
    console.log("CLICANDO....");
  };

  const handleSubmit = async (formData: FormData) => {
    // Outra server action
    "use server";
    const userId = formData.get("userId");
    const res = await fetch(`https://dummyjson.com/posts/${userId}`);
    const data = await res.json();
    console.log(data);
  };

  return (
    <>
      <button onClick={handleServerAction}>Ação Server-Side</button>
      <br />
      <Button /> {/*Client components dentro de um server components*/}\
      <form action={handleSubmit}>
        <input
          type="text"
          placeholder="ID do Usuario"
          className="border border-gray-200 p-2"
          name="userId"
        />
        <button className="bg-blue-500 text-white p-2" type="submit">
          Enviar
        </button>
      </form>
      <h1 className="text-center mt-5 mb-2 font-bold text-3xl">
        Todos os posts
      </h1>
      <div className="flex flex-col gap-4 mx-2">
        {data.posts.map((post: PostsProps) => (
          <div className="bg-gray-200 p-4 rounded-md" key={post.id}>
            <h2 className="font-bold">{post.title}</h2>
            <p>{post.body}</p>
            <Link
              className="text-blue-500 hover:underline"
              href={`/posts/${post.id}`}
            >
              Acessar detalhes
            </Link>
            {/*Link usado para acessar rotas dinamicas */}
          </div>
        ))}
      </div>
    </>
  );
}
