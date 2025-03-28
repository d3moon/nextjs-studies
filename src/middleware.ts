
/**
 * Middleware no Next.js é uma função que roda antes de uma requisição ser concluída.
 * Autenticação : você pode usar middleware para verificar se um usuário está autenticado antes de permitir que ele acesse determinadas rotas.
 * Registro : o middleware pode ser usado para registrar solicitações, respostas ou outras informações relacionadas ao aplicativo.
 * Tratamento de erros : você pode criar um middleware para tratar erros que ocorrem durante o processamento da solicitação.
 * Cache : O middleware pode ser usado para armazenar em cache respostas ou dados para melhorar o desempenho.
 * Processamento de solicitações : você pode modificar ou processar solicitações antes que elas cheguem ao destino final.
 * Detecção de bots : o middleware pode ser usado para detectar e bloquear bots ou solicitações maliciosas.
*/


// Autenticação : você pode usar middleware para verificar se um usuário está autenticado antes de permitir que ele acesse determinadas rotas.

import { NextRequest, NextResponse } from "next/server"

export const middleware = (request: NextRequest) => {

  const auth = true

  if(request.nextUrl.pathname.startsWith('/posts') && !auth){
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}