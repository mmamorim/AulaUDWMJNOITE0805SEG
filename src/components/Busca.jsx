import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react';
import axios from 'axios'

const Busca = () => {

    const [termoBusca, setTermoBusca] = useState('React')
    const [resultados, setResultados] = useState([])

    const fazBusca = async () => {
        console.log('fazBusca')

        let obj = await axios.get('https://en.wikipedia.org/w/api.php', {
            params: {
                action: 'query',
                list: 'search',
                format: 'json',
                // instruindo o navegador a permitir
                // conteúdo de qualque origem
                origin: '*',
                srsearch: termoBusca
            }
        })
        console.log('terminei', obj.data.query.search);
        setResultados(obj.data.query.search)
    }

    useEffect(() => {
        console.log('montei o componente')
        const timeoutID = setTimeout(() => {
            //execução condicional de novo
            if (termoBusca)
                fazBusca()
        }, 1000)
        return () => {
            clearTimeout(timeoutID)
        }
    }, [termoBusca])

    return (
        <div>
            <div>
                {termoBusca}
            </div>
            <div className="flex items-center">
                <div>
                    <Icon icon="mdi:search" />
                </div>
                <input onChange={(e) => setTermoBusca(e.target.value)} className="border rounded border-black" type="text" />
            </div>
            <div>
                {
                    resultados.map((resultado) => (
                        <div
                            key={resultado.pageid}
                            // margem e borda
                            className="my-2 border">
                            <div
                                // borda, padding e ajuste textual
                                className="border p-2 text-center font-bold">
                                {resultado.title}
                            </div>
                            {/* padding */}
                            <div className="p-2" dangerouslySetInnerHTML={{ __html: resultado.snippet }}>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Busca
