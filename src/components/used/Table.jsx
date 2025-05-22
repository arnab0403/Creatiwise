import { useContext, useEffect } from "react";
import { DataTable } from "../data-table";
import { Context } from "./DataContext";

function Table() {
  const { data } = useContext(Context);
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <DataTable data={data} key={JSON.stringify(data)} />
        </div>
      </div>
    </div>
  );
}

export default Table;
