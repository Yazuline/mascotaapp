import { useEffect, useState } from "react";
import { getReservas } from "../../../../services/serviceReserva";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const ReporteItem = () => {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const fetchReservas = async () => {
      try {
        const reservasData = await getReservas();
        setReservas(reservasData);
      } catch (error) {
        console.error("Error al obtener las reservas:", error);
      }
    };

    fetchReservas();
  }, []);

  // Calcular estadísticas y reportes
  const calcularEstadisticas = () => {
    const estadisticas = {
      totalReservas: reservas.length,
      totalClientes: [...new Set(reservas.map((reserva) => reserva.usuarioId))].length,
      totalCuidadores: [...new Set(reservas.map((reserva) => reserva.cuidadorId))].length,
      totalIngresos: reservas.reduce((total, reserva) => total + reserva.precioDelServicio, 0),
      serviciosSolicitados: [...new Set(reservas.map((reserva) => reserva.servicio))],
      estadoReservas: {
        pendientes: reservas.filter((reserva) => reserva.estado === "Pendiente").length,
        confirmadas: reservas.filter((reserva) => reserva.estado === "Confirmado").length,
        canceladas: reservas.filter((reserva) => reserva.estado === "Cancelado").length,
        completadas: reservas.filter((reserva) => reserva.estado === "Completado").length,
      },
    };
    return estadisticas;
  };

  const estadisticas = calcularEstadisticas();

  const dataServicios = estadisticas.serviciosSolicitados.map((servicio) => ({
    name: servicio,
    cantidad: reservas.filter((reserva) => reserva.servicio === servicio).length,
  }));

  const COLORS = ["#4b8dc6", "#0045c4", "#aeb8f4", "#4268ff"];

  const dataBarras = [
    { name: "Reservas", cantidad: estadisticas.totalReservas },
    { name: "Clientes", cantidad: estadisticas.totalClientes },
    { name: "Cuidadores", cantidad: estadisticas.totalCuidadores },
  ];

  return (
    <div>
      <h3 className="h2 text-[5vmin] sm:text-[2rem] md:text-[2rem lg:text-[2rem] text-center mb-5 bg-[#273176] p-2 text-[#ffff]">Estadísticas de Reservas</h3>
      <p className="text-center mb-[2rem]">Total de Ingresos: <span className="text-[#273176] font-bold">${estadisticas.totalIngresos}</span></p>
      <div className="flex justify-center items-center flex-col lg:flex-row">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={dataBarras}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="cantidad" fill="#8493d2" name="Cantidad" />
        </BarChart>
      </ResponsiveContainer>

      <h3>Reportes de Servicios</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={dataServicios}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="cantidad" fill="#7d7ab3" name="Cantidad" />
        </BarChart>
      </ResponsiveContainer>

      <h3>Reportes de Estado de Reservas</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={Object.keys(estadisticas.estadoReservas).map((key) => ({
              name: key,
              value: estadisticas.estadoReservas[key],
            }))}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {Object.keys(estadisticas.estadoReservas).map((key, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ReporteItem;
