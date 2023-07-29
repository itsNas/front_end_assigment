import LeavesHistory from "../components/LeavesHistory";
import LeavesBalance from "../components/LeavesInfo";
import LeavesRequest from "../components/LeavesRequest";

function Leaves() {
  return (
    <div>
      <LeavesBalance />
      <LeavesHistory />
      <LeavesRequest />
    </div>
  );
}

export default Leaves;
