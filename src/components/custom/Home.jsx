import { Suspense, lazy } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Loader from "./Loader";
const Table = lazy(() => import("./Table"));
export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className=" flex flex-col gap-[15px] items-center">
          <div>
            <h1 className="text-[40px] font-bold">Article</h1>
          </div>
          <div className=" flex -mx-2">
            <button className="w-[180px] h-[35px] rounded-[12px] border-2 focus:text-[white] focus:bg-[#3e76f7] focus:border-none focus:z-50 -mx-[9px] bg-[white] z-40">
              General Articles
            </button>
            <button className="w-[180px] h-[35px] rounded-[12px] border-2 focus:text-[white] focus:bg-[#3e76f7] focus:border-none focus:z-50 -mx-[9px] bg-[white] z-30">
              Published Articles
            </button>
            <button className="w-[180px] h-[35px] rounded-[12px] border-2 focus:text-[white] focus:bg-[#3e76f7] focus:border-none focus:z-50 -mx-[9px] bg-[white] z-20">
              Scheduled Articles
            </button>
            <button className="w-[180px] h-[35px] rounded-[12px] border-2 focus:text-[white] focus:bg-[#3e76f7] focus:border-none focus:z-50 -mx-[9px] bg-[white] z-10">
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
