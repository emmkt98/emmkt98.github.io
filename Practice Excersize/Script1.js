
const Questions = [{
        id: 0,
        q: "When was the famous colony in Jamestown Virgina Settled?",
        a: [{ text: "1534", isCorrect: false },
            { text: "1776", isCorrect: false },
            { text: "1607", isCorrect: true },
            { text: "1706", isCorrect: false }
        ]
  
    },
    {
        id: 1,
        q: "What year did the U.S. land on the moon?",
        a: [{ text: "1964", isCorrect: false,},
            { text: "1869", isCorrect: false },
            { text: "1976", isCorrect: false },
            { text: "1969", isCorrect: true }
        ]
  
    },
    {
        id: 2,
        q: "How many stars were on the first American flag?",
        a: [{ text: "6", isCorrect: false },
            { text: "50", isCorrect: false },
            { text: "13", isCorrect: true },
            { text: "40", isCorrect: false }
        ]
  
    }
  
]
  

var start = true;
  

function iterate(id) {
  
  
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";
  
 
    const question = document.getElementById("question");
  
  
   
    question.innerText = Questions[id].q;
  
   
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');
  
  
  
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;
  
  
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;
  
    var selected = "";
  
   
    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "#7CA4C2";
        op2.style.backgroundColor = "#9DCFF5";
        op3.style.backgroundColor = "#9DCFF5";
        op4.style.backgroundColor = "#9DCFF5";
        selected = op1.value;
    })
  
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "#9DCFF5";
        op2.style.backgroundColor = "#7CA4C2";
        op3.style.backgroundColor = "#9DCFF5";
        op4.style.backgroundColor = "#9DCFF5";
        selected = op2.value;
    })
  
    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "#9DCFF5";
        op2.style.backgroundColor = "#9DCFF5";
        op3.style.backgroundColor = "#7CA4C2";
        op4.style.backgroundColor = "#9DCFF5";
        selected = op3.value;
    })
  
  
    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "#9DCFF5";
        op2.style.backgroundColor = "#9DCFF5";
        op3.style.backgroundColor = "#9DCFF5";
        op4.style.backgroundColor = "#7CA4C2";
        selected = op4.value;
    })
  
   
    const evaluate = document.getElementsByClassName("evaluate");
  
   
    evaluate[0].addEventListener("click", () => {
        if (selected == "true") {
            result[0].innerHTML = "True";
            result[0].style.color = "green";
        } else {
            result[0].innerHTML = "False";
            result[0].style.color = "red";
        }
    })
}
  

if (start) {
    iterate(0);
}
  
// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;
  
next.addEventListener("click", () => {
    start = false;
    if (id < 2) {
        id++;
        iterate(id);
        console.log(id);
    }
  
})