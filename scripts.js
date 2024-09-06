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
