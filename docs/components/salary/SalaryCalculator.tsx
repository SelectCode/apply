import { useEffect, useMemo, useState } from "react";
import { salaryComponents, SalaryComponent } from "./salaryComponents";

const BASE = 19;

export default function SalaryCalculator() {
  const [calculatedComponents, setCalculatedComponents] = useState(
    new Array(salaryComponents.length).fill(0)
  );

  const salary = useMemo(() => {
    return BASE + calculatedComponents.reduce((acc, cur) => acc + cur, 0);
  }, [calculatedComponents]);

  const monthlySalary = useMemo(() => {
    const hours = calculatedComponents[0] * 4 + 16; // a little unclean way to calculate the hours
    return salary * hours * 4;
  }, [salary, calculatedComponents[0]]);

  return (
    <div className="">
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl font-black">Salary Calculator</h1>

        <div className="flex flex-col items-end font-bold text-lg">
          <span className="text-success">{BASE}€</span>
          <span className="text-md font-light text-primary-content">
            (base)
          </span>
        </div>
      </div>
      {salaryComponents.map((component, index) => (
        <Slider
          key={index}
          salaryComponent={component}
          onChange={(value) => {
            const newCalculatedComponents = [...calculatedComponents];
            newCalculatedComponents[index] = value;
            setCalculatedComponents(newCalculatedComponents);
          }}
        />
      ))}
      <div className="">
        <h2 className="text-center font-black text-xl">Your Salary:</h2>
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
  salaryComponent,
  onChange,
}: {
  salaryComponent: SalaryComponent;
  onChange: (value: number) => void;
}) {
  const [sliderValue, setSliderValue] = useState(0);

  const outcome = useMemo(() => {
    return salaryComponent.calculate(sliderValue);
  }, [sliderValue]);

  useEffect(() => {
    onChange(outcome);
  }, [outcome]);

  return (
    <div className="my-10">
      <h2 className="flex flex-row justify-between">
        <span className="text-xl font-bold">
          {salaryComponent.title} · {salaryComponent.levels[sliderValue]?.title}
        </span>
        <span className="text-right text-lg text-success font-bold">
          +{outcome.toFixed(2)} €
        </span>
      </h2>
      <div className="my-3">
        <input
          type="range"
          min={0}
          max={salaryComponent.levels.length - 1}
          value={sliderValue}
          onChange={(e) => setSliderValue(parseInt(e.target.value))}
          className="range"
          step={1}
        />
        <div className="w-full flex justify-between text-xs px-2">
          {new Array(salaryComponent.levels.length).fill(0).map((_, i) => (
            <span>|</span>
          ))}
        </div>
      </div>
      <div className="text-left">
        <ul>
          {salaryComponent.levels[sliderValue].criteria?.map((it) => (
            <li>{it}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
