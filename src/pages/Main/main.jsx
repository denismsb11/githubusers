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
        html_url: '',
        user: ''
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

    findUser = async () => {
        let user = document.querySelector('.inputUser').value
        const res = await api.get('/'+user)
        console.log(res.data)
        this.setState({
            name: res.data.name,
            login: res.data.login,
            avatar_url: res.data.avatar_url,
            company: res.data.company,
            html_url: res.data.html_url
        })
    }

    render(){
        return (
            <div>
                <div className="container corpo">
                    <div className="row">
                        <div className="col l6 s6">
                            <h1>Github: {this.state.name}</h1>
                            <ul>
                                <li>Login: {this.state.login}</li>
                                <li>Empresa: {this.state.company}</li>
                                <li>Saiba mais: {this.state.html_url}</li>
                            </ul>
                            <p>Escreva o login do usuário que vc deseja analisar</p>
                            <input type="text" className="inputUser row"></input>
                            <br></br>
                            <button onClick={this.findUser} className="waves-effect waves-light btn botao">Buscar</button>
                        </div>
                        <div className="col l6 s6">
                            <img src={this.state.avatar_url}></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}