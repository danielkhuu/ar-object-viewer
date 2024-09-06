// scripts.js

function changeModel() {
    const modelEntity = document.getElementById('model');
    const currentModel = modelEntity.getAttribute('gltf-model');
    let newModel, newScale, newPosition;

    if (currentModel.includes('model1.gltf')) {
        newModel = 'assets/model2.gltf';
        newScale = '0.1 0.1 0.1';
        newPosition = '-0.5 -1 -0.5';
    } else if (currentModel.includes('model2.gltf')) {
        newModel = 'assets/model3.gltf';
        newScale = '0.1 0.1 0.1';
        newPosition = '-1 -1 -0.7';
    } else {
        newModel = 'assets/model1.gltf';
        newScale = '0.01 0.01 0.01';
        newPosition = '-1.5 -1 -0.7';
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