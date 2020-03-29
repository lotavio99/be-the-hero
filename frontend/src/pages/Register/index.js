import React, { useState } from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import {Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function HandleRegister(e){
        e.preventDefault();
        const data = 
        {
            name, 
            email, 
            whatsapp, 
            city, 
            uf
        };
        
        try{
            const response = await api.post('ongs', data);
            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/');
        }catch(err){
            alert('Erro no cadastro, tente novamente.');
        }
    }
    return(
        <div className="register-container">
            <div className="content">
                <section className="">
                    <img src={logoImg} alt="Be The Hero" />
                    <h1>Faça seu cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link className="back-link" to="/register">
                        <FiArrowLeft size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </section>
                <form onSubmit={HandleRegister}>
                    <input 
                        placeholder="Nome da ONG" 
                        value={name}
                        onChange={e=> setName(e.target.value)}
                    />
                    <input 
                        type="email" 
                        placeholder="E-Mail" 
                        value={email}
                        onChange={e=> setEmail(e.target.value)}
                    />
                    <input 
                        placeholder="whatsapp" 
                        value={whatsapp}
                        onChange={e=> setWhatsapp(e.target.value)}
                    />
                    <div className="input-group">
                        <input 
                            placeholder="cidade" 
                            value={city}
                            onChange={e=> setCity(e.target.value)}
                        />
                        <input 
                            placeholder="uf" 
                            width="80" 
                            value={uf}
                            onChange={e=> setUf(e.target.value)}
                        />
                    </div>
                    <button className="button" type="submit">
                        Cadastrar
                    </button>
                </form>
                
            </div>
        </div>
    );
}