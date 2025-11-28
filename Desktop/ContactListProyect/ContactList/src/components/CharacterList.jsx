import { useContext } from "react"; 
import { CharactersContext } from "../context/CharactersContext"; 
import { useNavigate } from "react-router-dom"; 
import "./CharacterList.css"; 



export default function CharacterList() {

  const { characters, deleteCharacter } = useContext(CharactersContext); 
 


  const navigate = useNavigate(); 



  return (
    <div className="character-list-container">
      
      <h1>Lista de Personajes</h1>

    
      <button 
        className="create-btn" 
        onClick={() => navigate("/create")}
      >
        Crear Nuevo
      </button>

      
      {characters.length === 0 && <p>No hay personajes aún.</p>}

     
      <div className="characters-grid">
      
        {characters.map(character => (
          <div className="character-card" key={character.id}>
            
         
            <img
              src={character.image || "https://via.placeholder.com/150"} 
              alt={character.name} 
              className="character-image"
            />

           
            <div className="character-info">
              <h2>{character.name}</h2>
              <p><strong>Raza:</strong> {character.race}</p>
              <p><strong>Clase:</strong> {character.class}</p>
            </div>

        
            <div className="character-actions">
            
              <button onClick={() => navigate(`/edit/${character.id}`)}>
                Editar
              </button>

             
              <button onClick={() => deleteCharacter(character.id)}>
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
