import { Suspense } from "react";
import { PostsProps } from "../page";
import PostInfo from "./_components/post";

export default async function DetailPost({
  params // os parâmetros da rota são extraídos da URL pelo próprio framework e passados diretamente para o componente da página (params)
}: {
  params: Promise<{ id: string }> //precisa ser o mesmo nome definido na estrutura da rota dinâmica.
}) {
  const { id } = await params;

  return (
    <>
      <h1 className="text-center mt-5 mb-2 font-bold text-3xl">
        Detalhes do post
      </h1>
      {/*Esse lazy loading component faz o efeito em todo o componente em vez de um especifico.*/}
      <Suspense fallback={<h1>Carregando...</h1>}> 
        <PostInfo id={id} />
      </Suspense>
    </>
  );
}
