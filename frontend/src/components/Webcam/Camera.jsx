{/*import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
    width: 1280,
    height: 720
}


const Camera = () => {
    const WebcamRef = useRef(null); // store ref in a variable init to null
    const [image, setImage ] = useState(null); // store image for uploading and possible retaking abilities
    const capture = useCallback(
        () => {
            const image = WebcamRef.current.getScreenshot(); // get a picture of camera 
            setImage(image);
        },
        [WebcamRef]
    );

    const upload = async () => {
        if (!image) {
            throw new Error('No image found.')
        }

        try {
            await fetch('localhost:8000/', { // need to add endpoint here
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({image: image }),  // base64 encoded str.
            });
            
        } catch (error) {
            throw new Error('Error uploading image')
        }

    }

    const retake = () => {
        setImage(null); // Set the image to null to be retaken
    };

    return (
        <div>
        {!image ? ( // if no image, display webcam with 
        <>
        <Webcam
            audio={false}
            ref={WebcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
        />
        <button onClick={capture}>Take Photo</button>
        </>
        ) : (
        <>
            <img src={image} alt="Captured Image"/>
            <div>
                <button onClick={upload}>Upload Photo</button>
                <button onClick={retake}>Retake Photo</button>
            </div>
            </>
        )}
        </div>
    );
};

export default Camera;

*/}
import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1280,
  height: 720,
};

const Camera = () => {
  const WebcamRef = useRef(null);
  const [image, setImage] = useState(null);

  const capture = useCallback(() => {
    const image = WebcamRef.current.getScreenshot();
    setImage(image);
  }, [WebcamRef]);

  const upload = async () => {
    if (!image) {
      throw new Error("No image found.");
    }

    try {
      await fetch("localhost:8000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: image }),
      });
    } catch (error) {
      throw new Error("Error uploading image");
    }
  };

  const retake = () => {
    setImage(null);
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "400px", // or 300px or whatever size you prefer
        aspectRatio: "16 / 9",
        margin: "0 auto",
      }}
    >
      {!image ? (
        <>
          <Webcam
            audio={false}
            ref={WebcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              borderRadius: "12px",
            }}
          />
          <button onClick={capture} style={{ marginTop: "10px" }}>Take Photo</button>
        </>
      ) : (
        <>
          <img
            src={image}
            alt="Captured"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              borderRadius: "12px",
            }}
          />
          <div style={{ marginTop: "10px" }}>
            <button onClick={upload}>Upload Photo</button>
            <button onClick={retake}>Retake Photo</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Camera;


