const starOuter = document.getElementsByClassName('star-outer');
const starInner = document.getElementsByClassName('star-inner');
const starInner1 = document.getElementById('star-inner-1');
const starInner2 = document.getElementById('star-inner-2');
const starInner3 = document.getElementById('star-inner-3');
const starInner4 = document.getElementById('star-inner-4');
const starInner5 = document.getElementById('star-inner-5');
const openChart = document.getElementById('open-chart');
const dropDown = document.getElementById('dropdown');
const starFiveValue = document.getElementById('star-5-value');
const starFiveNumber = document.getElementById('star-5-number');
const starFourValue = document.getElementById('star-4-value');
const starFourNumber = document.getElementById('star-4-number');
const starThreeValue = document.getElementById('star-3-value');
const starThreeNumber = document.getElementById('star-3-number');
const starTwoValue = document.getElementById('star-2-value');
const starTwoNumber = document.getElementById('star-2-number');
const starOneValue = document.getElementById('star-1-value');
const starOneNumber = document.getElementById('star-1-number');
const avarageElement = document.getElementById('avarage');
const totalNumber = document.getElementById('total-number');
let five = 80;
let four = 14;
let three = 18;
let two = 3;
let one = 11;
let sum = 0;
let avarage = 0;
function calcValue(){
    sum = five+four+three+two+one;
    avarage = (5*five+4*four+3*three+2*two+1*one)/sum;
    avarage = avarage.toFixed(1);
    return avarage;
}
function calcChart(){
    starFiveValue.style.width = five/sum*100+'%';
    starFiveNumber.innerHTML = five;
    starFourValue.style.width = four/sum*100+'%';
    starFourNumber.innerHTML = four;
    starThreeValue.style.width = three/sum*100+'%';
    starThreeNumber.innerHTML = three;
    starTwoValue.style.width = two/sum*100+'%';
    starTwoNumber.innerHTML = two;
    starOneValue.style.width = one/sum*100+'%';
    starOneNumber.innerHTML = one;
    avarageElement.innerHTML = avarage;
    totalNumber.innerHTML = sum;
}
let starValue = calcValue();
calcChart()
getValue(starValue);
console.log('main');
for(let i = 0; i < starInner.length; i++){
    starInner[i].addEventListener('mouseover', () => {
        starInner1.style.width = '0';
        starInner2.style.width = '0';
        starInner3.style.width = '0';
        starInner4.style.width = '0';
        starInner5.style.width = '0';
        starOuter[i].addEventListener('mouseleave', () =>{
            getValue(starValue);
        });
    });
    starOuter[i].addEventListener('click', (value) => {
        value = (i+1);
        if(value === 1){
            one++;
            console.log('one: '+one);
            starValue = calcValue();
            calcChart();
        } else if(value === 2){
            two++;
            console.log('two: '+two);
            starValue = calcValue();
            calcChart();
        } else if(value === 3){
            three++;
            console.log('three: '+three);
            starValue = calcValue();
            calcChart();
        } else if(value === 4){
            four++;
            console.log('four: '+four);
            starValue = calcValue();
            calcChart();
        } else if(value === 5){
            five++;
            console.log('five: '+five);
            starValue = calcValue();
            calcChart();
        }
        starOuter[i].addEventListener('mouseleave', () => {
            console.log('starValue: '+starValue);
            getValue(starValue);
        });
    });
}
function getValue(value){
    console.log('value: '+ value);
    //console.log('inside getValue()');
    let last;
    let check = true;
    const sub1 = Math.floor(value) * 100;
    const sub2 = value * 100;
    if(sub1 != sub2){
        last = sub2 - sub1;
        check = true;
    } else {
        check = false;
    }
    console.log('sub2: '+sub2);
    console.log('sub1: '+sub1);


    if(sub1 === 0){
        starInner1.style.width = last+'%';
    } else if (sub1 === 100){
        //console.log('Inside else if(sub1 === 100)')
        starInner1.style.width = '100%';
        //console.log(starInner1.style.width);
        if(sub2 > 100 && check){
            starInner2.style.width = last+'%';
        }
    } else if (sub1 === 200){
        starInner1.style.width = '100%';
        starInner2.style.width = '100%';
        if(sub2 > 200 && check){
            starInner3.style.width = last+'%';
        }
    } else if (sub1 === 300){
        starInner1.style.width = '100%';
        starInner2.style.width = '100%';
        starInner3.style.width = '100%';
        if(sub2 > 300 && check){
            starInner4.style.width = last+'%';
        }
    } else if (sub1 === 400){
        starInner1.style.width = '100%';
        starInner2.style.width = '100%';
        starInner3.style.width = '100%';
        starInner4.style.width = '100%';
        if(sub2 > 400 && check){
            starInner5.style.width = last+'%';
        }
    } else if (sub1 === 500){
        starInner1.style.width = '100%';
        starInner2.style.width = '100%';
        starInner3.style.width = '100%';
        starInner4.style.width = '100%';
        starInner5.style.width = '100%';
    } else {
        console.log('Something went wrong!')
    }
}
openChart.addEventListener('click', () => {
    openChart.classList.toggle('opened-rating-chart');
    dropDown.classList.toggle('dropdown-show');
    const typ = document.createAttribute('title');
    typ.value = 'Open Chart';
    if(openChart.classList.contains('opened-rating-chart')){
        typ.value = 'Close Chart';
    }
    openChart.attributes.setNamedItem(typ);
});
