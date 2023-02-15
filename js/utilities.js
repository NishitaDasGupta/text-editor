
function getTextAreaStyle(value)
{
    const textArea =  document.getElementById('textarea');
   return textArea.classList.toggle(value);
}

function getTextAreaTextStyle(value)
{
    const textArea =  document.getElementById('textarea');
 textArea.style.textAlign = value; 
}
function getTextAreaCaseStyle(value)
{
    const textArea =  document.getElementById('textarea');
 textArea.style.textTransform = value; 
}
 function getTextAreaColorStyle(value)
 {
    const textArea =  document.getElementById('textarea');
    textArea.style.color = value; 
}
