// function calculateParallelogramArea(){
//     // const baseInput = document.getElementById('parallelogram-base');
//     // const baseText = baseInput.value;
//     // const base = parseFloat(baseText);
//     // console.log(base);

//     const base = getParallelogramBase();
//     console.log(base);
    

    // get triangle height value
    // const triangleHeightInput = document.getElementById('parallelogram-height');
    // const triangleHeightText = triangleHeightInput.value;
    // const height = parseFloat(triangleHeightText);
    // // console.log(height);

    // const area = base * height;
    // console.log('area of the parallelogram is:', area);

    // // display triangle area
    // const triangleAreaSpan = document.getElementById('parallelogram-area');
    // triangleAreaSpan.innerText = area;

// }

// function getParallelogramBase () {
//     const baseInput = document.getElementById('parallelogram-base');
//     const baseText = baseInput.value;
//     const base = parseFloat(baseText);
//     return base;
// }


function calculateParallelogramArea() {

    const base = getInputValueById('parallelogram-base');
    console.log('base value', base);

    const height = getInputValueById('parallelogram-height');
    console.log('height value', height);

    const area = base * height;
    console.log('area of the parallelogram is:', area);

    setInnerTextById('parallelogram-area', area);

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
