
document.getElementById('btn-bold').addEventListener('click', function () {

    getTextAreaStyle('font-bold');

    // const textArea =  document.getElementById('textarea');
    // textArea.style.fontWeight = '900';
})

document.getElementById('btn-italic').addEventListener('click', function () {

    getTextAreaStyle('italic');
})


document.getElementById('btn-underline').addEventListener('click', function () {

    getTextAreaStyle('underline');
})
document.getElementById('btn-left').addEventListener('click', function () {
    
    getTextAreaTextStyle('left');
})

document.getElementById('btn-center').addEventListener('click', function () {

    getTextAreaTextStyle('center');
})
document.getElementById('btn-right').addEventListener('click', function () {

    getTextAreaTextStyle('right');
}) 
document.getElementById('btn-justify').addEventListener('click', function () {

    getTextAreaTextStyle('justify');
}) 


document.getElementById('btn-lowercase').addEventListener('click', function () {

    getTextAreaCaseStyle('lowercase');
}) 

document.getElementById('btn-uppercase').addEventListener('click', function () {

    getTextAreaCaseStyle('uppercase');
}) 

document.getElementById('btn-capitalize').addEventListener('click', function () {

    getTextAreaCaseStyle('capitalize');
}) 
document.getElementById('color-field').addEventListener('input',function(event){
    getTextAreaColorStyle(event.target.value);
    
})



document.getElementById('number-field').addEventListener('input',function(event){
    const textArea =  document.getElementById('textarea');
    const num = event.target.value;
    console.log(num);
    textArea.style.fontSize = num +"px";
})