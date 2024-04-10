import React, { useState } from "react";

import { Input } from "../ui/input";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

import { Button } from "../ui/button";
import { Select, MenuItem, Box } from "@mui/material";
const EditAssessment = () => {
  const [assesmentInputGroups, setAssesmentInputGroups] = useState([
    { id: 1, values: ["", "", ""] },
  ]);

  const handleAddAssesmentGroup = () => {
    setAssesmentInputGroups((prevGroups) => [
      ...prevGroups,
      { id: prevGroups.length + 1, values: ["", "", ""] },
    ]);
  };

  const handleInputChange = (groupIndex, inputIndex, value) => {
    setAssesmentInputGroups((prevsGroup) => {
      const updatedGroups = [...prevsGroup];
      updatedGroups[groupIndex].values[inputIndex] = value;
      return updatedGroups;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {};
    assesmentInputGroups.forEach((group, groupIndex) => {
      group.values.forEach((value, inputIndex) => {
        let inputName;
        if (inputIndex === 0) {
          inputName = "Assessment Name";
        } else if (inputIndex === 1) {
          inputName = "Assessment Percent";
        } else {
          inputName = "Assessment Type";
        }
        formData[`${inputName} ${groupIndex + 1}`] = value;
      });
    });
    console.log(formData);
  };
  
  return (
    <div className="w-full vertical_layout2 ">
      <div className="vertical_layout2 gap-1 my-3">
        <p className="text-gray-800 font-bold text-1xl"> Edit Assessment</p>
        <p className="text-gray-300 text-[12px] ">Settings</p>
      </div>

      {/* form starts */}

      <form action="" onSubmit={handleSubmit} className="w-full">
        {assesmentInputGroups.map((group, groupIndex) => (
          <div className="grid gap-2 grid-cols-3 my-3" key={group.id}>
            {group.values.map((value, inputIndex) => {
              if (inputIndex === 1) {
                return (
                  <div
                    className="vertical_layout2 gap-1 "
                    key={`input_${groupIndex}_${inputIndex}`}
                  >
                    <p className="text-gray-500 text-[12px] ">
                      Assessment Percent
                    </p>
                    <div className="flex gap-0 items-center w-full">
                      <Input
                        placeholder="E.g 70"
                        className="w-[100%] rounded-r-none"
                        value={value}
                        onChange={(e) =>
                          handleInputChange(
                            groupIndex,
                            inputIndex,
                            e.target.value
                          )
                        }
                      />
                      <div className="p-[9.8px] w-[30%]  flex items-center justify-center border border-r-[2px]  text-gray-500 rounded-r-[5px]   ">
                        %
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div
                    className="vertical_layout2 gap-1 col-span-1 w-full"
                    key={`input_${groupIndex}_${inputIndex}`}
                  >
                    <p className="text-gray-500 text-[12px] ">
                      {inputIndex === 1 ? "Assessment Name" : "Assessment Type"}
                    </p>
                    <Input
                      placeholder={`${inputIndex === 0 ? "Exam" : "Exam"}`}
                      className="w-[100%] rounded-r-none"
                      value={value}
                      onChange={(e) =>
                        handleInputChange(
                          groupIndex,
                          inputIndex,
                          e.target.value
                        )
                      }
                    />
                  </div>
                );
              }
            })}
          </div>
        ))}

        <div className="w-full flex justify-end mt-4">
          <Button
            onClick={handleAddAssesmentGroup}
            variant="default"
            className="flex gap-2 items-center w-full max-w-[30%] text-sm"
          >
            <AddRoundedIcon />
            Add Another
          </Button>
        </div>

        {/* sub btn */}
        <div className=" w-full mt-5 col-span-2 ">
          <div className="flex max-w-[50%] mx-auto  gap-4">
            <Button
              variant="outline"
              className="border border-primary_blue_4"
              size="lg"
              // onClick={handleClose}
            >
              Cancel
            </Button>
            <Button type="submit" variant="default" size="lg">
              Save
            </Button>
          </div>
        </div>
      </form>

      {/* form end */}
    </div>
  );
};

export default EditAssessment;
