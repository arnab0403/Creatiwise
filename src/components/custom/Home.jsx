import { Suspense, lazy } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
const Table = lazy(() => import("./Table"));

export default function Home() {
  const navigate = useNavigate();

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex flex-col gap-[15px] items-center w-full">
          <div className="w-full">
            <h1 className="text-[40px] font-bold hidden sm:block sm:text-center">
              Article
            </h1>
          </div>

          <div className="grid grid-cols-2 md:flex -mx-2 gap-y-2 w-full max-w-xl">
            <button
              className="w-[180px] h-[35px] rounded-[12px] border-2 focus:text-[white] focus:bg-[#3e76f7] focus:border-none focus:z-50 -mx-[8px] bg-[white] z-40 justify-self-center"
              onClick={() => navigate("/general-articles")}
            >
              General Articles
            </button>
            <button
              className="w-[180px] h-[35px] rounded-[12px] border-2 focus:text-[white] focus:bg-[#3e76f7] focus:border-none focus:z-50 -mx-[8px] bg-[white] z-30 justify-self-center"
              onClick={() => navigate("/published-articles")}
            >
              Published Articles
            </button>
            <button
              className="w-[180px] h-[35px] rounded-[12px] border-2 focus:text-[white] focus:bg-[#3e76f7] focus:border-none focus:z-50 -mx-[8px] bg-[white] z-20 justify-self-center"
              onClick={() => navigate("/scheduled-articles")}
            >
              Scheduled Articles
            </button>
            <button
              className="w-[180px] h-[35px] rounded-[12px] border-2 focus:text-[white] focus:bg-[#3e76f7] focus:border-none focus:z-50 -mx-[8px] bg-[white] z-10 justify-self-center"
              onClick={() => navigate("/archived-articles")}
            >
              Archived Articles
            </button>
          </div>
          <div>
            <input type="text" className="placeholder:outline-none" />
          </div>
        </header>
        <Suspense fallback={<Loader />}>
          <Table />
        </Suspense>
      </SidebarInset>
    </SidebarProvider>
  );
}
