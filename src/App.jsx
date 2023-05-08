import React, { Component } from 'react'
import { Icon } from '@iconify/react';
import Busca from "./components/Busca"
import { createClient } from 'pexels'

export default class App extends Component {

  state = {
    pics: []
  }

  pexelsClient = null

  componentDidMount() {
    this.pexelsClient = createClient("xxxx")
  }

  onBuscaRealizada = (termo) => {
    console.log('App recebeu valor: ', termo)
    this.pexelsClient.photos.search({
      query: termo
    }).then((pics) => {
      console.log(pics)
      this.setState({ pics: pics.photos })
    })
  }

  render() {
    return (
      <div className="w-1/3 border p-2">
        <h1>Exibir uma lista de...</h1>
        <Busca onBuscaRealizada={this.onBuscaRealizada} />
        <div className="grid grid-cols-2 items-center">
          {
            this.state.pics.map((pic, key) => (
              <div key={key}>
                <img src={pic.src.small} />
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}
