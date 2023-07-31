import { RadialProgress } from "react-radial-progress-indicator";
import { leavesData } from "../constant";

function LeavesBalance() {
  return (
    <div className="mx-auto max-w-md flex justify-evenly mt-2">
      {leavesData.map((data) => (
        <div className=" text-center text-xs xs:text-sm " key={data.id}>
          <p className="mb-2 text-slate-400">{data.id}</p>
          <RadialProgress
            backgroundColour="#dff0d8"
            backgroundTransparent
            duration={1000}
            fontRatio={4}
            height={100}
            ringBgColour="#ccc"
            ringFgColour={data.color}
            ringIntermediateColour={data.color}
            ringThickness={0.1}
            segmented={false}
            showIntermediateProgress
            startStep={0}
            step={data.dayLeft} // Set step to dayLeft value
            steps={data.totalDays} // Set steps to totalDays value
            text={function text(steps, percentage) {
              return "".concat(Math.floor(steps * percentage), "D");
            }}
            width={100}
          />
        </div>
      ))}
    </div>
  );
}

export default LeavesBalance;
