import React from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useState } from "react";
import { Button } from "../ui/button";

import { Input } from "../ui/input";
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
import CreateGrade from "./CreateGrade";

const ShowGradeData = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);
  const [showGradeForm, setShowGradeForm] = useState(false);

  const gradeList = [
    {
      id: 1,
      nm: "PlayGroup",
    },
    {
      id: 2,
      nm: "Nursery",
    },
    {
      id: 3,
      nm: "Primary",
    },
    {
      id: 4,
      nm: "Secondary",
    },
  ];
  return (
    <>
      {showGradeForm ? (
        <CreateGrade />
      ) : (
        <>
          <div className="w-full flex justify-between items-center">
            <div className="vertical_layout2 gap-1 my-3">
              <p className="text-gray-800 font-bold text-1xl"> Grading</p>
              <p className="text-gray-300 text-[12px] ">Settings</p>
            </div>

            <div className="flex items-center gap-2 w-[55%]">
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
                onClick={() => setShowGradeForm(true)}
                variant="default"
                className="flex gap-2 items-center w-full text-sm"
              >
                <AddRoundedIcon />
                Create
              </Button>
            </div>
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

                    <TableCell className="font-bold text-1xl edu text-right">
                      ACTION
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {gradeList &&
                  Array.isArray(gradeList) &&
                  gradeList.length > 0 ? (
                    gradeList.map((item, i) => (
                      <TableRow key={item.id}>
                        <TableCell className="edu flex items-center gap-2">
                          {page * rowsPerPage + i + 1}
                          <p className="text-bold text-1xl">{item?.nm}</p>
                        </TableCell>

                        <TableCell className="edu text-right">...</TableCell>
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
              count={gradeList?.length || 0}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={(event, newPage) => setPage(newPage)}
              // onRowsPerPageChange is removed as the number of rows per page is fixed
            />
          </div>
        </>
      )}
    </>
  );
};

export default ShowGradeData;
