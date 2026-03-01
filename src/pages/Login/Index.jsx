import { useState } from "react";
import { alertErro } from "../../components/Alerts/Alerts.jsx";
import styles from "./Login.module.css";

const API_LOGIN = "http://localhost:3000/login";

export default function Login() {
    // useState = substitui as variáveis que pegava com getElementById
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [lembrar, setLembrar] = useState(false);
    const [mostrarSenha, setMostrarSenha] = useState(false);

    // Função de submit
    async function handleSubmit(e) {
        e.preventDefault();

        if (!email || !senha) {
            alertErro("Preencha todos os campos");
            return;
        }

        try {
            const response = await fetch(API_LOGIN, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, senha, lembrar }),
            });

            const dado = await response.json();

            if (!response.ok) {
                alertErro(dado.erro || "Erro ao fazer login");
                return;
            }

            // Salva o token
            localStorage.removeItem("token");
            sessionStorage.removeItem("token");

            if (lembrar) {
                localStorage.setItem("token", dado.token);
            } else {
                sessionStorage.setItem("token", dado.token);
            }

            // Redireciona por perfil
            const perfil = dado.usuario.perfil;
            if (perfil === "aluno") {
                window.location.href = "/frontend/pages/Usuário/tela-principal/tela-principal.html";
            } else {
                window.location.href = "/frontend/pages/Admin/dashboard/dashboard.html";
            }
        } catch (error) {
            console.log("Erro:", error);
            alertErro("Erro de conexão com o servidor.");
        }
    }

    return (
        <>
            <div className={styles.principalBox}>
                <div className={styles.entreAqui}>
                    <span className="material-symbols-outlined">person</span>
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
                            onChange={(e) => setEmail(e.target.value)} // atualiza o estado a cada digitação
                        />
                        <label>Email</label>
                    </div>
 
                    { }
                    <div className={`${styles.inputBox} ${styles.inputIcon}`}>
                        <input
                            type={mostrarSenha ? "text" : "password"} // alterna tipo pelo estado
                            className="form-control"
                            id="password"
                            required
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                        <label>Senha</label>
                        <span
                            id="icon"
                            className={mostrarSenha ? styles.iconHide : styles.icon}
                            onClick={() => setMostrarSenha(!mostrarSenha)} // alterna true/false
                        />
                    </div>

                    { }
                    <div className={styles.containerOpcoes}>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className={styles.remember}
                                checked={lembrar}
                                onChange={(e) => setLembrar(e.target.checked)}
                            />
                            <label className="form-check-label">Lembre de mim</label>
                        </div>

                        <div>  {/* ✅ sem classe por enquanto */}
                            <a href="./Senha/esqueci-senha/esqueci-senha.html">
                                <p>Esqueceu a senha?</p>
                            </a>
                        </div>
                    </div>

                    <button type="submit" className={styles.btnPrimary} id="btnEntrar">
                        Entrar
                    </button>
                </form>
            </div>
        </>
    );
}