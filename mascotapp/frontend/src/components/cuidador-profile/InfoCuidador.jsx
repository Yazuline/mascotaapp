import { useContext } from "react";
import ModalButton from "./ModalButton";
import { AuthContext } from "../../auth";
import Button from "../button/Button";
import { Link } from "react-router-dom";

const InfoCuidador = ({
  _id,
  nombre,
  apellido,
  urlfoto,
  telefono,
  email,
  barrio,
  sobreti,
  servicio,
  precioservicio,
  usuarioAutenticado,
  isDec,
}) => {
  const { user } = useContext(AuthContext);

  const isSrcEmpty = (src) => {
    return !src || src.trim() === "";
  };

  const imageUser = isSrcEmpty(urlfoto);
  const imageDefault = `https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`;

  /*  const isTextEmpty = () => {
    console.log("Valor de sobreti:", user.sobreti);
    return user.sobreti === "";
  }; */

  return (
    <div className="px-5 sm:px-0 flex flex-col md:flex md:flex-row gap-4 lg:gap-10">
      <figure className="overflow-hidden">
        <img
          src={imageUser ? imageDefault : urlfoto}
          alt={`imagen de ${nombre}`}
          className="mx-auto w-[100%] h-[250px] sm:w-[380px] sm:h-[350px] lg:w-[270px] lg:h-[330px] object-cover rounded-md "
        />
      </figure>
      <div className="flex flex-col justify-between gap-5 lg:gap-5">
        <div className="flex flex-col gap-4">
          <h3 className="h3 font-bold">
            {nombre} {apellido}
          </h3>
          <div className="info-correo">
            <p className="font-bold text-sm sm:text-[1rem]">
              Teléfono: <span className="font-normal">{telefono}</span>
            </p>
            <p className="font-bold text-sm sm:text-[1rem]">
              Correo: <span className="font-normal">{email}</span>{" "}
            </p>
            <p className="font-bold text-sm sm:text-[1rem]">
              Precio: <span className="font-normal">{precioservicio}</span>{" "}
            </p>
          </div>
          <p className="text-sm">
            Hace servicios de <span className="font-semibold">{servicio}</span>{" "}
            desde el 2023 en <span className="font-semibold">{barrio}</span>
          </p>
        </div>
        <div
          className={
            isDec
              ? "flex max-w-[46rem] flex-col items-end bg-[#E5EBFB] px-5 py-3 rounded-lg gap-4"
              : "flex max-w-[46rem] flex-col items-end px-5 py-3 rounded-lg gap-4"
          }
        >
          {/* <Link to={`/nuevas-reservas/${user._id}`}>
            <span className="text-gray-600 hover:text-gray-900 text-sm">
              Historial de reservas
            </span>
          </Link> */}
          {/* <span className="text-gray-500 text-center px-20 py-2 lg:px-40 lg:py-5">
            Falta ingresar descripción
          </span> */}
          <p className="text-sm lg:text-[1rem]">{sobreti}</p>
          <ModalButton
            _id={_id}
            servicio={servicio}
            precioservicio={precioservicio}
            nombre={nombre}
            apellido={apellido}
            urlfoto={urlfoto}
            telefono={telefono}
            email={email}
            barrio={barrio}
            sobreti={sobreti}
            usuarioAutenticado={usuarioAutenticado}
          />
        </div>
      </div>
    </div>
  );
};

export default InfoCuidador;
