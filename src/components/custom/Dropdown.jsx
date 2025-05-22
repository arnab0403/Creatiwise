import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useContext } from "react";
import { Context } from "./DataContext";

function Dropdown() {
  const { data, setData } = useContext(Context);

  const SortDataWords = () => {
    // Create a new sorted array (avoid mutation)
    const sortedData = [...data].sort(
      (a, b) => parseInt(a.words) - parseInt(b.words)
    );
    console.log(sortedData);
    setData([...sortedData]);
  };

  const SortDataKeyword = () => {
    const sortedData = [...data].sort((a, b) => {
      const extractNumber = (keyword) => {
        const start = keyword.indexOf("[") + 1;
        const end = keyword.indexOf("]");
        return parseInt(keyword.slice(start, end)) || 0;
      };

      const aValue = extractNumber(a.keyword);
      const bValue = extractNumber(b.keyword);

      return aValue - bValue;
    });

    setData(sortedData);
  };
  const SortDataCreated = () => {
    const sortedData = [...data].sort((a, b) => {
      // Extract hours from "X hours ago" string
      const getHours = (timeStr) => {
        const hoursMatch = timeStr.match(/(\d+)\s+hours?/);
        return hoursMatch ? parseInt(hoursMatch[1]) : 0;
      };

      return getHours(a.created) - getHours(b.created); // Oldest first
      // return getHours(b.created) - getHours(a.created); // Newest first
    });

    setData(sortedData);
  };

  return (
    <div className="border rounded-xl w-[70px] text-center">
      <DropdownMenu>
        <DropdownMenuTrigger>Sort</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={SortDataKeyword}>Keyword</DropdownMenuItem>
          <DropdownMenuItem onClick={SortDataCreated}>Created</DropdownMenuItem>
          <DropdownMenuItem onClick={SortDataWords}>Words</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Dropdown;
