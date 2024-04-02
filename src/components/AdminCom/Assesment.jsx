import React from "react";
import { useState } from "react";
import CreateAssessment from "./CreateAssessment";
import ListAssesment from "./ListAssesment";
import ModalComponent from "../ui/ModalComponent";
import EditAssessment from "./EditAssessment";

const Assesment = () => {
  const [showCreateAssesment, setShowCreateAssesment] = useState(false);
  const [showEditListAssessmentModal, setShowEditAssessmentModal] =
    useState(false);
  const handleCloseEditListAssessmentModal = () =>
    setShowEditAssessmentModal(false);
  return (
    <div className="w-full">
      {showCreateAssesment ? (
        <CreateAssessment />
      ) : (
        <ListAssesment
          setShowEditAssessmentModal={setShowEditAssessmentModal}
          setShowCreateAssesment={setShowCreateAssesment}
        />
      )}

      <ModalComponent
        open={showEditListAssessmentModal}
        close={handleCloseEditListAssessmentModal}
      >
        <EditAssessment />
      </ModalComponent>
    </div>
  );
};

export default Assesment;
