// المتغيرات الي محتاجنها
let btnNumber = document.getElementsByClassName("number");

let input = document.getElementById("display");

let btnOperator = document.getElementsByClassName("operator");

let btnClear = document.getElementById("clear");

let btnEqual = document.getElementById("equal");

let mode = "num1";

let num1 = "";

let num2 = "";

let tool = "";

// علشان يظهر الارقام في الالة الحاسبة
for (let i = 0; i < btnNumber.length; i++)
{
  btnNumber[i].addEventListener("click",function(){
  // علشان نقدر نتاكد انه يتخزن على اثنين
    if(mode === "num1"){
    num1 += this.textContent;
    input.value = num1;
    }else if (mode === "num2"){
      num2 += this.textContent;
      input.value = num2;
      input.value = num1 + tool + num2;
    }
    
  });
}
// علشان يظهر ادوات الحساب
for (let i = 0; i < btnOperator.length; i++)
{
  btnOperator[i].addEventListener("click",function(){
  // تاكد ان رقم ثاني مش فاضي علشان يقدر   
  //يجمع اكتر من رقم 
    if (num2 !== ""){
      num1 = String(calc());
      num2 = "";
      tool = "";
    }
    mode = "num2";
    tool = this.textContent;
    input.value = num1 + tool;
  });
}

// يبدا عمليات الحسابية بعد ضغط على يساوي
btnEqual.addEventListener("click",function(){
  if ( num1 === "" || num2 === ""){
    input.value = "رجاء ادخال عملية حسابية صحيحة";
    num1 = "";
    num2 = "";
    tool = "";
    mode = "num1";
  }else if ( !isNaN(tool)){
    input.value = "رجاء ادخال عملية حسابية صحيحة";
    num1 = "";
    num2 = "";
    tool = "";
    mode = "num1";
  }else{
 let saveNum1 = Number(num1);
 let saveNum2 = Number(num2);
  input.value = ""
  
 if (typeof saveNum1 === "number" && !isNaN(saveNum1))
 {
   if (typeof saveNum2 === "number" && !isNaN(saveNum2))
   {
     input.value = calc();
     num1 = calc();
     num2 = "";
     tool = "";
     mode = "num1";
    }
  }
}
});

//تبدا عمليات الحسابية تتمسح بعد ضغط على مسح
btnClear.addEventListener("click",function(){
  input.value = "";
  num1 = "";
  num2 = "";
  tool = "";
  mode = "num1";
});
// دلة الحساب
function calc(){
       let a = Number(num1);
       let b = Number(num2);
     switch (tool){
       case '+': return a + b ;
        break;
       case '-': return a - b ;
        break;
       case '×': return a * b ;
        break;
       case '÷': return a / b ;
        break;
       default: return input.value = "رجاء ادخال عملية حسابية صحيحة";
     }
}