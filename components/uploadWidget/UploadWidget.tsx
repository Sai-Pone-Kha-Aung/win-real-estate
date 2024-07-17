import React, { createContext, useEffect, useState, useContext } from "react";

// Define the types for the props
interface UploadWidgetProps {
  uwConfig: object;
  setPublicId: (id: string) => void;
  setState: (value: string[] | ((prev: string[]) => string[])) => void; 
}

// Define the context type
interface CloudinaryScriptContextType {
  loaded: boolean;
}

// Create a context to manage the script loading state
const CloudinaryScriptContext = createContext<CloudinaryScriptContextType | undefined>(undefined);

const UploadWidget: React.FC<UploadWidgetProps> = ({ uwConfig, setPublicId, setState }) => {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    // Check if the script is already loaded
    if (!loaded) {
      const uwScript = document.getElementById("uw");
      if (!uwScript) {
        // If not loaded, create and load the script
        const script = document.createElement("script");
        script.setAttribute("async", "");
        script.setAttribute("id", "uw");
        script.src = "https://upload-widget.cloudinary.com/global/all.js";
        script.addEventListener("load", () => setLoaded(true));
        document.body.appendChild(script);
      } else {
        // If already loaded, update the state
        setLoaded(true);
      }
    }
  }, [loaded]);

  

  const initializeCloudinaryWidget = () => {
    if (loaded) {
      const myWidget = (window as any).cloudinary.createUploadWidget(
        uwConfig,
        (error: any, result: any) => {
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
            setState((prev: string[]) => [...prev, result.info.url]);
          }
        }
      );

      document.getElementById("upload_widget")?.addEventListener(
        "click",
        function () {
          myWidget.open();
        },
        false
      );
    }
  };

  return (
    <CloudinaryScriptContext.Provider value={{ loaded }}>
      <button
        id="upload_widget"
        className="cloudinary-button"
        onClick={initializeCloudinaryWidget}
      >
        Upload
      </button>
    </CloudinaryScriptContext.Provider>
  );
};

export default UploadWidget;
export { CloudinaryScriptContext };   
