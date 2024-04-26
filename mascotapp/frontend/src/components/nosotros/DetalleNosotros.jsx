import React from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { ImLinkedin } from "react-icons/im";
import { Divider } from "@mui/material";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaBehanceSquare } from "react-icons/fa";

const DetalleNosotros = ({
  nombre,
  usuario,
  imagen,
  rol,
  social1,
  social2,
  social3,
}) => {
  return (
    <>
      <article className="max-w-[330px] rounded-2xl shadow-xl bg-white">
        <div className="flex flex-col rounded-lg">
          <div className="flex items-center justify-between py-3 px-4">
            <div className="flex items-center gap-3">
              <figure className="overflow-hidden">
                <img
                  src={imagen}
                  alt={nombre}
                  className="w-[45px] h-[45px] object-cover rounded-full"
                />
              </figure>
              <div>
                <p className="text-black font-bold leading-4">{nombre}</p>
                {usuario ? (
                  <a
                    href={`https://www.instagram.com/${usuario}/`}
                    target="_blanck"
                    className="text-gray-700 text-sm"
                  >
                    @{usuario}
                  </a>
                ) : (
                  <span className="text-sm">
                    @{nombre.toLowerCase().replace(/\s/g, "")}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div>
            <figure className="overflow-hidden">
              <img
                src={imagen}
                alt={nombre}
                className="w-[330px] h-[320px] object-cover"
              />
            </figure>
          </div>
          <div className="py-2">
            <h2 className="text-center font-bold text-lg">{rol}</h2>
          </div>
          <Divider />
          <div className="py-4">
            <div className="flex justify-evenly">
              <Link
                to={social1}
                target="_blanck"
                className="flex items-center gap-2 text-gray-700 duration-300 hover:text-color-3 hover:font-medium"
              >
                <ImLinkedin />
                <span className="text-sm">Linkedin</span>
              </Link>
              {social2 && (
                <Link
                  to={social2}
                  target="_blanck"
                  className="flex items-center gap-2 text-gray-700 duration-300 hover:text-color-3 hover:font-medium"
                >
                  <BsGithub />
                  <span className="text-sm">Github</span>
                </Link>
              )}

              {social3 && (
                <Link
                  to={social3}
                  target="_blanck"
                  className="flex items-center gap-2 text-gray-700 duration-300 hover:text-color-3 hover:font-medium"
                >
                  <FaBehanceSquare size={"19px"} />
                  <span className="text-sm">Behance</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default DetalleNosotros;
