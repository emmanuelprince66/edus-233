import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Checkbox } from "@mui/material";

const CreateRoles = () => {
  return (
    <div className="w-full">
      <div className="vertical_layout2">
        <p className=" text-2xl text-bold">Create Custom Roles</p>
        <div className="vertical_layout2 gap-1 my-5">
          <p className="text-gray-700 text-[12px] ">Role Name</p>
          <Input
            placeholder="Enter Role Name.."
            className="w-[250px] rounded-r-none"
          />
        </div>
        <div className="w-full  gap-3 ">
          <p className=" text-1xl col-span-3  text-bold items-start">
            Access Permissions
          </p>

          <div className="grid grid-cols-3 gap-3">
            <div className=" vertical_layout2 col-span-1  my-4  ">
              <div className="horizontal_layout gap-2 mb-2">
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
                <p className="text-normal text-gray-500 ">Permissions</p>
              </div>
              <div className="horizontal_layout gap-2 mb-2">
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
                <p className="text-normal text-gray-500 ">Permissions</p>
              </div>
              <div className="horizontal_layout gap-2 mb-2">
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
                <p className="text-normal text-gray-500 ">Permissions</p>
              </div>
            </div>
            <div className=" vertical_layout2 col-span-1  my-4  ">
              <div className="horizontal_layout gap-2 mb-2">
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
                <p className="text-normal text-gray-500 ">Permissions</p>
              </div>
              <div className="horizontal_layout gap-2 mb-2">
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
                <p className="text-normal text-gray-500 ">Permissions</p>
              </div>
              <div className="horizontal_layout gap-2 mb-2">
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
                <p className="text-normal text-gray-500 ">Permissions</p>
              </div>
            </div>
            <div className=" vertical_layout2 col-span-1  my-4 ">
              <div className="horizontal_layout gap-2 mb-2">
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
                <p className="text-normal text-gray-500 ">Permissions</p>
              </div>
              <div className="horizontal_layout gap-2 mb-2">
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
                <p className="text-normal text-gray-500 ">Permissions</p>
              </div>
              <div className="horizontal_layout gap-2 mb-2">
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
                <p className="text-normal text-gray-500 ">Permissions</p>
              </div>
            </div>
          </div>

          {/* sub btn */}
          <div className=" w-full mt-5 ">
            <div className="flex max-w-[50%] mx-auto  gap-4">
              <Button
                variant="outline"
                className="border border-primary_blue_4"
                size="lg"
                // onClick={handleClose}
              >
                Cancel
              </Button>
              <Button variant="default" size="lg">
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRoles;
