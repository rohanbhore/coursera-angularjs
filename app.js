var student={

  name="",
  type: "student"
};

document.addEventListener('DOMContentLoaded',contentLoaded);

function contentLoaded(event){
  document.getElemntByid('name').addEventListener("keyup",keyup);
}
function keyup(event){

  calculateNumericOutput();

}
function calculateNumericOutput(){
  student.name=doucument.getElementById('name').value;
  var totalnameValue +=0;
  for(var i=0;i<student.name.length;i++)
  {
    totalNameValue+=studnt.name.charCodeAt(i);
  }
  var output="Total Numeric value of pewrsons name is"+totalNamevalue;
  document.getElementById('output').innerText=output;
}
