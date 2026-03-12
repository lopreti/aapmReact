import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Index.jsx";
import Dashboard from "../pages/Admin/Dashboard/Dashboard.jsx";
import AcessoNegado from "../pages/AcessoNegado/AcessoNegado.jsx";
import EsqueciSenha from "../pages/Senha/EsqueciSenha/EsqueciSenha.jsx";
import RedefinirSenha from "../pages/Senha/RedefinirSenha/RedefinirSenha.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="admin/dashboard" element={<Dashboard />} />
      <Route path="/acesso-negado" element={<AcessoNegado />} />
      <Route path="/senha/esqueci" element={<EsqueciSenha />} />
      <Route path="/senha/redefinir" element={<RedefinirSenha />} />
    </Routes>
  );
}
