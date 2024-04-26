import { Routes, Route, Navigate } from "react-router-dom";
import Inicio from "../pages/Inicio";
import RegistroCuidador from "../pages/RegistroCuidador";
import { RegistroCliente } from "../pages/RegistroCliente";
import Roles from "../pages/Roles";
import Entrar from "../pages/Entrar";
import Contacto from "../pages/Contacto";
import CuidadorDashB from "../pages/dashboard/cuidador/CuidadorDashB";
import AdminDashB from "../pages/dashboard/admin/AdminDashB";
import PageCuidador from "../pages/PageCuidador";
import Cuidadores from "../pages/Cuidadores";
import { RegistroMascotas } from "../pages/RegistroMascotas";
import { ClientSection } from "../pages/seccion-cliente/ClientSection";
import { InfoMascota } from "../components/info-mascota/InfoMascota";
import PerfilCuidador from "../pages/PerfilCuidador";
import PublicRoute from "./PublicRoute";
import { ClienteDashB } from "../pages/dashboard/cliente/ClienteDashB";
import { ErrorNotFound } from "../components/error-404/ErrorNotFound";
import Nosotros from "../pages/Nosotros";

const MyRoutes = () => {
  const userId = localStorage.getItem("userId");
  const cuidadorId = localStorage.getItem("cuidadorId");

  return (
    <Routes>
      <Route>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/" element={<Navigate to="/inicio" />} />

        <Route path="/cuidadores" element={<Cuidadores />} />
        <Route path="/contacto" element={<Contacto />} />

        {/* Verificamos si el usuario esta logueado ya no podra ingresar a: */}
        <Route
          path="/entrar"
          element={
            <PublicRoute>
              <Entrar />
            </PublicRoute>
          }
        />
        {/*Registro*/}
        <Route
          path="/registrar-como"
          element={
            <PublicRoute>
              <Roles />
            </PublicRoute>
          }
        />
        <Route
          path="/registro-cuidador"
          element={
            <PublicRoute>
              <RegistroCuidador />
            </PublicRoute>
          }
        />
        <Route
          path="/registro-cliente"
          element={
            <PublicRoute>
              <RegistroCliente />
            </PublicRoute>
          }
        />
        {/*Esto está interfiriendo con el perfil del cliente. Tuve que comentarlo */}
        {/*<Route
          path="/registro-mascotas"
          element={
            <PublicRoute>
              <RegistroMascotas />
            </PublicRoute>
          }
        />*/}

        {/* Dashboard */}
        <Route path="nuevas-reservas/:_id" element={<CuidadorDashB />} />
        <Route path="dashboard-admin/:_id" element={<AdminDashB />} />
        {/* <Route path="/nuevas-reservas" element={<CuidadorDashB />} /> */}
        {/* <Route path="/dashboard-admin" element={<AdminDashB />} /> */}
        <Route path="/reservas/:_id" element={<ClienteDashB />} />
        <Route path="/nosotros" element={<Nosotros />} />

        {/* Perfil cuidador desde la vista de cliente*/}
        <Route path={`cuidador/${cuidadorId}`} element={<PageCuidador />} />
        {/* Perfil cuidador*/}
        <Route path="/perfil/:_id" element={<PerfilCuidador />} />

        {/*seccion cliente*/}
        <Route path={`/perfil-dueño/:_id`} element={<ClientSection />} />
        <Route path={`/mascota/${userId}`} element={<InfoMascota />} />

        {/*Registro mascotas*/}
        <Route path={`/registro-mascotas`} element={<RegistroMascotas />} />

        {/*En caso de que la ruta sea incorrecta */}
        <Route path="*" element={<ErrorNotFound />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
