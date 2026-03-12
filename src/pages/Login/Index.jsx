import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { alertErro } from "../../components/Alerts/Alerts.jsx";
import styles from "./Login.module.css";

const API_LOGIN = "http://localhost:3000/login";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [lembrar, setLembrar] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email || !senha) {
      alertErro("Preencha todos os campos");
      return;
    }

    // remover quando tiver API, só pra testar aq
    if (email === "admin@teste.com" && senha === "123") {
      navigate("/admin/dashboard");
      return;
    }
    if (email === "aluno@teste.com" && senha === "123") {
      navigate("/usuario/tela-principal");
      return;
    }
    alertErro("Email ou senha inválidos");
    return;

    // try {
    //   const response = await fetch(API_LOGIN, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ email, senha, lembrar }),
    //   });

    //   const dado = await response.json();

    //   if (!response.ok) {
    //     alertErro(dado.erro || "Erro ao fazer login");
    //     return;
    //   }

    //   localStorage.removeItem("token");
    //   sessionStorage.removeItem("token");

    //   if (lembrar) {
    //     localStorage.setItem("token", dado.token);
    //   } else {
    //     sessionStorage.setItem("token", dado.token);
    //   }

    //   const perfil = dado.usuario.perfil;
    //   if (perfil === "aluno") {
    //     navigate("/usuario/tela-principal");
    //   } else {
    //     navigate("/admin/dashboard");
    //   }
    // } catch (error) {
    //   console.log("Erro:", error);
    //   alertErro("Erro de conexão com o servidor.");
    // }
  }

  return (
    <>
      <div className={styles.principalBox}>
        <div className={styles.entreAqui}>
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "60px" }}
          >
            person
          </span>
          <h2>Entre aqui</h2>
        </div>

        <form className={styles.formEntrada} onSubmit={handleSubmit}>
          <div className={styles.inputBox}>
            <input
              type="text"
              className="form-control"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className={`${styles.inputBox} ${styles.inputIcon}`}>
            <input
              type={mostrarSenha ? "text" : "password"}
              className="form-control"
              id="password"
              required
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <label htmlFor="password">Senha</label>
            <span
              className={mostrarSenha ? styles.iconHide : styles.icon}
              onClick={() => setMostrarSenha(!mostrarSenha)}
            />
          </div>

          <div className={styles.containerOpcoes}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "14px" }}>
              <input
                type="checkbox"
                className={styles.remember}
                checked={lembrar}
                onChange={(e) => setLembrar(e.target.checked)}
              />
              <label className="form-check-label">Lembre de mim</label>
            </div>

            <div style={{ display: "flex", alignItems: "center", fontSize: "14px" }}>
              <label
                style={{ cursor: "pointer", color: "white" }}
                onClick={() => navigate("/senha/esqueci")}
              >
                Esqueceu a senha?
              </label>
            </div>
          </div>

          <button
            type="submit"
            className={`btn btn-primary ${styles.btnPrimary}`}
          >
            Entrar
          </button>
        </form>
      </div>
    </>
  );
}