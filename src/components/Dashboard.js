// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    const fetchConsultas = async () => {
      try {
        const response = await axios.get('http://localhost:5000/consultas');
        setConsultas(response.data);
      } catch (error) {
        console.error('Erro ao carregar consultas', error);
      }
    };

    fetchConsultas();
  }, []);

  return (
    <div>
      <h2>Consultas Médicas</h2>
      {consultas.length > 0 ? (
        <ul>
          {consultas.map((consulta) => (
            <li key={consulta.id}>
              <p>{consulta.data} - {consulta.medico}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Carregando consultas...</p>
      )}
    </div>
  );
};

export default Dashboard;
