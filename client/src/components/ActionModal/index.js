import React from "react";
import Close from "../../assets/close.png";

const ActionModal = ({ visible, handleClose }) => {
  console.log(visible);
  if (!visible) {
    return null;
  }
  return (
    <div
      onClick={() => handleClose()}
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: "10",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          zIndex: "11",
          width: "600px",
          height: "400px",
          background: "white",
          borderRadius: "20px",
          padding: "20px",
          position: "relative",
        }}
      >
        <div>
          <img
            onClick={() => handleClose()}
            style={{
              width: "20px",
              position: "absolute",
              right: "20px",
              cursor: "pointer",
            }}
            src={Close}
            alt="x"
          />
        </div>
      </div>
    </div>
  );
};

export default ActionModal;
