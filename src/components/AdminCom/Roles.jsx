"use client";

import React from "react";
import { useState } from "react";
import ListRoles from "./ListRoles";
import NoRoles from "./NoRoles";
import ModalComponent from "../ui/ModalComponent";
import CreateRoles from "./CreateRoles";
const Roles = () => {
  const [showRolesList, setShowRolesList] = useState(false);
  const [openCreateRolesModal, setOpenCreateRolesModal] = useState(false);
  const handleCloseCreateRolesModal = () => setOpenCreateRolesModal(false);
  const handleOpenCreateRolesModal = () => setOpenCreateRolesModal(true);

  const handleCloseShowRolesList = () => setShowRolesList(false);
  return (
    <div className="p-2 w-full">
      {!showRolesList ? (
        <ListRoles handleOpen={handleOpenCreateRolesModal} />
      ) : (
        <NoRoles handleOpen={handleOpenCreateRolesModal} />
      )}

      {/* create roles modal component */}

      <ModalComponent
        open={openCreateRolesModal}
        close={handleCloseCreateRolesModal}
      >
        <CreateRoles />
      </ModalComponent>
      {/* create roles modal component end */}
    </div>
  );
};

export default Roles;
