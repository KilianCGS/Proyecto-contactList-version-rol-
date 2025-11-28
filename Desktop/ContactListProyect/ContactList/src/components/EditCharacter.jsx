import { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CharactersContext } from "../context/CharactersContext";
import "./CharacterList.css"; 




export default function EditCharacter() {
  const { id } = useParams(); 
  
  const { characters, updateCharacter } = useContext(CharactersContext); 

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    race: "",
    class: "",
    image: ""
  });


  useEffect(() => {
    const character = characters.find(c => c.id === Number(id)); 

    if (character) setFormData(character); 

  }, [id, characters]);




  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,      
      [name]: value  
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCharacter(Number(id), formData); 


    
   
    navigate("/characters"); 
  };

  return (
    <div className="character-list-container">
      <h1>Editar Personaje</h1>

     
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="race"
          placeholder="Raza"
          value={formData.race}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="class"
          placeholder="Clase"
          value={formData.class}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="URL de la imagen"
          value={formData.image}
          onChange={handleChange}
        />
        <button type="submit">Guardar Cambios</button>
        <button
          type="button" 
          onClick={() => navigate("/characters")}
          className="create-btn"
          style={{ marginTop: "10px" }}
        >
          Volver a la lista de personajes
        </button>
      </form>
    </div>
  );
}
