import { PostsProps } from "../../page";

export default async function PostInfo ({id} : {id : string}) {
  await new Promise((resolve) => setTimeout(resolve, 4000)); // forcando o timeout para ativar o componente loading
  
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  const post: PostsProps = await res.json();

  return (
    <>
       <div className="flex flex-col gap-4 mx-2">
        <div className="bg-gray-200 p-4 rounded-md">
          <h2 className="font-bold">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      </div>
    </>
  )
}