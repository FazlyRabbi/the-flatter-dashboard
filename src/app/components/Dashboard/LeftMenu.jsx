import React from "react";
import Link from "next/link";
import { Card, List } from "@material-tailwind/react";

import {
  HomeIcon,
  FolderOpenIcon,
  ArrowUpOnSquareStackIcon,
} from "@heroicons/react/20/solid";

// import logo from "../../img/white-logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@material-tailwind/react";

export default function LeftMenu({ sidebar, closeSidebar }) {
  const [open, setOpen] = React.useState(0);

  const path = usePathname();

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="xl:p-5 xl:fixed  ">
      <Card
        className={` ${
          sidebar ? "left-[0rem] z-50  " : "-left-[100rem]"
        } xl:static xl:left-0  absolute      w-[18rem]  p-5 shadow-xl
         
         bg-[#2B383F]
        
        transition-all duration-300 shadow-white-900/5  leftManuHeignt  `}
      >
        <div className="mb-2 p-4   ">
          <div className="logo_box cursor-pointer">
            <Link href={`/`}>
              <Image height={150} width={150} alt="logo" />
            </Link>
          </div>
          <div className="  w-full  mt-4  border-b border-[#ffffff1a] "></div>
        </div>

        <List className="  space-y-2">
          <Link href={`/`}>
            <Button
              variant="gradient"
              ripple={false}
              color="blue"
              className={`  ${
                path === "/" ? "" : "bg-none shadow-none  hover:shadow-none"
              } w-full       text-sm text-left flex items-center gap-3 `}
            >
              <HomeIcon className="h-5 selection:w-5 text-white" />
              Dashboard
            </Button>
          </Link>
          <Link href={`/repos`}>
            <Button
              variant="gradient"
              ripple={false}
              color="blue"
              className={`  ${
                path === "/repos"
                  ? ""
                  : "bg-none shadow-none  hover:shadow-none"
              } w-full       text-sm text-left flex items-center gap-3 `}
            >
              <FolderOpenIcon className="h-5 w-5 text-white" />
              All Repo
            </Button>
          </Link>

          <Link href={`/publised`}>
            <Button
              variant="gradient"
              ripple={false}
              color="blue"
              className={`  ${
                path === "/publised"
                  ? ""
                  : "bg-none shadow-none  hover:shadow-none"
              } w-full       text-sm text-left flex items-center gap-3 `}
            >
              <ArrowUpOnSquareStackIcon className="h-5 w-5  text-white" />
              publised repo
            </Button>
          </Link>
        </List>
      </Card>

      {sidebar && (
        <div
          onClick={() => closeSidebar()}
          className={`bg-[#00073433] blurCustom    absolute w-full h-full z-30`}
        ></div>
      )}
    </div>
  );
}
