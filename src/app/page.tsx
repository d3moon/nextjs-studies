//  Esse tipo de export é necessário pq o next importa assim na hora de renderizar os components

/**
 * Revalida o cache para arquivos estaticos serem atualizados em cada tempo
 * Especifico para Server Components, pois Clients Components usam hooks de atualizacao sem precisar disso.
 */

export const revalidate = 15


export default function Home() {
  return <div>Home: {Math.random() * 10}</div>;
}
