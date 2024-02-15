function calculateEllipseArea(){
    const majorRadius = getInputValueById('ellipse-major-radius')
    const minorRadius = getInputValueById('ellipse-minor-radius')
    const area = 3.14 * majorRadius * minorRadius;
    setInnerTextById('ellipse-area', area);
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function setInnerTextById (elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}
const nameOfOrganization = document.getElementById("name").value;

console.log(nameOfOrganization);