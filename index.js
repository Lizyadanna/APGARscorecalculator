
const calcButton = document.querySelector('.calc-btn');
const apgarAppearanceSelect = document.querySelector('#appearance');
const apgarPulseSelect = document.querySelector('#pulse');
const apgarGrimaceSelect = document.querySelector('#grimace');
const apgarActivitySelect = document.querySelector('#activity');
const apgarRespirationSelect = document.querySelector('#respiration')
const showScore = document.querySelector('h2')

calcButton.addEventListener('click', function() {
    const appearance = parseInt(apgarAppearanceSelect.value);

    const pulse = parseInt(apgarPulseSelect.value);
   
    const grimace = parseInt(apgarGrimaceSelect.value);
   

    const activity = parseInt(apgarActivitySelect.value);
    

    const respiration = parseInt(apgarRespirationSelect.value);

if (isNaN(appearance) || isNaN(pulse) || isNaN(grimace) || isNaN(activity) || isNaN(respiration)) {
    showError();
    highlightInvalidSelects();
    return;
 }

        const totalScore = appearance + pulse + grimace + activity + respiration
         console.log(totalScore);

         showScore.innerText = `APGAR Score: ${totalScore}`
    }
);

function highlightInvalidSelects() {
    if (isNaN(parseInt(apgarAppearanceSelect.value))) {
        apgarAppearanceSelect.classList.add('select-error');
    }
    if (isNaN(parseInt(apgarPulseSelect.value))) {
        apgarPulseSelect.classList.add('select-error');
    }
    if (isNaN(parseInt(apgarGrimaceSelect.value))) {
        apgarGrimaceSelect.classList.add('select-error');
    }
    if (isNaN(parseInt(apgarActivitySelect.value))) {
        apgarActivitySelect.classList.add('select-error');
    }
    if (isNaN(parseInt(apgarRespirationSelect.value))) {
        apgarRespirationSelect.classList.add('select-error');
    }
}

function showError() {
    alert('Please select all fields.');
}