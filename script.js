let middleLabel = document.getElementById('middle-label')
let cautionsSection = document.getElementById('cautions')
let cautionsInput = document.getElementById('caution-input')
let cautionsData = document.getElementById('cautions-data')

let instructionsInput = document.getElementById('instructions-input')
let instructions = document.getElementById('instructions')
let instructionsData = document.getElementById('instructions-data')

let myLabel = document.getElementById('box')
let myLabelColor;

let patientName = document.getElementById('patient-name')
let patientNameInput = document.getElementById('patient-name-input')

let medicationName = document.getElementById('medication-name')
let madicationNameInput = document.getElementById('medication-name-input')

let dosage = document.getElementById('dosage')
let dosageInput = document.getElementById('dosage-input')
let dosageUnitInput = document.getElementById('dosage-unit-input')
let dosageUnit = document.getElementById('unit-dosage')

let pills = document.getElementById('number-of-pills')
let pillsInput = document.getElementById('pills-input')
let pillsBox = document.getElementById('pills')

let refills = document.getElementById('number-of-refills')
let refillsInput = document.getElementById('refills-input')
let refillsTotal = document.getElementById('total-num-refills')
let refillsTotalInput = document.getElementById('refills-input-total')

let refillsBox = document.getElementById('refills')

let myBorderColor = document.getElementById('color-input')

let dropDownMenu = document.getElementById('dropdown-iterations')

dropDownMenu.addEventListener('input', ()=>{
    console.log(dropDownMenu.value)

    if(dropDownMenu.value=='layout-2'){
            // patient name
        patientName.style.border ='none'
        patientName.style.transform ='rotate(0deg)'
        patientName.style.position ='relative'
        patientName.style.top ='0px'
        patientName.style.left ='5px'
        patientName.style.textAlign ='left'

            //medication name
        middleLabel.style.marginLeft = '5px'
        middleLabel.style.marginTop = '-10px'

           //refills
        refillsBox.style.bottom = '405px'
        refillsBox.style.left = '35px'
        refillsBox.style.textAlign = 'right'

            //cautions
        cautionsSection.style.transform = 'rotate(0deg)'
        cautionsSection.style.top = '268px'
        cautionsSection.style.left = '0px'
        cautionsSection.style.width = '100%'

        //pills 
        pillsBox.style.left = '35px';
        pillsBox.style.bottom = '310px';
        pillsBox.style.textAlign = 'right'
        
    }else if(dropDownMenu.value=='layout-1'){
             // patient name
        patientName.style.border ='1px solid black'
        patientName.style.transform ='rotate(-90deg)'
        patientName.style.position ='absolute'
        patientName.style.top ='180px'
        patientName.style.left ='-180px'
        patientName.style.textAlign ='center'

            //medication name
        middleLabel.style.marginLeft = '50px'
        middleLabel.style.marginTop = '0px'

            //refills
        refillsBox.style.bottom = '10px'
        refillsBox.style.left = '0px'
        refillsBox.style.textAlign = 'left'

         //cautions
         cautionsSection.style.transform = 'rotate(-90deg)'
         cautionsSection.style.top = '135px'
         cautionsSection.style.left = '335px'
         cautionsSection.style.width = '400px'

         //pills 
         pillsBox.style.left = '0px';
         pillsBox.style.bottom = '55px';
         pillsBox.style.textAlign = 'left'
    }
})




fillWithInput(patientNameInput, patientName, 'patientName')
fillWithInput(dosageInput, dosage)
fillWithInput(dosageUnitInput, dosageUnit)
fillWithInput(madicationNameInput,medicationName)
fillWithInput(refillsInput, refills)
fillWithInput(refillsTotalInput, refillsTotal)
fillWithInput(pillsInput, pills)
fillWithInput(instructionsData, instructionsInput)
fillWithInput(cautionsData, cautionsInput)

function fillWithInput(inputObject, outputObject){
    inputObject.addEventListener('input',()=>{
        outputObject.innerHTML = inputObject.value
    })
}

myBorderColor.addEventListener('input', ()=>{
    myLabel.style.border = `17px solid ${myBorderColor.value}`
    console.log(myBorderColor.value)
})



function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(cname) {
    if (!getCookie(cname) === undefined) {
        return true;
    } else {
        return false;
    }
}

const deleteAllCookies = () => {
    const cookies = document.cookie.split(";");
  
    for (const cookie of cookies) {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}


