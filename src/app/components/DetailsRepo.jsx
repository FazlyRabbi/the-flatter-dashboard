"use client";
import React, { useEffect, useState } from "react";
import useStore from "../store/store";
import LeftMenu from "./Dashboard/LeftMenu";
import { HiMenuAlt1 } from "react-icons/hi";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import TagsInput from "react-tagsinput";
import axios from "axios";

const mdParser = new MarkdownIt();

// Custom render function to handle image URLs
mdParser.renderer.rules.image = (tokens, idx, options, env, self) => {
  const token = tokens[idx];
  // Get the image URL from the token
  const imgSrc = token.attrGet("src");
  // Assuming images are in the /public/images folder
  return `<img src="http://localhost:3000/images/${imgSrc}" alt="${token.content}" />`;
};

import { Card, CardBody, Input, Button } from "@material-tailwind/react";

function DetailsRepo({ repoName }) {
  const {
    loading,
    error,
    repo,
    fetchReadmd,
    fetchBranches,
    init,
    fetchCategory,
  } = useStore();

  const [selectedFile, setselectedFile] = useState(null);

  const [finalRepo, setFinalRepo] = useState(null);

  const [sidebar, setSidebar] = useState(false);

  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetchReadmd(repoName);
    fetchBranches(repoName);
    fetchCategory();
  }, [fetchReadmd, fetchBranches, repoName, fetchCategory]);

  useEffect(() => {
    if (init.description && init.category) {
      setFinalRepo({
        ...init,
        category: init?.category[0]?.id,
        subBranch: init?.subBranch[0]?.name,
      });
      return;
    }
  }, [init]);

  const closeSidebar = () => {
    setSidebar(false);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!selectedFile) return;
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("title", finalRepo?.title);
      formData.append("description", finalRepo?.description);
      formData.append("subBranch", finalRepo?.subBranch);
      formData.append("version", finalRepo?.version);
      formData.append("tags", finalRepo?.tags);
      formData.append("isPublished", finalRepo?.isPublished);
      formData.append("liveLink", finalRepo?.liveLink);
      formData.append("category", finalRepo?.category);

      const { data } = await axios.post("/api/repo", formData);

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleTagsChange = (tags) => {
    setTags(tags);
    const commaSeparatedString = tags.join(",");
    setFinalRepo({ ...finalRepo, tags: commaSeparatedString });
  };

  if (!finalRepo) {
    return;
  }

  return (
    <section>
      <div className="   flex   bg-[#F2F5F9]">
        {/* <lest menu /> */}
        <LeftMenu
          className=" max-w-[18rem] "
          sidebar={sidebar}
          closeSidebar={closeSidebar}
        />
        {/* total page */}
        <div className=" w-full grid   h-full  overflow-y-scroll grid-cols-1  2xl:grid-cols-3 gap-y-2  lg:col-span-4 ">
          <div className="   2xl:col-span-3  2xl:order-2 ">
            {/* header */}
            <div className="  bg-white flex items-center  px-10 justify-between  h-[5rem] cutstomShad  w-full  mb-8">
              <h1 className=" uppercase  text-[#223354] font-bold">
                {repoName}
              </h1>

              <div>
                <HiMenuAlt1
                  className=" xl:hidden  text-[1.5rem] cursor-pointer"
                  onClick={() => setSidebar(!sidebar)}
                />
              </div>
            </div>

            {/* ==========Main======== */}

            <form onSubmit={onSubmit}>
              <div className="   w-full grid grid-cols-1 justify-items-center">
                <Card className="mt-6  max-w-[120rem] w-[90%]">
                  <CardBody className=" space-y-8">
                    <div className="w-full flex flex-col space-y-3">
                      <label
                        htmlFor="thumbnail"
                        className=" text-black font-semibold"
                      >
                        Thumbnail
                      </label>

                      <input
                        required
                        type="file"
                        onChange={(e) => setselectedFile(e.target.files[0])}
                      />
                    </div>
                    <div className="w-full">
                      <Input
                        label="Title"
                        required
                        value={finalRepo.title}
                        onChange={(e) =>
                          setFinalRepo({ ...finalRepo, title: e.target.value })
                        }
                      />
                    </div>

                    <div className="w-full">
                      {
                        <MdEditor
                          value={finalRepo?.description}
                          style={{ height: "500px" }}
                          renderHTML={(text) => mdParser.render(text)}
                          onChange={({ text }) =>
                            setFinalRepo({ ...finalRepo, description: text })
                          }
                        />
                      }
                    </div>

                    <div className="w-full">
                      {init?.subBranch && (
                        <select
                          required
                          className="relative px-2  w-full rounded-md  bg-white border-[#B0BEC5] border min-w-[200px] h-10"
                          onChange={(e) =>
                            setFinalRepo({
                              ...finalRepo,
                              subBranch: e.target.value,
                            })
                          }
                          variant="outlined"
                          label="Select Sub Branch"
                        >
                          {init?.subBranch.map((branch, index) => (
                            <option key={index}>{branch.name}</option>
                          ))}
                        </select>
                      )}
                    </div>

                    <div className="w-full">
                      <Input
                        type="number"
                        label="Version"
                        required
                        value={finalRepo.version}
                        onChange={(e) =>
                          setFinalRepo({
                            ...finalRepo,
                            version: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="w-full">
                      <Input
                        type="text"
                        label="Live Link"
                        value={finalRepo.liveLink}
                        onChange={(e) =>
                          setFinalRepo({
                            ...finalRepo,
                            liveLink: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="w-full">
                      {init?.category && (
                        <select
                          required
                          className="relative px-2 w-full rounded-md  bg-white border-[#B0BEC5] border min-w-[200px] h-10"
                          onChange={(e) =>
                            setFinalRepo({
                              ...finalRepo,
                              category: e.target.value,
                            })
                          }
                          variant="outlined"
                          label="Select Sub Branch"
                        >
                          {init?.category.map((category, index) => (
                            <option key={index} value={category.id}>
                              {category.name}
                            </option>
                          ))}
                        </select>
                      )}
                    </div>

                    <div className="w-full">
                      <TagsInput
                        className=" border border-gray-200 w-full p-2 rounded-md"
                        value={tags}
                        onChange={handleTagsChange}
                      />
                    </div>

                    <div className="w-full">
                      <select
                        className="relative w-full rounded-md  bg-white border-[#B0BEC5] px-2 border min-w-[200px] h-10"
                        variant="outlined"
                        value={finalRepo?.isPublised}
                        label="Published"
                        onChange={(e) =>
                          setFinalRepo({
                            ...finalRepo,
                            isPublised: e.target.value,
                          })
                        }
                      >
                        <option value="true">Public</option>
                        <option value="false">Privet</option>
                      </select>
                    </div>

                    <Button className="w-full" type="submit">
                      Submit
                    </Button>
                  </CardBody>
                </Card>
              </div>
            </form>
            {/* ==========Main End======== */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailsRepo;
