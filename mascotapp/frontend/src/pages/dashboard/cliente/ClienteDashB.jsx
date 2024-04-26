import DetailUserReserva from "../DetailUserReserva";
//import { userReserva } from "../UsuariosEjemplo";
import { getReservas, getReservaById } from "../../../services/serviceReserva";
import { useEffect, useState } from "react";
import moment from 'moment';

{/*CuidadorDashB responsive*/}
export const ClienteDashB = () => {
  const [data, setData] = useState([]);
  const [dataNombre, setNombre] = useState(null);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reservas = await getReservas();
        //console.log(reservas);
        const reservaUsuario = reservas.find(reserva => reserva.usuarioId?._id === userId);
        //console.log(reservaUsuario);

        if (reservaUsuario) {
          const reservaData = await getReservaById(reservaUsuario._id);
          setNombre(reservaUsuario.cuidadorId.nombre + " " + reservaUsuario.cuidadorId.apellido);
          setData([reservaData]);
        } else {
          console.log("No se encontró ninguna reserva para este usuario.");
        }
      } catch (error) {
        console.error("Error al obtener las reservas:", error);
      }
    };

    fetchData();
  }, []);

  if (data.length === 0) {
    return (
      <div className="h-[100vh] text-[5vmin] text-center flex justify-center items-center">
        <p>No hay reservas disponibles.</p>
      </div>
    );
  }

  return (
    <section className="h-[100vh] flex flex-col justify-center mt-[5rem] w-[100%] p-5  text-[3vmin] sm:text-[10px] md:text-[10px] lg:text-[15px]">
      <div className="lg:max-w-7xl mx-auto w-full gap-5">
        <h2 className="h2 my-5 text-[8vmin] sm:text-[1.5rem] md:text-[2.5rem]">Historial de reservas</h2>
        <div className="mb-5 flex justify-around bg-slate-200 py-5 px-7 gap-5 rounded-md overflow-y-scroll">
          <p>Imagen</p>
          <p>Cuidador</p>
          <span>Precio</span>
          <p>Servicio</p>
          <p>Fecha</p>
          <p>Estado</p>
        </div>
        <div className="flex flex-col mx-auto lg:max-w-7xl bg-slate-200 p-10 rounded-xl gap-4 h-[65vh] overflow-hidden overflow-y-scroll">
          {data.map(({ usuarioId, precioDelServicio, servicio, fechaDelServicio, estado }, index) => (
            <div key={index}>
              {usuarioId && (
                <DetailUserReserva
                  id={usuarioId._id}
                  nombre={dataNombre}
                  imagen="https://cdn-icons-png.flaticon.com/512/6326/6326055.png"
                  precio={precioDelServicio}
                  servicio={servicio}
                  fecha={moment(fechaDelServicio).format('YYYY-MM-DD')}
                  estado={estado}
                  btnStatus={estado}
                  rolUsuario={"cliente"}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
