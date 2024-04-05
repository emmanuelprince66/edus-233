import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import { Checkbox } from "@mui/material";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";

const ListAssesment = ({
  setShowCreateAssesment,
  setShowEditAssessmentModal,
}) => {
  const dummyAssesment = [
    {
      id: 1,
      nm: "Playgroup Assesment",
    },
    {
      id: 2,
      nm: "Nursery Assesment",
    },
    {
      id: 3,
      nm: "Primary Assesment",
    },
    {
      id: 4,
      nm: "Secondary Assesment",
    },
  ];
  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center">
        <div className="vertical_layout2 gap-1 mb-3">
          <p className="text-gray-800 font-bold text-1xl"> Grading </p>
          <p className="text-gray-300 text-[12px] ">Settings</p>
        </div>

        <div className="flex gap-3 justify-end   w-[60%] mb-3 ">
          <Input
            type="text"
            placeholder="Search"
            icon={
              <SearchRoundedIcon
                sx={{ color: "grey", fontSize: "15px" }}
                aria-label="Search"
              />
            }
          />
          <Button
            onClick={() => setShowCreateAssesment((prev) => !prev)}
            variant="default"
            className="flex gap-2 items-center w-full text-sm"
          >
            <AddRoundedIcon />
            Create
          </Button>
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="vertical_layout2 w-full">
          <div className="flex items-center  w-full my-4 justify-between">
            <p className="text-bold text-lg">Grade Level</p>
            <p className="text-normal text-gray-400 ">Action</p>
          </div>
          <div className="vertical_layout w-full gap-2">
            {dummyAssesment.map((item) => {
              return (
                <div
                  className="flex justify-between w-full items-center my-3"
                  key={item.id}
                >
                  <div className="horizontal_layout gap-2">
                    <Checkbox
                      sx={{
                        width: "32px",
                        height: "32px",
                        color: "#001358",
                        "&.Mui-checked": {
                          color: "#001358",
                        },
                      }}
                    />
                    <p className="text-normal ">{item.nm}</p>
                  </div>

                  <div className="horizontal_layout gap-1">
                    <EditNoteRoundedIcon
                      onClick={() =>
                        setShowEditAssessmentModal((prev) => !prev)
                      }
                      sx={{ color: "#001358", cursor: "pointer" }}
                    />

                    <DeleteForeverRoundedIcon
                      sx={{ color: "#001358", cursor: "pointer" }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-full flex justify-end my-2">
            <Button
              // onClick={handleShowCreateSessionForm}
              variant="default"
              className="flex gap-2 items-center w-full max-w-[30%] text-sm"
            >
              <AddRoundedIcon />
              Assign Level
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListAssesment;
