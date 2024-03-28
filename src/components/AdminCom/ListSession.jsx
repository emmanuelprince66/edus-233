"use client";

import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Input } from "../ui/input";
import { useState } from "react";
import { Button } from "../ui/button";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

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
import TermTableData from "./TermTableData";

const ListSession = ({
  setSessionExist,
  sessionExist,
  setShowCreateSessionForm,
  showCreateSessionForm,
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);
  const [showSession, setShowSession] = useState(true);

  const handleShowCreateSessionForm = () => {
    setShowCreateSessionForm((prev) => !showCreateSessionForm);
    setSessionExist((prev) => !sessionExist);
  };

  const sessionData = [
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
      stat: "active",
    },
  ];

  return (
    <div className="w-full ">
      <div className="flex gap-3 items-center my-3">
        <Button
          onClick={() => setShowSession(true)}
          className={`text-primary_blue_4 hover:bg-primary_blue-2 text-sm w-[100px] ${
            showSession
              ? "bg-primary_blue_2 border-b-[2px] border-primary_blue_4"
              : "bg-primary_blue_3"
          }`}
        >
          Session
        </Button>
        <Button
          onClick={() => setShowSession(false)}
          className={`text-primary_blue_4 hover:bg-primary_blue-2  text-sm w-[100px]  ${
            !showSession
              ? "bg-primary_blue_2 border-b-[2px] border-primary_blue_4"
              : "bg-primary_blue_3"
          }`}
        >
          Terms
        </Button>
      </div>
      {showSession ? (
        <>
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
                    <TableCell className="font-bold text-1xl edu">
                      S/N
                    </TableCell>
                    <TableCell className="font-bold text-1xl edu">
                      SESSION NAME
                    </TableCell>
                    <TableCell className="font-bold text-1xl edu">
                      START DATE
                    </TableCell>
                    <TableCell className="font-bold text-1xl edu">
                      END DATE
                    </TableCell>
                    <TableCell className="font-bold text-1xl edu">
                      STATUS
                    </TableCell>
                    <TableCell className="font-bold text-1xl edu">
                      ACTION
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {sessionData &&
                  Array.isArray(sessionData) &&
                  sessionData.length > 0 ? (
                    sessionData.map((item, i) => (
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
              count={sessionData?.length || 0}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={(event, newPage) => setPage(newPage)}
              // onRowsPerPageChange is removed as the number of rows per page is fixed
            />
          </div>
        </>
      ) : (
        <TermTableData
          handleShowCreateSessionForm={handleShowCreateSessionForm}
        />
      )}
    </div>
  );
};

export default ListSession;
