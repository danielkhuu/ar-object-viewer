// scripts.js

// Function to change model
function changeModel() {
    const modelEntity = document.getElementById('model');
    const currentModel = modelEntity.getAttribute('gltf-model');
    let newModel, newScale, newPosition;

    if (currentModel.includes('model1.gltf')) {
        newModel = 'assets/model2.gltf';
        newScale = '0.1 0.1 0.1';
        newPosition = '0 -1 -1';
    } else if (currentModel.includes('model2.gltf')) {
        newModel = 'assets/model3.gltf';
        newScale = '0.1 0.1 0.1';
        newPosition = '0 -1 -1';
    } else {
        newModel = 'assets/model1.gltf';
        newScale = '0.01 0.01 0.01';
        newPosition = '-.4 -1 -1';
    }

    modelEntity.setAttribute('gltf-model', newModel);
    modelEntity.setAttribute('scale', newScale);
    modelEntity.setAttribute('position', newPosition);
}
// Function to increase the scale of the model
function increaseScale() {
    const modelEntity = document.getElementById('model');
    let currentScale = modelEntity.getAttribute('scale');
    
    // Increase scale by multiplying each component by 1.1
    const newScale = {
        x: currentScale.x * 1.1,
        y: currentScale.y * 1.1,
        z: currentScale.z * 1.1
    };
    
    modelEntity.setAttribute('scale', `${newScale.x} ${newScale.y} ${newScale.z}`);
}

// Function to decrease the scale of the model
function decreaseScale() {
    const modelEntity = document.getElementById('model');
    let currentScale = modelEntity.getAttribute('scale');
    
    // Decrease scale by multiplying each component by 0.9
    const newScale = {
        x: currentScale.x * 0.9,
        y: currentScale.y * 0.9,
        z: currentScale.z * 0.9
    };
    
    modelEntity.setAttribute('scale', `${newScale.x} ${newScale.y} ${newScale.z}`);
}

// Function to adjust the position of the model along the x, y, or z axis
function adjustPosition(axis, amount) {
    const modelEntity = document.getElementById('model');
    let currentPosition = modelEntity.getAttribute('position');

    let newPosition = { ...currentPosition }; // Copy current position

    // Adjust the correct axis by the amount
    if (axis === 'x') {
        newPosition.x += amount;
    } else if (axis === 'y') {
        newPosition.y += amount;
    } else if (axis === 'z') {
        newPosition.z += amount;
    }

    modelEntity.setAttribute('position', `${newPosition.x} ${newPosition.y} ${newPosition.z}`);
}