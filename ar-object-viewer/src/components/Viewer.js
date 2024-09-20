import React, { useState } from 'react';

const Viewer = () => {
  // State to manage rotation along x-axis
  const [rotationX, setRotationX] = useState(270); // Initial rotation

  // Function to update the rotation by a given amount
  const rotateX = (amount) => {
    setRotationX((prevRotation) => prevRotation + amount);
  };

  return (
    <div>
      {/* AR.js Scene */}
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <a-scene embedded arjs>
              <a-marker preset="hiro">
                <a-entity 
                  id="model"
                  gltf-model="url(assets/model1.gltf)"
                  scale="0.5 0.5 0.5"
                  position="1 1 1"
                  rotation="${rotationX} 0 0">
                </a-entity>
              </a-marker>
              <a-entity camera></a-entity>
            </a-scene>
          `,
        }}
      ></div>

      {/* Buttons for rotating X axis */}
      <div className="button-container">
        <button onClick={() => rotateX(10)}>Rotate X +</button>
        <button onClick={() => rotateX(-10)}>Rotate X -</button>
      </div>

      {/* Styling */}
      <style jsx>{`
        .button-container {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: auto;
          text-align: center;
          z-index: 999;
        }
        .button-container button {
          padding: 10px 20px;
          font-size: 16px;
          margin: 5px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .button-container button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default Viewer;
