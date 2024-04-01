"use client";
import React from "react";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import { useState } from "react";

import CreateClassGroup from "./CreateClassGroup";
import ClassGroupListing from "./ClassGroupListing";

const ClassGroups = ({ handleClose }) => {
  const [showCreateClassGroup, setShowCreateClassGroup] = useState(false);

  const handleShowCreateClassGroup = () => setShowCreateClassGroup(true);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <div className="vertical_layout2 gap-1 mb-3">
          <p className="text-gray-800 font-bold text-1xl"> Class Group</p>
          <p className="text-gray-300 text-[12px] ">Settings</p>
        </div>

        <HighlightOffRoundedIcon
          onClick={handleClose}
          className=" hover:text-primary_blue_4 text-gray-300 cursor-pointer "
        />
      </div>

      {showCreateClassGroup ? (
        <CreateClassGroup
          handleShowCreateClassGroup={handleShowCreateClassGroup}
        />
      ) : (
        <ClassGroupListing
          handleShowCreateClassGroup={handleShowCreateClassGroup}
        />
      )}
    </div>
  );
};

export default ClassGroups;
