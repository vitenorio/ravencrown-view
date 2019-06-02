import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../../css/Navbar.css'

class Navbar extends React.Component {

    constructor(){
        super();
        this.state = {
            display: ''
        }
    }

    componentDidMount(){
        let display = this.state.display;
        let hidden = this.state.hidden;
        const session = sessionStorage.getItem("login");

        if(session !== null){
        const prestador = JSON.parse(sessionStorage.getItem("login")).Prestador;
        const nome = JSON.parse(sessionStorage.getItem('login')).nome;
        
        document.getElementById("name").innerHTML = nome;
        
        var img = 'data:image/png;base64,' + JSON.parse(sessionStorage.getItem("login")).imagem.image;

        var rmv = document.getElementById("imgUser");
        var child = document.getElementById("logo");
        rmv.removeChild(child); 

        var imgTag = document.createElement("img");
        imgTag.src = img;

        rmv.appendChild(imgTag);

        if(prestador === true){
            display = 'block';
            document.getElementById("Cadastro").setAttribute('class', 'demo')
        }
        }  else {
            display = 'none';
        }
        this.setState({
            display: display
        });
    }

    render(){
        const estilo = {
            display: this.state.display
        }

    return (
        <Fragment>
        <div class="navbar navbar-dark navbar-expand text-white">
        <Link to="/Perfil"><div id="imgUser">
        <i id="logo" className='fas fa-user-circle text-light display-4 ml-4 mr-4' style={{ fontSize: '16pt;' }}/></div></Link>
        <h5 id='name' className="mt-3 ml-4"></h5>  
            <ul class="navbar-nav navbar-collapse justify-content-end">
                <li class="nav-item active">
                <Link to="/Catalogo" class="nav-link">Home |</Link>
                </li>
                <li class="nav-item active">
                <Link to="/MeusServicos" style={estilo} id="MeusServicos" class="nav-link">Meus Serviços |</Link>
                </li>
                <li class="nav-item active">
                <Link to="/Cadastro" id="Cadastro" class="nav-link">Cadastre-se |</Link>
                </li>
                <li class="nav-item active">
                <Link to="/CadastroDeServico" style={estilo} id="CadastroDeServiço" class="nav-link">Cadastre seus serviços |</Link>
                </li>
                <li class="nav-item active">
                <Link to="/Login" class="nav-link">Login</Link>
                </li>
            </ul>
        </div>
    </Fragment>
    );
    }
}

export default Navbar;

