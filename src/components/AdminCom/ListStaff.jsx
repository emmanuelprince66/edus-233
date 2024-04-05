import React from "react";
import { useState } from "react";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

import { Button } from "../ui/button";
import ModalComponent from "../ui/ModalComponent";
import EditStaffProfile from "./EditStaffProfile";
import CreateStaffProfile from "./CreateStaffProfile";
const ListStaff = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);

  const [openEditStaffModal, setOpenEditStaffModal] = useState(false);
  const [openCreateStaffModal, setOpenCreateStaffModal] = useState(false);

  const handleCloseCreateStaffModal = () => setOpenCreateStaffModal(false);
  const handleCloseEditStaffModal = () => setOpenEditStaffModal(false);
  const staffRoles = [
    {
      id: 1,
      nm: "Nwachi Victory",
      role: "Administrative Staff",
    },
    {
      id: 2,
      nm: "Sanusi Khadija",
      role: "Teacher",
    },
    {
      id: 3,
      nm: "Patrick Collins",
      role: "Administrative Staff",
    },
    {
      id: 4,
      nm: "Nwachi Victory",
      role: "Administrative Staff",
    },
    {
      id: 5,
      nm: "Nwachi Victory",
      role: "Administrative Staff",
    },
  ];

  return (
    <div className="w-full bg-white p-4">
      <div className="flex justify-between items-center pb-4 border-b border-gray-300 ">
        <p className=" text-2xl text-bold">Staff List</p>
        <Button
          onClick={() => setOpenCreateStaffModal(true)}
          variant="default"
          className="flex gap-2 items-center w-[15%] text-sm"
        >
          <AddRoundedIcon />
          Add
        </Button>
      </div>

      <div className="w-full my-5">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 100, padding: "8px" }}>
            <TableHead
              sx={{
                background: "#fff",
              }}
            >
              <TableRow>
                <TableCell className="font-bold text-1xl edu">S/N</TableCell>
                <TableCell className="font-bold text-1xl edu">NAME</TableCell>
                <TableCell className="font-bold text-1xl edu">Role</TableCell>

                <TableCell className="font-bold text-1xl edu">ACTION</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {staffRoles &&
              Array.isArray(staffRoles) &&
              staffRoles.length > 0 ? (
                staffRoles.map((item, i) => (
                  <TableRow key={item.id}>
                    <TableCell className="edu">
                      {page * rowsPerPage + i + 1}
                    </TableCell>
                    <TableCell className="edu">{item?.nm}</TableCell>
                    <TableCell className="edu">{item?.role}</TableCell>
                    <TableCell className="edu ">
                      <div className=" flex  gap-1 items-center">
                        <EditNoteRoundedIcon
                          onClick={() => setOpenEditStaffModal(true)}
                          sx={{ color: "#001358", cursor: "pointer" }}
                        />
                        <DeleteForeverRoundedIcon
                          sx={{ color: "#001358", cursor: "pointer" }}
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan="7">No data found</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[]}
          component="div"
          count={staffRoles?.length || 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(event, newPage) => setPage(newPage)}
          // onRowsPerPageChange is removed as the number of rows per page is fixed
        />
      </div>

      {/* Create Staff Profile Modal Start */}

      <ModalComponent
        open={openCreateStaffModal}
        close={handleCloseCreateStaffModal}
      >
        <CreateStaffProfile />
      </ModalComponent>
      {/* Create Staff Profile Modal End */}

      {/* Edit Staff Profile Modal Start */}

      <ModalComponent
        open={openEditStaffModal}
        close={handleCloseEditStaffModal}
      >
        <EditStaffProfile />
      </ModalComponent>
      {/* Edit Staff Profile Modal End */}
    </div>
  );
};

export default ListStaff;
