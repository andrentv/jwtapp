import "./App.css";
import { useContext } from "react";
import { Route, Routes, Link } from "react-router-dom";
import * as C from "./App.styles";
import { Home } from "./pages/Home";
import { Private } from "./pages/Private";
import { RequireAuth } from "./contexts/Auth/RequireAuth";
import { AuthContext } from "./contexts/Auth/AuthContext";
// import { useNavigate } from "react-router-dom";


function App() {
  const auth = useContext(AuthContext);
  // const navigate = useNavigate();
  
  
  const handleLogout = async () => {
  	await auth.signout();
  	//navigate('/');
  	window.location.href = window.location.href; 	
  	//localStorage.clear();
  }
 
//<hr />

  return (
    <div className="App">
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      
      
        <nav>
          <Link to="/">Home</Link> 
          <Link to="/private">Login</Link>
          {auth.user && <button onClick={handleLogout}>Sair</button>}
        </nav>
      </C.Header>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/private"
          element={
            <RequireAuth>
              <Private />
            </RequireAuth>
          }
        />
      </Routes>
      </C.Container>
    </div>
  );
}

export default App;
