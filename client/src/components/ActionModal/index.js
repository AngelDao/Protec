import React from "react";
import Close from "../../assets/close.png";

const ActionModal = ({ visible, handleClose, title, content, send }) => {
  // console.log(visible);
  if (!visible) {
    return null;
  }

  const handleSend = () => {
    // send();
    handleClose();
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          zIndex: "8",
          width: "600px",
          height: "400px",
          background: "white",
          borderRadius: "20px",
          padding: "30px",
          position: "relative",
        }}
      >
        <img
          onClick={() => handleClose()}
          style={{
            width: "15px",
            position: "absolute",
            right: "20px",
            top: "35px",
            cursor: "pointer",
          }}
          src={Close}
          alt="x"
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "25px" }}>{title}</span>
          <span style={{ marginTop: "50px", textAlign: "center" }}>
            {content}
          </span>
          <div
            style={{
              width: "100%",
              position: "absolute",
              bottom: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              onClick={() => handleSend()}
              style={{
                width: "90%",
                marginTop: "80px",
                border: "2px solid black",
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "20px",
                cursor: "pointer",
              }}
            >
              <span>Execute Transaction</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionModal;
