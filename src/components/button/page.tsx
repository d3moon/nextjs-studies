'use client'

import { useState } from "react"

export default function Button () { 
  const [nome, setNome] = useState('Freud')
  return ( 
    <>
    <button onClick={() => setNome('Einstein')}>Alterar nome</button>
    <p>Nome: {nome}</p>
    </>
  )
}