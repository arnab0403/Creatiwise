import { IconLoader, IconLoader2 } from "@tabler/icons-react";
import React from "react";

function Loader() {
  return (
    <div className="h-[calc(100vh-150px)] border flex justify-center items-center ">
      <IconLoader2 className=" animate-spin" size={45}/>
    </div>
  );
}

export default Loader;
