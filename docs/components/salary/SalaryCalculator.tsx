import {useMemo, useState} from "react";
import {
    hoursComponent,
    knowledgeComponent,
    practicalExperienceComponent,
    responsibilityComponent,
    SalaryComponent
} from "@components/salary/SalaryModel";
import {Slider} from "@components/salary/Slider";

export default function SalaryCalculator() {
    const [hours, setHours] = useState(12);
    const [experience, setExperience] = useState(1);
    const [knowledge, setKnowledge] = useState(1);
    const [responsibility, setResponsibility] = useState(1);

    /**
     * Used to calculate the responsibility outcome and round it to the nearest 0.5.
     */
    const responsibilityOutCome = useMemo(() => {
        const outcome = Math.pow(1.4, responsibility);
        return Math.round(outcome * 2) / 2;
    }, [responsibility]);

    const salary = useMemo(() => {
        return 12 + hours / 4 + experience + knowledge + responsibilityOutCome;
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
                salaryComponent={hoursComponent}
                min={12}
                max={20}
                step={2}
                value={hours}
                onChange={setHours}
                outcome={`+${(hours / 4).toFixed(2)}€`}
            />
            <Slider
                salaryComponent={practicalExperienceComponent}
                min={0}
                max={5}
                step={1}
                value={experience}
                onChange={setExperience}
                outcome={`+${experience.toFixed(2)}€`}
            />
            <Slider
                salaryComponent={knowledgeComponent}
                min={0}
                max={5}
                step={1}
                value={knowledge}
                onChange={setKnowledge}
                outcome={`+${knowledge.toFixed(2)}€`}
            />
            <Slider
                salaryComponent={responsibilityComponent}
                min={0}
                max={5}
                step={1}
                value={responsibility}
                onChange={setResponsibility}
                outcome={`+${responsibilityOutCome.toFixed(2)}€`}
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