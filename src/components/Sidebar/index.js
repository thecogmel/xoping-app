import React from 'react';

import './styles.css';
import logo from '../../assets/Logo_Xoping.png'
import list from '../../assets/list.png'
import historic from '../../assets/XMLID_1031_.png'
import config from '../../assets/technical-support.png'
import logout from '../../assets/logout.png'



const Sidebar = () =>

    <div className="Sidebar">
        <img id="Logo" src={logo} alt="Xoping Logo"></img>

        <div className="lista">
            <p><img className="a" src={list} alt="lista hamburguer"></img>Lista de compra</p>
        </div>
        
        
        
        <div className="historico">
            <img className="b"src={historic} alt="Xoping Logo"></img>
            Histórico
        </div>
        <div className="config">
            <img className="c" src={config} alt="Xoping Logo"></img>
            Configurações
        </div>
        <div className="exit">
            <img className="d" src={logout} alt="Xoping Logo"></img>
            Sair
        </div>

    </div>;



export default Sidebar;