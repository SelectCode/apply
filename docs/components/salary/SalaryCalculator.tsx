import exp from "constants";
import { useMemo, useState } from "react";

export default function SalaryCalculator() {
  const [hours, setHours] = useState(10);
  const [experience, setExperience] = useState(1);
  const [knowledge, setKnowledge] = useState(1);
  const [responsibility, setResponsibility] = useState(1);

  const salary = useMemo(() => {
    return Math.round(
      12 + hours / 4 + experience + knowledge + Math.pow(1.4, responsibility)
    );
  }, [hours, experience, knowledge, responsibility]);

  const monthlySalary = useMemo(() => {
    return (salary * hours * 13) / 3;
  }, [salary, hours]);

  return (
    <div className="">
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl font-black">Salary Calculator</h1>
        <div className="flex flex-col items-end font-bold text-lg">
          <span className="text-success">12€</span>
          <span className="text-md font-light text-primary-content">
            (base)
          </span>
        </div>
      </div>
      <Slider
        min={10}
        max={40}
        title="Wochenstunden"
        value={hours}
        onChange={setHours}
        outcome={`+${(hours / 4).toFixed(2)}€`}
      />
      <Slider
        min={0}
        max={5}
        title="Praxiserfahrung"
        value={experience}
        onChange={setExperience}
        outcome={`+${experience.toFixed(2)}€`}
        descriptions={[
          "Keine Praxiserfahrung",
          "Diverse Uniprojekte oder eigene Sachen, kein Team",
          "Mehrere eigene Projekte/Teamerfahrung, mehrere Programmiersprachen",
          "FullStack Entwicklung oder Sprachenexperte, mehrere Jahre Erfahrung",
          "Flüssig in mehreren Sprachen, Architektur- und Systemverständnis",
          "Umsetzung von kompletten Enterprise Architekturen",
        ]}
      />
      <Slider
        min={0}
        max={5}
        title="Fachwissen"
        value={knowledge}
        onChange={setKnowledge}
        outcome={`+${knowledge.toFixed(2)}€`}
        descriptions={[
          "Kein Fachwissen",
          "Einstiegsvorlesungen, Info Abi",
          "Abgeschlossener Bachelor, Allrounder",
          "Experte in einigen komplexen Themen, liest Blogs und bildet sich fort",
          "Level eines Master Absolventen, liest Blogs und bildet sich fort",
          "Experten Wissen in einigen Bereichen wie App, Frontend, Backend, Cloud, Hardware - weiß wie die ganze IT Welt zusammenhängt und kann sehr komplexe Zusammenhänge verstehen und Fehler finden",
        ]}
      />
      <Slider
        min={0}
        max={5}
        title="Verantwortung"
        value={responsibility}
        onChange={setResponsibility}
        outcome={`+${Math.pow(1.4, responsibility).toFixed(2)}€`}
        descriptions={[
          "Keine Verantwortung",
          "Technical Expert, Code Reviews, Architektur Entscheidungen",
          "Führt kleines Kundenprojekt (bis 15k Jahresumsatz)",
          "Führt mittleres Kundenprojekt (bis 100k Jahresumsatz)",
          "Führt großes Kundenprojekt (bis 500k Jahresumsatz)",
          "Führung der kompletten Firma (bis 1 Mio Jahresumsatz)",
        ]}
      />
      <div className="">
        <h2 className="text-center font-black text-xl">Dein Gehalt:</h2>
        <div className="text-center flex flex-col">
          <span className="text-success font-black text-2xl">
            {salary.toFixed(2)} Euro / h
          </span>
          <span>= {monthlySalary.toFixed(2)} Euro / Month</span>
        </div>
      </div>
    </div>
  );
}

function Slider({
  min,
  max,
  title,
  value,
  onChange,
  outcome,
  descriptions,
}: {
  min: number;
  max: number;
  title: string;
  value: number;
  onChange: (value: number) => void;
  outcome: string;
  descriptions?: string[];
}) {
  return (
    <div className="my-10">
      <h2 className="flex flex-row justify-between">
        <span className="text-xl font-bold">
          {title} · {value}
        </span>
        <span className="text-right text-lg text-success font-bold">
          {outcome}
        </span>
      </h2>
      <div className="my-3">
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="range"
          step="1"
        />
        <div className="w-full flex justify-between text-xs px-2">
          {new Array(max - min + 1).fill(0).map((_, i) => (
            <span>|</span>
          ))}
        </div>
      </div>
      {descriptions && (
        <div className="text-center font-bold">
          <span>{descriptions[value - min]}</span>
        </div>
      )}
    </div>
  );
}
