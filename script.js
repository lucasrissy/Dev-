function insert(num){
  let number = document.getElementById('result').innerHTML;
  document.getElementById('result').innerHTML = number + num;

}

function clean(){
  document.getElementById('result').innerHTML ="";
}

function back(){
  let back = document.getElementById('result').innerHTML;
  document.getElementById('result').innerHTML = back.substring(0,result.length);
}

function calculate(){

  let result = document.getElementById('result').innerHTML;
  if(result){
    document.getElementById('result').innerHTML = eval(result);
  }
}
