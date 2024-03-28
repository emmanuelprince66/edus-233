"use client";

import React, { useState } from "react";
import CreateSessionForm from "./CreateSessionForm";
import ListSession from "./ListSession";

const SchoolSession = ({ handleClose }) => {
  const [sessionExist, setSessionExist] = useState(true);
  const [showCreateSessionForm, setShowCreateSessionForm] = useState(false);

  return (
    <div className="w-full">
      {sessionExist ? (
        <ListSession
          setSessionExist={setSessionExist}
          setShowCreateSessionForm={setShowCreateSessionForm}
          showCreateSessionForm={showCreateSessionForm}
          sessionExist={sessionExist}
        />
      ) : (
        <CreateSessionForm
          setSessionExist={setSessionExist}
          setShowCreateSessionForm={setShowCreateSessionForm}
          showCreateSessionForm={showCreateSessionForm}
          handleClose={handleClose}
        />
      )}
    </div>
  );
};

export default SchoolSession;
