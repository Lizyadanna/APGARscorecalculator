
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

        const totalScore = appearance + pulse + grimace + activity + respiration
         console.log(totalScore);

         showScore.innerText = `APGAR Score: ${totalScore}`
    }
);