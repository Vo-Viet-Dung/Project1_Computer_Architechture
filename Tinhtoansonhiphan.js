function showValue() {
    var value = document.getElementById("dialogv5ed3679927243_option").value;
    //Kiểm tra option de lua chon phep toan can thuc hien
    switch (value) {

        case "binary-addition-calculator.htm":
            document.getElementById("dialogv5ed3679927243_complement").innerHTML = addBin();
            break;
        case "binary-subtraction-calculator.htm":
            document.getElementById("dialogv5ed3679927243_complement").innerHTML = subBin();
            break;
        case "binary-multiplication-calculator.htm":
            document.getElementById("dialogv5ed3679927243_complement").innerHTML = mulBin();
            break;
        case "binary-division-calculator.htm":
            document.getElementById("dialogv5ed3679927243_complement").innerHTML = divBin();
            break

    }

}

function convertInput() {}

function addBin() {
    // Nhan gia tri dau vao va so bit bieu dien duoi dang so nguyen co dau
    var input1 = parseInt(document.getElementById("dialogv5ed3679927243_input1").value, 10);
    var input2 = parseInt(document.getElementById("dialogv5ed3679927243_input2").value, 10);
    var input_n = parseInt(document.getElementById("dialogv5ed3679927243_n").value, 10);
    //Tinh toan ket qua o he 10 sau do xu ly chuyen ve nhi phan
    var rs = input1 + input2;
    var output;
    // chia truong hop neu ket qua < 0 thi xu ly ma bu 2
    if (rs < 0) {
        rs = Math.abs(rs);
        var binary_output = (rs).toString(2).padStart(input_n, "0");
        var binary_inverse = binary_output.split('').map(x => {
            return (x == 1) ? 0 : 1;
        }).join('');
        output = (parseInt(binary_inverse, 2) + 1).toString(2);
    } else { output = (rs).toString(2).padStart(input_n, "0"); }
    return output;
}

function subBin() {
    var input1 = parseInt(document.getElementById("dialogv5ed3679927243_input1").value, 10);
    var input2 = parseInt(document.getElementById("dialogv5ed3679927243_input2").value, 10);
    var input_n = parseInt(document.getElementById("dialogv5ed3679927243_n").value, 10);
    var rs = input1 - input2;
    var output;
    if (rs < 0) {
        rs = Math.abs(rs);
        var binary_output = (rs).toString(2).padStart(input_n, "0");
        var binary_inverse = binary_output.split('').map(x => {
            return (x == 1) ? 0 : 1;
        }).join('');
        output = (parseInt(binary_inverse, 2) + 1).toString(2);
    } else { output = (rs).toString(2).padStart(input_n, "0"); }
    return output;
}

function mulBin() {
    var input1 = parseInt(document.getElementById("dialogv5ed3679927243_input1").value, 10);
    var input2 = parseInt(document.getElementById("dialogv5ed3679927243_input2").value, 10);
    var input_n = parseInt(document.getElementById("dialogv5ed3679927243_n").value, 10);
    var rs = input1 * input2;
    var output;
    if (rs < 0) {
        rs = Math.abs(rs);
        var binary_output = (rs).toString(2).padStart(input_n, "0");
        var binary_inverse = binary_output.split('').map(x => {
            return (x == 1) ? 0 : 1;
        }).join('');
        output = (parseInt(binary_inverse, 2) + 1).toString(2);
    } else { output = (rs).toString(2).padStart(input_n, "0"); }
    return output;
}

function divBin() {
    var input1 = parseInt(document.getElementById("dialogv5ed3679927243_input1").value, 10);
    var input2 = parseInt(document.getElementById("dialogv5ed3679927243_input2").value, 10);
    var input_n = parseInt(document.getElementById("dialogv5ed3679927243_n").value, 10);
    var rs = input1 / input2;
    var output;
    if (rs < 0) {
        rs = Math.abs(rs);
        var binary_output = (rs).toString(2).padStart(input_n, "0");
        var binary_inverse = binary_output.split('').map(x => {
            return (x == 1) ? 0 : 1;
        }).join('');
        output = (parseInt(binary_inverse, 2) + 1).toString(2);
    } else { output = (rs).toString(2).padStart(input_n, "0"); }
    return output;
}