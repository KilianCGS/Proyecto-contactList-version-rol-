import { createContext, useState } from "react";

export const CharactersContext = createContext();

export function CharactersProvider({ children }) {
  const [characters, setCharacters] = useState([]);

  const addCharacter = (newCharacter) => {
    const id = Date.now() + Math.floor(Math.random() * 1000); 

    const characterToAdd = {
      id,
      name: newCharacter.name,
      race: newCharacter.race,
      class: newCharacter.class,
      image: newCharacter.image
    };

    setCharacters(prev => [...prev, characterToAdd]);
  };

  const updateCharacter = (id, updatedCharacter) => {
    setCharacters(characterEdited =>
      characterEdited.map(character => {
        
       
        if (character.id !== id) return character;

      
        return {
          ...character,          
          ...updatedCharacter   
        };
      })
    );
  };

  const deleteCharacter = (id) => {
    setCharacters(characterRemoved =>
      characterRemoved.filter(character => character.id !== id)
    );
  };


  return (
    <CharactersContext.Provider value={{
      characters,
      addCharacter,
      updateCharacter,
      deleteCharacter
    }}>
      {children}
    </CharactersContext.Provider>
  );
}
