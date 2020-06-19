import React, {useState} from 'react';
import { Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import {Container} from './styled'



export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
   

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();
        
        const data = {
            name,
            email,
            whatsapp
        
        };

        try {
            const response = await api.post('users', data)

            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/');
        } catch (err) {
            alert('Erro no cadastro, tente novamente.');
        }

   }
   
    return (
        <>
        <Container>
        <div className="register-container">
            <div className="content">
                <section>
                  
                   <div className="intro">
                  <h1>Cadastro</h1>
                  <p>Faça seu cadastro,entre para cadastrar e  alugar suas ferramentas para o nosso condominio</p> 
                  </div>
                  
                </section>

                <form onSubmit={handleRegister}>
     
                   <input 
                    placeholder="Nome do Usuário" 
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />

           
                   <input 
                   type="email" placeholder="E-mail" 
                   value={email}
                   onChange={e => setEmail(e.target.value)}
                   />

                   <input 
                   placeholder="Whatsapp" 
                   value={whatsapp}
                   onChange={e => setWhatsapp(e.target.value)}
                   />
 
               
                   <button className="button" type="submit">Cadastrar</button>
               
                   <Link className="back-link" to="/">
                     <FiArrowLeft size={16} color="#E02041"/>
                     Voltar para tela de Login
                 </Link>
                </form>

               
            </div>
        </div>
        </Container>

        </>
    )
}