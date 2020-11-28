import React from 'react';

import logo from '../../assets/Logo_Xoping.png'
import list from '../../assets/list.png'
import historic from '../../assets/XMLID_1031_.png'
import config from '../../assets/technical-support.png'
import logout from '../../assets/logout.png'

import './styles.css'


const Sidebar = () =>

    <div className="Sidebar">
        <div id="Logo" >
            <img src={logo} alt="Xoping Logo"></img>
        </div>
        <div className="sidebar-block">
            <div className="list-block">
                <img className="a" src={list} alt="lista hamburguer"></img>
                Lista de compra
            </div>

            <div className="list-block">
                <img className="b" src={historic} alt="Xoping Logo"></img>
            Histórico
            </div>
            <div className="list-block">
                <img className="c" src={config} alt="Xoping Logo"></img>
            Configurações
            </div>
            <div className="list-footer">
                <img className="d" src={logout} alt="Xoping Logo"></img>
            Sair
            </div>
        </div>

    </div>
export default Sidebar;