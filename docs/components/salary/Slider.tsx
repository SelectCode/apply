import {SalaryComponent} from "@components/salary/SalaryModel";

export function Slider({
                    salaryComponent,
                    min,
                    max,
                    step,
                    value,
                    onChange,
                    outcome,
                    descriptions,
                }: {
    salaryComponent: SalaryComponent;
    min: number;
    max: number;
    step: number;
    value: number;
    onChange: (value: number) => void;
    outcome: string;
    descriptions?: string[];
}) {
    return (
        <div className="my-10">
            <h2 className="flex flex-row justify-between">
        <span className="text-xl font-bold">
          {salaryComponent.title} · {value}
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
                    step={step}
                />
                <div className="w-full flex justify-between text-xs px-2">
                    {new Array(max - min + 1).fill(0).map((_, i) => (
                        <span>|</span>
                    ))}
                </div>
            </div>
            {descriptions && (
                <div className="text-left">
                    <ul>
                        {salaryComponent.levels[value - min].criteria.map((it) => (<li>{it}</li>))}
                    </ul>
                </div>
            )}
        </div>
    );
}
