"use client";
import { useState, useEffect } from "react";
// import leftmenu
import LeftMenu from "./Dashboard/LeftMenu";
// import useSweetAlert from "@/components/lib/sweetalert2";
import { HiMenuAlt1 } from "react-icons/hi";
// import tailwind modal
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import Link from "next/link";
import { FolderIcon } from "@heroicons/react/24/outline";
import useStore from "../store/store";

export default function GetRepo() {
  const [sidebar, setSidebar] = useState(false);

  const { data, loading, error, fetchData } = useStore();

  useEffect(() => {
    fetchData(); // Trigger the fetchData function when the component mounts.
  }, [fetchData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // showing alert
  //   const { showAlert } = useSweetAlert();
  // loead init members

  const closeSidebar = () => {
    setSidebar(false);
  };


  return (
    <div className="   min-h-screen flex   bg-[#F2F5F9]">
      {/* <lest menu /> */}
      <LeftMenu
        className=" max-w-[18rem] "
        sidebar={sidebar}
        closeSidebar={closeSidebar}
      />

      {/* total page */}
      <div className=" w-full grid   h-full  overflow-y-scroll grid-cols-1  2xl:grid-cols-3 gap-y-2 gap-2 lg:col-span-4 gap-x-5">
        <div className="   2xl:col-span-3  2xl:order-2 ">
          {/* header */}
          <div className="   bg-white flex items-center  px-10 justify-between  h-[5rem] cutstomShad  w-full  mb-8">
            <h1 className=" uppercase  text-[#223354] font-bold">All REPO</h1>

            <div>
              <HiMenuAlt1
                className=" xl:hidden  text-[1.5rem] cursor-pointer"
                onClick={() => setSidebar(!sidebar)}
              />
            </div>
          </div>

          {/* =========repo part========== */}
          <div className=" grid gap-5 justify-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {/* single repo */}

            {data?.items.map((repo, index) => (
              <Card className="mt-6 w-full" key={index}>
                <CardBody>
                  {/* single repo */}

                  <div
                    key={index}
                    className=" flex gap-y-2 flex-col items-center justify-center"
                  >
                    <FolderIcon className="h-10 w-10 " />

                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="mb-2 text-center"
                    >
                      {repo.name}
                    </Typography>

                    <Typography className=" text-center">
                      Because it&apos;s about motivating the doers. Because
                      I&apos;m here to follow my dreams and inspire others.
                    </Typography>
                    <Link href={`/repos/${repo.name}`} className="block ">
                      <Button size="md" className=" mt-4">
                        Publish
                      </Button>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
