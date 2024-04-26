import React, { useContext } from "react";
import InfoCuidador from "../components/cuidador-profile/InfoCuidador";
import { usuarioCuidador } from "../data/users";
import ItemsCuidador from "../components/cuidador-profile/ItemsCuidador";
import { AuthContext } from "../auth";
import { useParams } from "react-router-dom";

//? Componente para modificar el perfil del usuario CUIDADOR
const PerfilCuidador = () => {
  const { _id } = useParams();
  //Logica para que muestre el perfil del cuidador ya logueado mediante su id
  const { user } = useContext(AuthContext);

  return (
    <section className="mt-[10rem] mb-16">
      <h2 className="max-w-sm mx-auto md:max-w-md lg:max-w-lg h3 md:h2 text-center px-2">
        Conoce al próximo cuidador de tu mascota
      </h2>
      <article className="mt-10 md:mt-[5rem] max-w-sm mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl flex flex-col gap-20">
        <div key={user._id} className="mx-auto">
          <InfoCuidador
            _id={user._id}
            nombre={user.nombre}
            apellido={user.apellido}
            urlfoto={user.urlfoto}
            telefono={user.telefono}
            email={user.email}
            barrio={user.barrio}
            sobreti={user.sobreti}
            servicio={user.servicio}
            precioservicio={user.precioservicio}
            usuarioAutenticado={user}
          />
        </div>

        <ItemsCuidador />
      </article>
    </section>
  );
};

export default PerfilCuidador;
