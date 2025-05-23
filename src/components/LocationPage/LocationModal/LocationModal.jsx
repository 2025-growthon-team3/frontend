import React, { useState } from "react";
import * as L from "./LocationModal.style";
import UnmatchedVolunteerList from "../../HomePage/UnmatchedVolunteerList/UnmatchedVolunteerList";

import x from "../../../assets/images/xmark.png";

const LocationModal = ({ institution, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose(); // 애니메이션 끝나고 닫기
    }, 300); // slideDown duration과 맞춰야 함
  };

  return (
    <L.Container onClick={onClose}>
      <L.ModalContainer
        $isClosing={isClosing}
        onClick={(e) => e.stopPropagation()}
      >
        <L.Title>{institution.name}</L.Title>
        <L.CloseButton onClick={handleClose}>
          <L.CloseIcon src={x} alt="Close" />
        </L.CloseButton>
        <L.ScrollableVolunteerList id="scrollableDiv">
          <UnmatchedVolunteerList />
        </L.ScrollableVolunteerList>
      </L.ModalContainer>
    </L.Container>
  );
};

export default LocationModal;
