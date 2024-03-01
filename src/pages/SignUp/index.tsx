import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { FormEvent } from "react";
import { Link } from "react-router-dom";
export default function SignUp() {
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    navigate("/dashboard");
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h2>Cadastre-se</h2>
        <input type="text" placeholder="Insira seu nome" />
        <input type="text" placeholder="Insira seu e-mail" />
        <input type="text" placeholder="Insira sua senha" />
        <button>Sign Up</button>

        <Link to="/">Já tem cadastro? Clique aqui!</Link>
      </form>
    </div>
  );
}
