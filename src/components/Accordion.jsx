import React, { useState } from 'react'
import { Icon } from '@iconify/react';

const Accordion = ({ itens }) => {

    const [indiceAtivo, setIndiceAtivo] = useState(1)

    console.log('itens', itens);

    const itemClicado = (indice) => {
        setIndiceAtivo(indice)
        console.log(indice)
    }

    return (
        <div>
            {
                itens.map((item, indice) => {
                    const classExibirConteudo = indice === indiceAtivo ? '' : 'hidden'
                    const classExibirIcone = indice === indiceAtivo ? 'mdi:triangle-down-outline' : 'mdi:triangle-outline'
                    return (
                        <div className="border rounded py-1 px-2 my-1" key={indice}>
                            <div onClick={() => itemClicado(indice)} className="flex items-center gap-1">
                                <Icon icon={classExibirIcone} />
                                <h4 className="ml-2 font-bold">{item.titulo}</h4>
                            </div>
                            <div className="p-1">
                                <p className={classExibirConteudo}>{item.conteudo}</p>
                            </div>
                        </div>
                    )
                }
                )
            }
        </div>
    )
}

export default Accordion