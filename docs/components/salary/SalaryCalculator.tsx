import exp from "constants";
import {useMemo, useState} from "react";

export default function SalaryCalculator() {
    const [hours, setHours] = useState(12);
    const [experience, setExperience] = useState(1);
    const [knowledge, setKnowledge] = useState(1);
    const [responsibility, setResponsibility] = useState(1);

    const salary = useMemo(() => {
        return Math.round(
            12 + hours / 4 + experience + knowledge + Math.pow(1.4, responsibility)
        );
    }, [hours, experience, knowledge, responsibility]);

    const monthlySalary = useMemo(() => {
        return salary * hours * 4;
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
                min={12}
                max={20}
                title="Hours / week"
                value={hours}
                onChange={setHours}
                outcome={`+${(hours / 4).toFixed(2)}€`}
            />
            <Slider
                min={0}
                max={5}
                title="Practical Experience"
                value={experience}
                onChange={setExperience}
                outcome={`+${experience.toFixed(2)}€`}
                descriptions={[
                    "No practical experience",
                    "Various university projects or personal projects, no team",
                    "Several personal projects/team experience, multiple programming languages",
                    "Full-stack development or language expert, several years of experience",
                    "Fluent in several languages, understanding of architecture and systems",
                    "Implementation of complete enterprise architectures",
                ]}
            />
            <Slider
                min={0}
                max={5}
                title="Theorical Knowledge"
                value={knowledge}
                onChange={setKnowledge}
                outcome={`+${knowledge.toFixed(2)}€`}
                descriptions={[
                    "No specialized knowledge",
                    "Introductory lectures, information from high school diploma",
                    "Completed Bachelor's degree, all-rounder",
                    "Expert in some complex topics, reads blogs and continues education",
                    "Level of a Master's graduate, reads blogs and continues education",
                    "Expert knowledge in several areas such as App, Frontend, Backend, Cloud, Hardware - understands how the entire IT world is connected and can understand very complex correlations and find errors",
                ]}
            />
            <Slider
                min={0}
                max={5}
                title="Responsibility"
                value={responsibility}
                onChange={setResponsibility}
                outcome={`+${Math.pow(1.4, responsibility).toFixed(2)}€`}
                descriptions={[
                    "No responsibility",
                    "Technical Expert, Code Reviews, Architecture Decisions",
                    "Leads small client project (up to 15k annual turnover)",
                    "Leads medium client project (up to 100k annual turnover)",
                    "Leads large client project (up to 500k annual turnover)",
                    "Leads the entire company (up to 1 Mio annual turnover)",
                ]}
            />
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
