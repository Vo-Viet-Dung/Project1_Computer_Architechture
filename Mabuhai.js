/**
 * Chuyen doi ma bu hai cho dialog Dialogv5ed3679927243
 * @constructor
 */
function Dialogv5ed3679927243() {
    /**
     * @description - So thap phan can chuyen doi ma bu hai
     * @type {number}
     */
    var input_number = parseInt(document.getElementById("dialogv5ed3679927243_input").value, 10);
    /**
     * @description - Gia tri tuyet doi cua so thap phan can chuyen doi ma bu hai
     * @type {number}
     */
    var input = Math.abs(input_number);
    /**
     * @description - So bit muon bieu dien so thap phan do
     * @type {number}
     */
    var input_n = parseInt(document.getElementById("dialogv5ed3679927243_n").value, 10);
    var output = input;
    ///Them cac bit 0 vao de duoc xau nhi phan co do dai n
    /**
     * @description - Bieu dien nhi phan cua tri tuyet doi so thap phan duoc nhap vao bang n bits
     * @type {number}
     */
    var binary_output = (output).toString(2).padStart(input_n, "0");
    /**
     * @description - Gia tri so thap phan lon nhat co the bieu dien voi n bits
     * @type {number}
     */
    var upper = Math.pow(2, input_n) / 2 - 1;
    /**
     * @description - Gia tri so thap phan nho nhat co the bieu dien voi n bits
     * @type {number}
     */
    var lower = -Math.pow(2, input_n) / 2;
    /**
     * Chuyen doi ma bu mot
     * @constructor
     * @description - chuoi nhi phan sau khi duoc chuyen doi ma bu mot
     */
    var binary_inverse = binary_output.split('').map(x => {
        return (x == 1) ? 0 : 1;
    }).join('');
    document.getElementById("dialogv5ed3679927243_range").innerHTML = "[" + lower + "," + upper + "]";
    if (input_number > upper || input_number < lower) {
        document.getElementById("dialogv5ed3679927243_representation").innerHTML = "Overflow ";
        document.getElementById("dialogv5ed3679927243_inverse").innerHTML = "Overflow ";
        document.getElementById("dialogv5ed3679927243_complement").innerHTML = "Overflow ";
        alert("Overflow - not enough binary digits to display this value");
        return;
    }
    //Input >= 0 thi cac dialog hien thi chinh so do
    if (input_number >= 0) {
        document.getElementById("dialogv5ed3679927243_representation").innerHTML = binary_output;
        document.getElementById("dialogv5ed3679927243_inverse").innerHTML = binary_output;
        document.getElementById("dialogv5ed3679927243_complement").innerHTML = binary_output;
        return;
    }
    // Bieu dien |input| duoi dang so nhi phan n bit
    document.getElementById("dialogv5ed3679927243_representation").innerHTML = binary_output;
    //Bieu dien |input| duoi dang ma bu 1
    document.getElementById("dialogv5ed3679927243_inverse").innerHTML = binary_inverse;
    //Bieu dien |input| duoi dang ma bu hai
    /**
     * @description - Chuyen doi ma bu hai
     */
    document.getElementById("dialogv5ed3679927243_complement").innerHTML = (parseInt(binary_inverse, 2) + 1).toString(2).padStart(input_n, "0");

}