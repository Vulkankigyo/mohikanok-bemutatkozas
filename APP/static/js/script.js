document.addEventListener('DOMContentLoaded', main)

/*async function main(){
    alert("Üdv játékos! Amenyibben a Mohikánok szövetség tagja vagy kérlek töltsd ki az alábbi kis rövid kérdőívet. Ha nem vagy a szövetség tagja, akkor kérlek hagyd el az oldalt.");

}*/

/*function isEmpty(){
    var str = document.forms['myForm'].question.value;
    if( !str.replace(/\s+/, '').length ) {
         alert( "Kérlek válaszolj a kötelező kérdésekre." );
         return false;
    }
}*/37

/*function isEmptyy(){
    var str = document.forms['myFormm'].questionn.value;
    if( !str.replace(/\s+/, '').length ) {
         alert( "Kérlek válaszolj a kötelező kérdésekre." );
         return false;
    }
}*/

/*$("form").submit(function () {
    var flag = true;
    $(':radio').each(function () {
        name = $(this).attr('name');
        if (flag && !$(':radio[name="' + name + '"]:checked').length) {
            alert(name + ' group not checked');
            flag = false;
        }
    });
    return flag;
});*/

/*function isEmptyy() { 
    if(!document.getElementById('recommed-1').checked) {
        document.getElementById("disp").innerHTML
            = document.getElementById("recommed-1").value
            + " radio button checked";
    }
    else if(document.getElementById('recommed-2').checked) {
        document.getElementById("disp").innerHTML
            = document.getElementById("recommed-2").value
            + " radio button checked";  
    }
    else if(document.getElementById('recommed-3').checked) {
        document.getElementById("disp").innerHTML
            = document.getElementById("recommed-3").value
            + " radio button checked";  
    }
    else if(document.getElementById('recommed-4').checked) {
        document.getElementById("disp").innerHTML
            = document.getElementById("recommed-4").value
            + " radio button checked";  
    }
    else {
        document.getElementById("disp").innerHTML
            alert("No one selected");
    }
}*/

/*$(document).ready(function () {
    $("#btn1").on("click", function () {
        var count = 0;
        var questions = $("div.questionn");
        questions.each(function () {
            if ($(this).find("input").filter('[type="radio"]').filter(":checked").length > 0) {
                count++;
            }
        });
        if (count >= questions.length) {
            alert("all good");
        } else {
            alert("something not checked");
        }
    });
});*/

/*$(document).on('submit', 'form', function () {

    var validate = true;
    var unanswered = new Array();

    // Loop through available sets
    $('.option').each(function () {
        // Question text
        var question = $(this).prev();
        // Validate
        if (!$(this).find('input').is(':checked')) {
            // Didn't validate ... dispaly alert or do something
            unanswered.push(question.text());
            question.css('color', 'red'); // Highlight unanswered question
            validate = false;
        }
    });

    if (unanswered.length > 0) {
        msg = "Please answer the following questions:\n" + unanswered.join('\n'); 
        alert(msg);
    }
    return validate;
});*/

let saveFile = () => {
    	
    const jatekosnev = document.getElementById('jatekosnev');
    const nem = document.getElementById('nem');
    const keresztnev = document.getElementById('keresztnev');
    const betolt18 = document.getElementById('betolt18');
    const orszag = document.getElementById('orszag');
    
    let data = 
        '\r Name: ' + jatekosnev.value + ' \r\n ' + 
        'Age: ' + nem.value + ' \r\n ' + 
        'Email: ' + keresztnev.value + ' \r\n ' + 
        'Country: ' + betolt18.value + ' \r\n ' + 
        'Message: ' + orszag.value;
    
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'answers.txt';	

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click(); 
}