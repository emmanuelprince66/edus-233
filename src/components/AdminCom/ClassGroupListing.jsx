import React from "react";
import { useState } from "react";
import { Input } from "../ui/input";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { Button } from "../ui/button";

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
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import Checkbox from "@mui/material/Checkbox";

const ClassGroupListing = ({ handleShowCreateClassGroup }) => {
  const classGroup = [
    {
      id: 1,
      nm: "A",
      sub: "Science",
    },
    {
      id: 2,
      nm: "B",
      sub: "Science",
    },
    {
      id: 3,
      nm: "C",
      sub: "Science",
    },
    {
      id: 4,
      nm: "D",
      sub: "Science",
    },
  ];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);
  return (
    <div className="w-full flex flex-col items-end">
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
          onClick={handleShowCreateClassGroup}
          variant="default"
          className="flex gap-2 items-center w-full text-sm"
        >
          <AddRoundedIcon />
          Create
        </Button>
      </div>
      {/* table data */}
      <div className="w-full">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 100, padding: "8px" }}>
            <TableHead>
              <TableRow>
                <TableCell className="font-bold text-1xl edu">
                  Grade Type
                </TableCell>
                <TableCell className="font-bold text-1xl edu">
                  Sub Level
                </TableCell>

                <TableCell className="font-bold text-1xl edu text-right">
                  ACTION
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {classGroup &&
              Array.isArray(classGroup) &&
              classGroup.length > 0 ? (
                classGroup.map((item, i) => (
                  <TableRow key={item.id}>
                    <TableCell className="edu flex items-center gap-2 ">
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
                      <p className="text-bold text-1xl ">{item?.nm}</p>
                    </TableCell>

                    <TableCell className="edu">{item?.sub}</TableCell>
                    <TableCell className="edu flex justify-end pb-5 ">
                      <div className=" flex  gap-1 items-center">
                        <EditNoteRoundedIcon
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
          count={classGroup?.length || 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(event, newPage) => setPage(newPage)}
          // onRowsPerPageChange is removed as the number of rows per page is fixed
        />
      </div>

      {/* btn */}
      <div className="w-full flex justify-end">
        <Button
          // onClick={handleShowCreateSessionForm}
          variant="default"
          className="flex gap-2 items-center w-full max-w-[30%] text-sm"
        >
          <AddRoundedIcon />
          Assign Class
        </Button>
      </div>
    </div>
  );
};

export default ClassGroupListing;
