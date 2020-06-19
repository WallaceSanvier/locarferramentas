import React, {useState} from 'react';
import { Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import {Container} from './styled';




export default function NewIncident() {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [value, setValue] = useState();

    const history = useHistory();

    const userId = localStorage.getItem('userId');

    async function handleNewTool(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };

        try {
            await api.post('tools', data, {
                headers: {
                    Authorization: userId,
                }
            });

            history.push('/profile');

        } catch (err) {
            alert('Erro ao cadastrar ferramenta, tente novamente.');
        }
    }

    return (
        <>
        <Container>
        <div className="new-incident-container">
        <div className="content">
            <section>
              
              
              <h1>Cadastrar nova ferramenta</h1>
              <p>Descreva a ferramenta para que algum inquilino possa alugar esta ferramenta.</p> 

             
            </section>

            <form onSubmit={handleNewTool}>
               <input 
                    placeholder="Titulo da Ferramenta" 
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
               <textarea 
                    placeholder="Descrição" 
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
  
               <input 
                    placeholder="Valor em reais"
                    value={value}
                    onChange={e => setValue(e.target.value)} 
                />
               
               <button className="button" type="submit">Cadastrar</button>

               <Link className="back-link" to="/profile">
                 <FiArrowLeft size={16} color="#E02041"/>
                 Voltar para a tela de Ferramentas
             </Link>

            </form>

        </div>
    </div>
    </Container>
    </>
    )
}