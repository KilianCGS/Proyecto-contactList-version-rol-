import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { CharactersProvider } from "./context/CharactersContext";

import CharacterList from "./components/CharacterList";
import CreateCharacter from "./components/CreateCharacter";
import EditCharacter from "./components/EditCharacter";

function App() {
  return (
    <CharactersProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/characters" />} />
          <Route path="/characters" element={<CharacterList />} />
          <Route path="/create" element={<CreateCharacter />} />
          <Route path="/edit/:id" element={<EditCharacter />} />
        </Routes>
      </Router>
    </CharactersProvider>
  );
}

export default App;
