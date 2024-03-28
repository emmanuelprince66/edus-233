"use client";

import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { Input } from "../ui/input";
import { useState } from "react";
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
import { Button } from "../ui/button";

const TermTableData = ({ handleShowCreateSessionForm }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);
  const termData = [
    {
      id: 1,
      nm: "First",
      startDate: "02/04/2023",
      endDate: "02/04/2023",
      stat: "active",
    },
    {
      id: 2,
      nm: "Second",
      startDate: "02/04/2023",
      endDate: "02/04/2023",
      stat: "Unactive",
    },
    {
      id: 3,
      nm: "Third",
      startDate: "02/04/2023",
      endDate: "02/04/2023",
      stat: "active",
    },
  ];
  return (
    <div className="w-full">
      <div className=" w-full my-3  flex justify-end ">
        <div className="flex gap-3 justify-end  min-w-[60%]">
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
            onClick={handleShowCreateSessionForm}
            variant="default"
            className="flex gap-2 items-center w-full text-sm"
          >
            <AddRoundedIcon />
            Create
          </Button>
        </div>
      </div>
      <div className="w-full">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 100, padding: "8px" }}>
            <TableHead
              sx={{
                background: "#C2E1FF",
              }}
            >
              <TableRow>
                <TableCell className="font-bold text-1xl edu">S/N</TableCell>
                <TableCell className="font-bold text-1xl edu">
                  SESSION NAME
                </TableCell>
                <TableCell className="font-bold text-1xl edu">
                  START DATE
                </TableCell>
                <TableCell className="font-bold text-1xl edu">
                  END DATE
                </TableCell>
                <TableCell className="font-bold text-1xl edu">STATUS</TableCell>
                <TableCell className="font-bold text-1xl edu">ACTION</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {termData && Array.isArray(termData) && termData.length > 0 ? (
                termData.map((item, i) => (
                  <TableRow key={item.id}>
                    <TableCell className="edu">
                      {page * rowsPerPage + i + 1}
                    </TableCell>
                    <TableCell className="edu">{item?.nm}</TableCell>
                    <TableCell className="edu">{item?.startDate}</TableCell>
                    <TableCell className="edu">{item?.endDate}</TableCell>
                    <TableCell>
                      <div className="flex items-center bg-green-200 rounded-md  justify-center ">
                        <p className="edu text-green-600 p-1">active</p>
                      </div>
                    </TableCell>
                    <TableCell className="edu">...</TableCell>
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
          count={termData?.length || 0}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(event, newPage) => setPage(newPage)}
          // onRowsPerPageChange is removed as the number of rows per page is fixed
        />
      </div>
    </div>
  );
};

export default TermTableData;
