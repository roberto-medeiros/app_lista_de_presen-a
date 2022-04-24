import './styles.css'
import { Card } from '../../components/Card'
import { useState } from 'react'

export function Home() {
  const [studentName, setStudentName] = useState("")


  return (
    <div className="container">
     <h1>Lista de Presença</h1>
     <h3>Nome: {studentName}</h3>
     <input 
     type="text" 
     placeholder = "Digite seu nome..."
     onChange = {(e) => setStudentName(e.target.value)}
     />
     
     <button type='text'>Adicionar</button>

    {/* Importantdo componente Card */}
     <Card name="Rodrigo" time="10:55:25" />
     <Card name="João" time="11:00:10" />
     <Card name="Ana" time="12:10:33" />

    </div>
    
  )
}

