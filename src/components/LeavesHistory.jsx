import { NavLink } from "react-router-dom";
import { historyData } from "../constant";

function LeavesHistory() {
  return (
    <div className="mx-auto p-6 max-w-md">
      <ul className="flex justify-end border-b mt-4">
        <li>
          <NavLink className="relative py-2 first:pl-4 last:pr-4 ">
            <span className={`relative z-10 text-sm xs:text-base`}>
              History
            </span>
            <span
              className={`absolute bottom-0 left-0 w-full h-1 bg-zinc-700  transition-transform`}
            ></span>
          </NavLink>
        </li>
      </ul>
      <ul className=" mt-4 text-sm xs:text-base">
        {historyData.map((data) => (
          <li
            key={data.id}
            className="flex justify-between items-center border-b py-2"
          >
            <div className="flex items-center gap-2">
              <img className="h-10" src={data.imageUrl} alt="" />
              <p>{data.type}</p>
            </div>
            <div className="flex justify-start gap-10">
              <div>{data.date}</div>
              <div className=" bg-lime-500 py-1 px-4 rounded">
                {data.status}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LeavesHistory;
