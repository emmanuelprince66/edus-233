import React from "react";
import { useState } from "react";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";

import AddRoundedIcon from "@mui/icons-material/AddRounded";

import { Button } from "../ui/button";
import ModalComponent from "../ui/ModalComponent";
import EditRole from "./EditRole";
const ListRoles = ({ handleOpen }) => {
  const [openEditRoleModal, setOpenEditModal] = useState(false);
  const handleCloseEditModal = () => setOpenEditModal(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);
  const staffRoles = [
    {
      id: 1,
      nm: "Account Officer",
    },
    {
      id: 2,
      nm: "Admission Officer",
    },
    {
      id: 3,
      nm: "Admission Officer",
    },
    {
      id: 4,
      nm: "HR",
    },
  ];

  return (
    <div className="w-full bg-white p-4">
      <div className="flex justify-between items-center pb-4 border-b border-gray-300 ">
        <p className=" text-2xl text-bold">Custom Roles</p>
        <Button
          onClick={handleOpen}
          variant="default"
          className="flex gap-2 items-center w-[15%] text-sm"
        >
          <AddRoundedIcon />
          Add
        </Button>
      </div>

      <div className="w-full my-5  vertical_layout2 p-5">
        <div className="horizontal_layout2 w-full">
          <p className=" text-1xl text-bold"> Role</p>
          <p className=" text-sm text-normal"> Action</p>
        </div>

        {staffRoles.map((item) => {
          return (
            <div className="horizontal_layout2 w-full my-3" key={item.id}>
              <p className=" text-1xl text-normal">{item.nm}</p>
              <div className=" flex  gap-1 items-center">
                <EditNoteRoundedIcon
                  onClick={() => setOpenEditModal(true)}
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

      {/* modal for edit roles */}
      <ModalComponent open={openEditRoleModal} close={handleCloseEditModal}>
        <EditRole />
      </ModalComponent>
      {/* modal for edit roles end */}
    </div>
  );
};

export default ListRoles;
