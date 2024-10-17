# Augmented Reality Object Viewer

This project is an augmented reality (AR) web application developed using A-Frame and AR.js. The application enables users to view and interact with 3D models via a marker-based AR experience directly on their mobile phones. The project is designed to be compatible with most modern web browsers that support WebAR.

![alt text](Demo%20Photos/PhotosCombined.PNG)

## Features

- **Marker-Based AR Experience:** Users can view and interact with 3D models by scanning predefined markers with their mobile devices.
- **Dynamic Model Switching:** The application supports switching between different 3D models dynamically.
- **Custom Scaling and Positioning:** Models can be scaled and positioned dynamically to fit the AR environment.

## Technologies Used

- **A-Frame:** A framework for building 3D and AR experiences on the web using HTML and JavaScript.
- **AR.js:** A library that brings AR capabilities to web browsers, enabling marker-based AR without the need for additional apps or software.
- **HTML/CSS:** For structuring and styling the user interface.
- **JavaScript:** Used for implementing interactive features, model manipulation, and overall application logic.

## Installation and Setup

To run this project locally, follow these steps:

1. **Clone the Repository:**
   ```
   git clone https://github.com/yourusername/ar-web-application.git
   cd ar-web-application
   ```
2. **Host the Application:**
   Ensure that you have a local server running (e.g., Live Server in VS Code).
   Run ngrok on the appropriate port (e.g., 5500) to expose the server for remote access.

3. **Run the Application:**
   Open the provided ngrok URL on a mobile device in a modern web browser (e.g., Safari) that supports WebAR.

## Usage

1. **Scan a Marker:** Point your mobile device's camera at the provided [ marker]( https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png ). The corresponding 3D model will appear in the AR view.
2. **Switch Models:** Use the on-screen button to switch between different models.
3. **Interact with Models:** Models can be interacted with based on the predefined functionality, such as rotating, scaling, or switching models.

## Future Enhancements

- **Interactive UI Elements:** Add buttons or gestures for users to interact with models (e.g., rotate, zoom) directly from the UI.
- **Additional Marker Support:** Expand the application to support a wider variety of markers, including custom designs.
- **User Model Upload:** Alows users to upload their own 3D models in formats such as GLTF, OBJ, or STL directly to the application while it is running. 

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
