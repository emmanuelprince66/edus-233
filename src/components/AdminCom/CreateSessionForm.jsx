"use client";

import React from "react";
import NoSession from "./NoSession";
import SessionForm from "./SessionForm";

const CreateSessionForm = ({
  setShowCreateSessionForm,
  showCreateSessionForm,
  handleClose,
}) => {
  return (
    <div className="w-full">
      {showCreateSessionForm ? (
        <SessionForm handleClose={handleClose} />
      ) : (
        <NoSession
          setShowCreateSessionForm={setShowCreateSessionForm}
          showCreateSessionForm={showCreateSessionForm}
          handleClose={handleClose}
        />
      )}
    </div>
  );
};

export default CreateSessionForm;
