import React, { Component } from 'react'
import { Icon } from '@iconify/react';

export default class Busca extends Component {

    state = {
        termoDeBusca: ''
    }

    onTermoAlterado = (event) => {
        console.log(event.target.value)
        this.setState({ termoDeBusca: event.target.value })
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        console.log('submit do form');
        this.props.onBuscaRealizada(this.state.termoDeBusca)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="flex items-center">
                        <div>
                            <Icon icon="mdi:search" />
                        </div>
                        <input onChange={this.onTermoAlterado} placeholder={this.props.dica} className="border rounded border-black" type="text" />
                    </div>
                    <div className="flex justify-center mt-1">
                        <button className="w-40 border px-1 rounded bg-blue-500 cursor-pointer text-white">
                            OK
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

Busca.defaultProps = {
    dica: 'Digite algo que deseja ver...'
}