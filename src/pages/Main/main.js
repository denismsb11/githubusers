import React, { Component } from 'react';
import api from '../../services/api';
import './main.css'

// React possui métodos de ciclod de vida como: componentDidMount() -> Usado asism que o componente é criado
// O método render rica escutando a variável state esperando que ela altere para que ele atualize.
// Não declaramos variáveis no React js apenas o state.

export default class Main extends Component {
    state = {
        name: '',
        login: '',
        avatar_url: '',
        company: '',
        html_url: ''
    }

    // Quando é uma funlão nativa utilizamos esta sintaxe
    componentDidMount(){
        this.loadGithub()
    }

    // Quando é uma função criada pelo desenvolver utilizamos essa sintaxe
    loadGithub = async () => {
        const response = await api.get('/denismsb11')
        console.log(response.data)
        this.setState({
            name: response.data.name,
            login: response.data.login,
            avatar_url: response.data.avatar_url,
            company: response.data.company,
            html_url: response.data.html_url
        })
    }

    render(){
        return (
            <div>
                <h1>Github {this.state.name}</h1>
                <ul>
                    <li>{this.state.login}</li>
                    <li>{this.state.company}</li>
                    <li><img src={this.state.avatar_url}></img></li>
                    <li>{this.state.html_url}</li>
                </ul>
                <label>Escreva o login do usuário que vc deseja analisar</label>
                <input type="text"></input>
            </div>
        )
    }
}