function Dialogv5ed3679927243() {
    var input_number = parseInt(document.getElementById("dialogv5ed3679927243_input").value, 10);
    var input = Math.abs(input_number);
    var input_n = parseInt(document.getElementById("dialogv5ed3679927243_n").value, 10);
    var output = input;
    var binary_output = (output).toString(2).padStart(input_n, "0");
    var upper = Math.pow(2, input_n) / 2 - 1;
    var lower = -Math.pow(2, input_n) / 2;
    var binary_inverse = binary_output.split('').map(x => {
        return (x == 1) ? 0 : 1;
    }).join('');
    //Hien thi dai bieu dien doi voi so bit nhap vao
    document.getElementById("dialogv5ed3679927243_range").innerHTML = "[" + lower + "," + upper + "]";
    //Tran bit thi hien canh bao va return
    if (input_number > upper || input_number < lower) {
        // Bieu dien |input| duoi dang so nhi phan n bit
        document.getElementById("dialogv5ed3679927243_representation").innerHTML = "Overflow ";
        //Bieu dien |input| duoi dang ma bu 1
        document.getElementById("dialogv5ed3679927243_inverse").innerHTML = "Overflow ";
        //Bieu dien |input| duoi dang ma bu hai
        document.getElementById("dialogv5ed3679927243_complement").innerHTML = "Overflow ";
        alert("Overflow - not enough binary digits to display this value");
        return;
    }
    //Input bang 0 thi cac dialog hien thi so 0
    if (input_number >= 0) {
        // Bieu dien |input| duoi dang so nhi phan n bit
        document.getElementById("dialogv5ed3679927243_representation").innerHTML = binary_output;
        //Bieu dien |input| duoi dang ma bu 1
        document.getElementById("dialogv5ed3679927243_inverse").innerHTML = binary_output;
        //Bieu dien |input| duoi dang ma bu hai
        document.getElementById("dialogv5ed3679927243_complement").innerHTML = binary_output;
        return;
    }

    // Bieu dien |input| duoi dang so nhi phan n bit
    document.getElementById("dialogv5ed3679927243_representation").innerHTML = binary_output;
    //Bieu dien |input| duoi dang ma bu 1
    document.getElementById("dialogv5ed3679927243_inverse").innerHTML = binary_inverse;
    //Bieu dien |input| duoi dang ma bu hai
    document.getElementById("dialogv5ed3679927243_complement").innerHTML = (parseInt(binary_inverse, 2) + 1).toString(2).padStart(input_n, "0");

}