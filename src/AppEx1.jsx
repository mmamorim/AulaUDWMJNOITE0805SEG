import React from 'react'
import { Icon } from '@iconify/react';
import Busca from "./components/Busca"
import Accordion from './components/Accordion';

const itens = [
  {
    titulo: "Java",
    conteudo: "Linguagem compilada e interpretada."
  },
  {
    titulo: "Python",
    conteudo: "Linguagem interpretada e dinamicamente tipada."
  },
  {
    titulo: "Javascript",
    conteudo: "Interpretada. Executa do lado do cliente e do lado do servidor também."
  }
]

const App = () => {
  return (
    <div className="p-2">
      <Accordion itens={itens} />
    </div>
  )
}
export default App