import { useState, useContext } from "react"; 

import { CharactersContext } from "../context/CharactersContext"; 


import { useNavigate } from "react-router-dom"; 


import "./CharacterList.css"; 


export default function CreateCharacter() {
 
  const { addCharacter } = useContext(CharactersContext);

 
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    name: "",
    race: "",
    class: "",
    image: "" 
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,       
      [name]: value  
    }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    addCharacter(formData); 
    navigate("/characters"); 
  };

  return (
    <div className="character-list-container">
   
      <h1>Crear Nuevo Personaje</h1>

    
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

      
        <button type="submit">Crear Personaje</button>

        
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
