import React from "react";

const Cv = () => {
  const cvPath = "/mycv.pdf"; // Directly accessible from 'public' folder

  const handleOpen = () => {
    window.open(cvPath, "_blank"); // Opens in a new tab
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "Prince_Gupta_CV.pdf"; // Custom filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Cleanup
  };

  return (
    <div style={{ display: "flex", gap: "15px" }}>
      {/* Open CV Button */}
      <button
      className="cvopenbutton"
        onClick={handleOpen}
        
        onMouseEnter={(e) => {
          e.target.style.background = "red";
          e.target.style.color = "white";
        }}
        onMouseLeave={(e) => {
          e.target.style.background = "transparent";
          e.target.style.color = "red";
        }}
      >
        Open CV
      </button>

      {/* Download CV Button */}
      <button
        onClick={handleDownload}
        className="cvdownloadbutton"
        onMouseEnter={(e) => {
          e.target.style.background = "red";
          e.target.style.color = "white";
        }}
        onMouseLeave={(e) => {
          e.target.style.background = "transparent";
          e.target.style.color = "red";
        }}
      >
        Download CV
      </button>
    </div>
  );
};

export default Cv;
