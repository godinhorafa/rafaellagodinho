import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const handleDownloadPDF = () => {
  const link = document.createElement("a");
  link.href = "/curriculo_rafaellagodinho_2024.pdf";
  link.download = "Rafaella_Godinho_Curriculo.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Experience = () => {
  return (
    <div className="py-20 w-full" id="experience">
      <h1 className="heading">
        <span className="text-purple">Experiência</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10 mb-4">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="mt-2">
                      {paragraph}
                    </p>
                  ))}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
      <div className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl mt-14">
        Para mais detalhes, você pode baixar meu currículo ao clicar{" "}
        <span
          className="text-purple cursor-pointer"
          onClick={handleDownloadPDF}
        >
          aqui
        </span>
        .
      </div>
    </div>
  );
};

export default Experience;
