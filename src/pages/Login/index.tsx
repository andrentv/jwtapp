import { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Container, Input, Button, Body, Span } from "./styles";

export const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    if (email && password) {
      const isLogged = await auth.signin(email, password);
      if (isLogged) {
        navigate("/private");
        console.log("logou");
      } else {
        alert("Não está logado!");
      }
    }
  };

  //	<h2>Pagina de Login</h2>

  return (
    <Container>
      <Body>
      	<Span>Digite usuario ou e-mail</Span>
        <Input
          type="text"
          value={email}
          onChange={handleEmailInput}
          placeholder=""
        />
        <Span>Digite sua Senha</Span>
        <Input
        
          type="password"
          value={password}
          onChange={handlePasswordInput}
          placeholder=""
        />
        <Button onClick={handleLogin}>Entrar</Button>
      </Body>
    </Container>
  );
};
