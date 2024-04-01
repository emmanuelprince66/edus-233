import React from "react";
import { Modal, Box } from "@mui/material";

const ModalComponent = ({ children, open, close }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "12px",
    width: "745px",
    bgcolor: "background.paper",
    p: 3,
  };
  return (
    <Modal
      open={open}
      a
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      PaperProps={{
        sx: {
          border: "none", // Remove the border
          boxShadow: "none", // Remove the box shadow
        },
      }}
    >
      <Box sx={style}>{children}</Box>
    </Modal>
  );
};

export default ModalComponent;
