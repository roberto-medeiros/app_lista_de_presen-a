import React, { useState, useEffect } from "react";


import "./styles.css";
import { Card } from "../../components/Card";

export function Home() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({name:'', avatar:''});

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };
   //prevState é para manter o valor anterior e o new, para adiconar um novo valor
    setStudents((prevState) => [...prevState, newStudent]);
  }

  // useEffect(()=>{
  //   //Corpo do useEffect
  //   //Consumindo API do Github
  //   fetch('https://api.github.com/users/roberto-medeiros')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUser({
  //         name: data.name,
  //         avatar: data.avatar_url,
  //       });
  //     });
  //   console.log('O Use effect foi chamado')
  // }, []);

  //Exemplo como lidar com requisições assíncronas utilizando o Hook useEffect
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.github.com/users/roberto-medeiros");
      const data = await response.json();
      console.log("DADOS =>", data);

      setUser({
        name: data.name,
        avatar: data.avatar_url,
      });
    }

    fetchData();
  }, []);


  return (
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de perfil" />
        </div>
      </header>

      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>
      {/* Importantdo componente Card */}
      {students.map((student) => (
        <Card 
        key={student.time} 
        name={student.name} 
        time={student.time} 
        />
      ))}
    </div>
  );
}