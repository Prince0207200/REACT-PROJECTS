import React from "react";
import './Cv.css'

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
    <div className="cv">
      
      <button
      className="cvopenbutton"
        onClick={handleOpen}
        
        
      >
        Open CV
      </button>

      
      <button
        onClick={handleDownload}
        className="cvdownloadbutton"
      >
        Download CV
      </button>
    </div>
  );
};

export default Cv;
