import React, { Component } from 'react';
import api from '../../services/api';
import M from "materialize-css";
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
        user: '',
        following: '',
        followers: '',
        public_repos: ''
    }

    // Quando é uma funlão nativa utilizamos esta sintaxe
    componentDidMount(){
        this.loadGithub()
        M.AutoInit();
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
            html_url: response.data.html_url,
            public_repos: response.data.public_repos,
            followers: response.data.followers,
            following: response.data.following
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
            html_url: res.data.html_url,
            public_repos: res.data.public_repos,
            followers: res.data.followers,
            following: res.data.following
        })
    }

    render(){
        return (
            <div>
                <div className="container">
                    <div className="row corpo">
                        <div className="col l12 s12">
                            <h1>Github: {this.state.name}</h1>
                            <ul>
                                <li>Login: {this.state.login}</li>
                                <li>Empresa: {this.state.company}</li>
                                <li>Quantidade de repositórios: {this.state.public_repos}</li>
                                <li>Seguidores: {this.state.followers}</li>
                                <li>Segue: {this.state.following}</li>
                                <li>Saiba mais: {this.state.html_url}</li>
                            </ul>
                        </div>
                        <div className="col l4 s12">
                            <img src={this.state.avatar_url}></img>
                        </div>
                    </div>
                    <input type="text" placeholder="Buscar usuário" className="inputUser row"></input>
                    <br></br>
                    <button onClick={this.findUser} className="waves-effect waves-light btn botao">Buscar</button>
                </div>
            </div>
        )
    }
}