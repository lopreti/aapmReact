import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { alertErro, alertSucesso, alertAviso } from "../../../components/Alerts/Alerts.jsx";
import styles from "./EsqueciSenha.module.css";

const API_CRIAR_CODIGO = "http://localhost:3000/verificacao";

export default function EsqueciSenha() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [carregando, setCarregando] = useState(false);

    async function enviarCodigo(e) {
        e.preventDefault();

        if (!email) {
            alertAviso("Por favor, insira seu email.");
            return;
        }

        try {
            setCarregando(true); // desabilita o botão

            const resposta = await fetch(API_CRIAR_CODIGO, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const dados = await resposta.json();

            if (!resposta.ok) {
                alertErro(dados.erro || "Erro ao enviar código de verificação.");
                return;
            }

            alertSucesso("Código enviado para o email!");
            localStorage.setItem("email_recuperacao", email);
            navigate("/senha/codigo");

        } catch (erro) {
            alertErro(`Erro: ${erro.message}`);
        } finally {
            setCarregando(false); // reabilita o botão
        }
    }

    return (
        <main className={styles.principalBox}>
            <section className={styles.entreAqui}>
                <h2>Digite o seu email</h2>
            </section>

            <form className={styles.emailInput} onSubmit={enviarCodigo}>
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

                <button
                    type="submit"
                    className={`btn btn-primary ${styles.btnPrimary}`}
                    disabled={carregando}
                >
                    {carregando ? "Enviando..." : "Enviar"}
                </button>
            </form>

            <button className={styles.voltar} onClick={() => navigate(-1)}>
                ← Voltar
            </button>
        </main>
    );
}

// No react usa useState:
// cria uma variável que o React "observa"
// const [carregando, setCarregando] = useState(false);
// carregando é o valor atual (true ou false)
// setCarregando é a função que muda o valor
// useState(false) começa como false