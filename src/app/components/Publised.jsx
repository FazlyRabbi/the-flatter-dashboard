"use client";
import { useState, useEffect, useMemo, useCallback } from "react";
// import leftmenu
import LeftMenu from "./Dashboard/LeftMenu";
// import useSweetAlert from "@/components/lib/sweetalert2";
import { HiMenuAlt1 } from "react-icons/hi";
// import tailwind modal
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import ContentLoader from "react-content-loader";
import { FolderIcon } from "@heroicons/react/24/outline";
import useStore from "../store/store";
import "text-encoding";
import Swal from "sweetalert2";

import axios from "axios";
// init loader
const loader = (
  <>
    <div className="  h-full w-full">
      <ContentLoader
        speed={2}
        width={250}
        height={300}
        viewBox="0 0 400 460"
        backgroundColor="#dcdbdb"
        foregroundColor="#ecebeb"
      >
        <circle cx="16" cy="484" r="15" />
        <circle cx="34" cy="406" r="19" />
        <rect x="-60" y="2" rx="0" ry="0" width="531" height="351" />
        <rect x="283" y="232" rx="0" ry="0" width="0" height="1" />
        <rect x="200" y="178" rx="0" ry="0" width="42" height="9" />
        <rect x="72" y="378" rx="0" ry="0" width="283" height="14" />
        <rect x="269" y="384" rx="0" ry="0" width="0" height="1" />
        <rect x="73" y="411" rx="0" ry="0" width="283" height="14" />
      </ContentLoader>
    </div>
    <div className="  h-full w-full">
      <ContentLoader
        speed={2}
        width={250}
        height={300}
        viewBox="0 0 400 460"
        backgroundColor="#dcdbdb"
        foregroundColor="#ecebeb"
      >
        <circle cx="16" cy="484" r="15" />
        <circle cx="34" cy="406" r="19" />
        <rect x="-60" y="2" rx="0" ry="0" width="531" height="351" />
        <rect x="283" y="232" rx="0" ry="0" width="0" height="1" />
        <rect x="200" y="178" rx="0" ry="0" width="42" height="9" />
        <rect x="72" y="378" rx="0" ry="0" width="283" height="14" />
        <rect x="269" y="384" rx="0" ry="0" width="0" height="1" />
        <rect x="73" y="411" rx="0" ry="0" width="283" height="14" />
      </ContentLoader>
    </div>
    <div className="  h-full w-full">
      <ContentLoader
        speed={2}
        width={250}
        height={300}
        viewBox="0 0 400 460"
        backgroundColor="#dcdbdb"
        foregroundColor="#ecebeb"
      >
        <circle cx="16" cy="484" r="15" />
        <circle cx="34" cy="406" r="19" />
        <rect x="-60" y="2" rx="0" ry="0" width="531" height="351" />
        <rect x="283" y="232" rx="0" ry="0" width="0" height="1" />
        <rect x="200" y="178" rx="0" ry="0" width="42" height="9" />
        <rect x="72" y="378" rx="0" ry="0" width="283" height="14" />
        <rect x="269" y="384" rx="0" ry="0" width="0" height="1" />
        <rect x="73" y="411" rx="0" ry="0" width="283" height="14" />
      </ContentLoader>
    </div>
    <div className="  h-full w-full">
      <ContentLoader
        speed={2}
        width={250}
        height={300}
        viewBox="0 0 400 460"
        backgroundColor="#dcdbdb"
        foregroundColor="#ecebeb"
      >
        <circle cx="16" cy="484" r="15" />
        <circle cx="34" cy="406" r="19" />
        <rect x="-60" y="2" rx="0" ry="0" width="531" height="351" />
        <rect x="283" y="232" rx="0" ry="0" width="0" height="1" />
        <rect x="200" y="178" rx="0" ry="0" width="42" height="9" />
        <rect x="72" y="378" rx="0" ry="0" width="283" height="14" />
        <rect x="269" y="384" rx="0" ry="0" width="0" height="1" />
        <rect x="73" y="411" rx="0" ry="0" width="283" height="14" />
      </ContentLoader>
    </div>
    <div className="  h-full w-full">
      <ContentLoader
        speed={2}
        width={250}
        height={300}
        viewBox="0 0 400 460"
        backgroundColor="#dcdbdb"
        foregroundColor="#ecebeb"
      >
        <circle cx="16" cy="484" r="15" />
        <circle cx="34" cy="406" r="19" />
        <rect x="-60" y="2" rx="0" ry="0" width="531" height="351" />
        <rect x="283" y="232" rx="0" ry="0" width="0" height="1" />
        <rect x="200" y="178" rx="0" ry="0" width="42" height="9" />
        <rect x="72" y="378" rx="0" ry="0" width="283" height="14" />
        <rect x="269" y="384" rx="0" ry="0" width="0" height="1" />
        <rect x="73" y="411" rx="0" ry="0" width="283" height="14" />
      </ContentLoader>
    </div>
    <div className="  h-full w-full">
      <ContentLoader
        speed={2}
        width={250}
        height={300}
        viewBox="0 0 400 460"
        backgroundColor="#dcdbdb"
        foregroundColor="#ecebeb"
      >
        <circle cx="16" cy="484" r="15" />
        <circle cx="34" cy="406" r="19" />
        <rect x="-60" y="2" rx="0" ry="0" width="531" height="351" />
        <rect x="283" y="232" rx="0" ry="0" width="0" height="1" />
        <rect x="200" y="178" rx="0" ry="0" width="42" height="9" />
        <rect x="72" y="378" rx="0" ry="0" width="283" height="14" />
        <rect x="269" y="384" rx="0" ry="0" width="0" height="1" />
        <rect x="73" y="411" rx="0" ry="0" width="283" height="14" />
      </ContentLoader>
    </div>

    <div className="  h-full w-full">
      <ContentLoader
        speed={2}
        width={250}
        height={300}
        viewBox="0 0 400 460"
        backgroundColor="#dcdbdb"
        foregroundColor="#ecebeb"
      >
        <circle cx="16" cy="484" r="15" />
        <circle cx="34" cy="406" r="19" />
        <rect x="-60" y="2" rx="0" ry="0" width="531" height="351" />
        <rect x="283" y="232" rx="0" ry="0" width="0" height="1" />
        <rect x="200" y="178" rx="0" ry="0" width="42" height="9" />
        <rect x="72" y="378" rx="0" ry="0" width="283" height="14" />
        <rect x="269" y="384" rx="0" ry="0" width="0" height="1" />
        <rect x="73" y="411" rx="0" ry="0" width="283" height="14" />
      </ContentLoader>
    </div>
    <div className="  h-full w-full">
      <ContentLoader
        speed={2}
        width={250}
        height={300}
        viewBox="0 0 400 460"
        backgroundColor="#dcdbdb"
        foregroundColor="#ecebeb"
      >
        <circle cx="16" cy="484" r="15" />
        <circle cx="34" cy="406" r="19" />
        <rect x="-60" y="2" rx="0" ry="0" width="531" height="351" />
        <rect x="283" y="232" rx="0" ry="0" width="0" height="1" />
        <rect x="200" y="178" rx="0" ry="0" width="42" height="9" />
        <rect x="72" y="378" rx="0" ry="0" width="283" height="14" />
        <rect x="269" y="384" rx="0" ry="0" width="0" height="1" />
        <rect x="73" y="411" rx="0" ry="0" width="283" height="14" />
      </ContentLoader>
    </div>
    <div className="  h-full w-full">
      <ContentLoader
        speed={2}
        width={250}
        height={300}
        viewBox="0 0 400 460"
        backgroundColor="#dcdbdb"
        foregroundColor="#ecebeb"
      >
        <circle cx="16" cy="484" r="15" />
        <circle cx="34" cy="406" r="19" />
        <rect x="-60" y="2" rx="0" ry="0" width="531" height="351" />
        <rect x="283" y="232" rx="0" ry="0" width="0" height="1" />
        <rect x="200" y="178" rx="0" ry="0" width="42" height="9" />
        <rect x="72" y="378" rx="0" ry="0" width="283" height="14" />
        <rect x="269" y="384" rx="0" ry="0" width="0" height="1" />
        <rect x="73" y="411" rx="0" ry="0" width="283" height="14" />
      </ContentLoader>
    </div>
    <div className="  h-full w-full">
      <ContentLoader
        speed={2}
        width={250}
        height={300}
        viewBox="0 0 400 460"
        backgroundColor="#dcdbdb"
        foregroundColor="#ecebeb"
      >
        <circle cx="16" cy="484" r="15" />
        <circle cx="34" cy="406" r="19" />
        <rect x="-60" y="2" rx="0" ry="0" width="531" height="351" />
        <rect x="283" y="232" rx="0" ry="0" width="0" height="1" />
        <rect x="200" y="178" rx="0" ry="0" width="42" height="9" />
        <rect x="72" y="378" rx="0" ry="0" width="283" height="14" />
        <rect x="269" y="384" rx="0" ry="0" width="0" height="1" />
        <rect x="73" y="411" rx="0" ry="0" width="283" height="14" />
      </ContentLoader>
    </div>
    <div className="  h-full w-full">
      <ContentLoader
        speed={2}
        width={250}
        height={300}
        viewBox="0 0 400 460"
        backgroundColor="#dcdbdb"
        foregroundColor="#ecebeb"
      >
        <circle cx="16" cy="484" r="15" />
        <circle cx="34" cy="406" r="19" />
        <rect x="-60" y="2" rx="0" ry="0" width="531" height="351" />
        <rect x="283" y="232" rx="0" ry="0" width="0" height="1" />
        <rect x="200" y="178" rx="0" ry="0" width="42" height="9" />
        <rect x="72" y="378" rx="0" ry="0" width="283" height="14" />
        <rect x="269" y="384" rx="0" ry="0" width="0" height="1" />
        <rect x="73" y="411" rx="0" ry="0" width="283" height="14" />
      </ContentLoader>
    </div>
    <div className="  h-full w-full">
      <ContentLoader
        speed={2}
        width={250}
        height={300}
        viewBox="0 0 400 460"
        backgroundColor="#dcdbdb"
        foregroundColor="#ecebeb"
      >
        <circle cx="16" cy="484" r="15" />
        <circle cx="34" cy="406" r="19" />
        <rect x="-60" y="2" rx="0" ry="0" width="531" height="351" />
        <rect x="283" y="232" rx="0" ry="0" width="0" height="1" />
        <rect x="200" y="178" rx="0" ry="0" width="42" height="9" />
        <rect x="72" y="378" rx="0" ry="0" width="283" height="14" />
        <rect x="269" y="384" rx="0" ry="0" width="0" height="1" />
        <rect x="73" y="411" rx="0" ry="0" width="283" height="14" />
      </ContentLoader>
    </div>
    <div className="  h-full w-full">
      <ContentLoader
        speed={2}
        width={250}
        height={300}
        viewBox="0 0 400 460"
        backgroundColor="#dcdbdb"
        foregroundColor="#ecebeb"
      >
        <circle cx="16" cy="484" r="15" />
        <circle cx="34" cy="406" r="19" />
        <rect x="-60" y="2" rx="0" ry="0" width="531" height="351" />
        <rect x="283" y="232" rx="0" ry="0" width="0" height="1" />
        <rect x="200" y="178" rx="0" ry="0" width="42" height="9" />
        <rect x="72" y="378" rx="0" ry="0" width="283" height="14" />
        <rect x="269" y="384" rx="0" ry="0" width="0" height="1" />
        <rect x="73" y="411" rx="0" ry="0" width="283" height="14" />
      </ContentLoader>
    </div>
  </>
);

export default function Publised() {
  
  const [sidebar, setSidebar] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { loading, error, fetchRepo, repos } = useStore();
  const [isFatching, setIsFatching] = useState(false);

  useEffect(() => {
    fetchRepo(); // Trigger the fetchData function when the component mounts.
  }, [fetchRepo]);

  const publisedRepos = repos?.data.filter((repo) => repo.isPublished === true);

  const filteredData = useMemo(() => {
    return publisedRepos?.filter((repo) =>
      repo.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [publisedRepos, searchQuery]);

  const closeSidebar = () => {
    setSidebar(false);
  };

  const handlePrvetRepo = useCallback(async (id) => {
    try {
      setIsFatching(true);
      const response = await axios.put(`${process.env.NEXT_URL}/repo`, id);

      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Repo Successfully Unpublished!",
        });
        setIsFatching(false);
        return;
      } else {
        Swal.fire({
          icon: "error",
          title: "Internal server error!",
        });
        setIsFatching(false);
        return;
      }
      
    } catch (e) {
      console.log(e);
    }
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="   min-h-screen flex   bg-[#F2F5F9]">
      {/* <lest menu /> */}
      <LeftMenu
        className=" max-w-[18rem]  "
        sidebar={sidebar}
        closeSidebar={closeSidebar}
      />

      {/* total page */}
      <div className=" xl:ml-[21rem]  w-full">
        <div className="  grid   h-full  overflow-y-scroll grid-cols-1  2xl:grid-cols-3 gap-y-2 gap-2 lg:col-span-4 gap-x-5">
          <div className="     2xl:col-span-3  2xl:order-2 ">
            {/* header */}
            <div className="   bg-white flex items-center  px-10 justify-between  h-[5rem] cutstomShad  w-full  mb-8">
              <h1 className=" uppercase  text-[#223354] font-bold">
                All Publised REPO
              </h1>

              {/* // search bar */}
              <div className="font-sans text-black  shadow-md flex items-center justify-center">
                <div className="border border-gray-600 rounded overflow-hidden flex">
                  <input
                    type="search"
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="px-10  py-2"
                    placeholder="Search..."
                  />
                  <button className="flex items-center justify-center px-4 border-l">
                    <svg
                      className="h-4 w-4 text-grey-dark"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                    </svg>
                  </button>
                </div>
              </div>
              {/* // search bar */}
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

              {loading
                ? loader
                : filteredData?.map((repo, index) => (
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
                            {repo?.title}
                          </Typography>

                          <Button
                            disabled={isFatching}
                            onClick={() => handlePrvetRepo(repo.id)} // Use an arrow function here
                            color="red"
                            size="md"
                            className=" mt-4"
                          >
                            {isFatching ? (
                              <span className=" animate-pulse">Loading..</span>
                            ) : (
                              "  Make Privet"
                            )}
                          </Button>
                        </div>
                      </CardBody>
                    </Card>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
