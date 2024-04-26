import React from "react";
import DetalleNosotros from "../components/nosotros/DetalleNosotros";

import ronald from "../../public/nosotros/ronald.png";
import edward from "../../public/nosotros/edward.jpg";
import yazuline from "../../public/nosotros/yazuline.jpg";
import cristal from "../../public/nosotros/cristal.jpg";
import mariestela from "../../public/nosotros/mariestela.jpg";
import naiara from "../../public/nosotros/naiara.jpg";
import isamar from "../../public/nosotros/isamar.jpg";

const Nosotros = () => {
  return (
    <section className="bg-gray-100 h-[100%]">
      <div className="py-[10rem] flex flex-wrap gap-10 max-w-7xl mx-auto justify-center">
        <DetalleNosotros
          nombre={"Edward Vasallo"}
          usuario={"plpoquito"}
          imagen={edward}
          rol={"Full Stack"}
          social1={"https://www.linkedin.com/in/edward-vasallo-83a7a6159/"}
          social2={"https://github.com/EdwardVE"}
        />
        <DetalleNosotros
          nombre={"Yazuline Viveros"}
          usuario={""}
          imagen={yazuline}
          rol={"Full Stack"}
          social1={"https://www.linkedin.com/in/yazuline-viveros-bedoya/"}
          social2={""}
        />
        <DetalleNosotros
          nombre={"Ronald Santamaria"}
          usuario={"ronaldsp7"}
          imagen={ronald}
          rol={"Front-end"}
          social1={"https://www.linkedin.com/in/ronald-santamaria-pizarro"}
          social2={"https://github.com/RonaldS06"}
          social3={"https://www.behance.net/ronaldspizarro"}
        />

        <DetalleNosotros
          nombre={"Cristal Tavárez"}
          usuario={"cristaltavarez_"}
          imagen={cristal}
          rol={"Front-end"}
          social1={
            "https://www.linkedin.com/in/cristal-melissa-tav%C3%A1rez-novas-793b042a6/"
          }
          social2={"https://github.com/CristalpyC"}
        />
        <DetalleNosotros
          nombre={"Mariestela G"}
          usuario={""}
          imagen={mariestela}
          rol={"Ux / Ui"}
          social1={"https://www.linkedin.com/in/mariestelagalazurita/"}
          social2={""}
        />
        <DetalleNosotros
          nombre={"Naiara Aranda"}
          usuario={""}
          imagen={naiara}
          rol={"Ux / Ui"}
          social1={"https://www.linkedin.com/in/naiara-aranda-149b05183/"}
          social3={"https://www.behance.net/naiaraaranda"}
        />
        <DetalleNosotros
          nombre={"Isamar Forsay"}
          usuario={""}
          imagen={isamar}
          rol={"Tester QA"}
          social1={"https://www.linkedin.com/in/isamar-forsay-359b7a295/"}
          social2={""}
        />
      </div>
    </section>
  );
};

export default Nosotros;
