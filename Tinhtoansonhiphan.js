/**
 * Lua chon option de thuc hien phep tinh
 * @constructor
 */
function showValue() {
    /**
     * @description - Phep toan de thuc thi
     * @type {string}
     */
    var value = document.getElementById("dialogv5ed3679927243_option").value;
    //Set mien gia tri theo so bit muon bieu dien
    var input_n = parseInt(document.getElementById("dialogv5ed3679927243_n").value, 10);
    var upper = Math.pow(2, input_n) / 2 - 1;
    var lower = -Math.pow(2, input_n) / 2;
    document.getElementById("dialogv5ed3679927243_range").innerHTML = "[" + lower + "," + upper + "]";
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

/**
 * Ham tinh tong hai so nhi phan n bit (n duoc nhap vao tu ban phim)
 * @constructor
 */
function addBin() {
    // Nhan gia tri dau vao va so bit bieu dien duoi dang so nguyen co dau
    /**
     * @description - So hang thu nhat o dang thap phan
     * @type {number}
     */
    var input1 = parseInt(document.getElementById("dialogv5ed3679927243_input1").value, 10);
    /**
     * @description - So hang thu hai o dang thap phan
     *  @type {number}
     */
    var input2 = parseInt(document.getElementById("dialogv5ed3679927243_input2").value, 10);
    /**
     * @description - So bit muon bieu dien
     *  @type {number}
     */
    var input_n = parseInt(document.getElementById("dialogv5ed3679927243_n").value, 10);
    /**
     * @description - Gia tri lon nhat co the bieu dien voi n bit
     *  @type {number}
     */
    var upper = Math.pow(2, input_n) / 2 - 1;
    /**
     * @description - Gia tri nho nhat co the bieu dien voi n bit
     *  @type {number}
     */
    var lower = -Math.pow(2, input_n) / 2;
    /**
     * @description - Ket qua phep tinh o he thap phan
     *  @type {number}
     */
    //Tinh toan ket qua o he 10 sau do xu ly chuyen ve nhi phan
    var rs = input1 + input2;
    /**
     * @description - chuyen ket qua tu he thap phan ve he nhi phan
     *  @type {number}
     */
    var output;
    /**
     * @description - Neu ket qua < 0 thi thuc hien chuyen doi ma bu hai
     */
    // chia truong hop neu ket qua < 0 thi xu ly ma bu 2
    if (rs < 0) {
        rs = Math.abs(rs);
        var binary_output = (rs).toString(2).padStart(input_n, "0");
        var binary_inverse = binary_output.split('').map(x => {
            return (x == 1) ? 0 : 1;
        }).join('');
        output = (parseInt(binary_inverse, 2) + 1).toString(2);
    } else { output = (rs).toString(2).padStart(input_n, "0"); }
    if (input1 > upper || input1 < lower || input2 > upper || input2 < lower || rs > upper || rs < lower) {
        // Hien thi canh bao neu tran so
        alert("Overflow - not enough binary digits to display this value");
        return "Overflow";
    } else {
        return output;
    }

}
/**
 * Ham tinh hieu hai so nhi phan n bit (n duoc nhap vao tu ban phim)
 * @constructor
 */
function subBin() {
    /**
     * @description - So hang thu nhat o dang thap phan
     * @type {number}
     */
    var input1 = parseInt(document.getElementById("dialogv5ed3679927243_input1").value, 10);
    /**
     * @description - So hang thu hai o dang thap phan
     *  @type {number}
     */
    var input2 = parseInt(document.getElementById("dialogv5ed3679927243_input2").value, 10);
    /**
     * @description - So bit muon bieu dien
     *  @type {number}
     */
    var input_n = parseInt(document.getElementById("dialogv5ed3679927243_n").value, 10);
    /**
     * @description - Gia tri lon nhat co the bieu dien voi n bit
     *  @type {number}
     */
    var upper = Math.pow(2, input_n) / 2 - 1;
    /**
     * @description - Gia tri nho nhat co the bieu dien voi n bit
     *  @type {number}
     */
    var lower = -Math.pow(2, input_n) / 2;
    /**
     * @description - Ket qua phep tinh o he thap phan
     *  @type {number}
     */
    var rs = input1 - input2;
    /**
     * @description - chuyen ket qua tu he thap phan ve he nhi phan
     *  @type {number}
     */
    var output;
    /**
     * @description - Neu ket qua < 0 thi thuc hien chuyen doi ma bu hai
     */
    if (rs < 0) {
        rs = Math.abs(rs);
        var binary_output = (rs).toString(2).padStart(input_n, "0");
        var binary_inverse = binary_output.split('').map(x => {
            return (x == 1) ? 0 : 1;
        }).join('');
        output = (parseInt(binary_inverse, 2) + 1).toString(2);
    } else { output = (rs).toString(2).padStart(input_n, "0"); }
    if (input1 > upper || input1 < lower || input2 > upper || input2 < lower || rs > upper || rs < lower) {
        // Hien thi canh bao neu tran so
        alert("Overflow - not enough binary digits to display this value");
        return "Overflow";
    } else {
        return output;
    }
}
/**
 * Ham tinh tich hai so nhi phan n bit (n duoc nhap vao tu ban phim)
 * @constructor
 */
function mulBin() {
    /**
     * @description - So hang thu nhat o dang thap phan
     * @type {number}
     */
    var input1 = parseInt(document.getElementById("dialogv5ed3679927243_input1").value, 10);
    /**
     * @description - So hang thu hai o dang thap phan
     *  @type {number}
     */
    var input2 = parseInt(document.getElementById("dialogv5ed3679927243_input2").value, 10);
    /**
     * @description - So bit muon bieu dien
     *  @type {number}
     */
    var input_n = parseInt(document.getElementById("dialogv5ed3679927243_n").value, 10);
    /**
     * @description - Gia tri lon nhat co the bieu dien voi n bit
     *  @type {number}
     */
    var upper = Math.pow(2, input_n) / 2 - 1;
    /**
     * @description - Gia tri nho nhat co the bieu dien voi n bit
     *  @type {number}
     */
    var lower = -Math.pow(2, input_n) / 2;
    /**
     * @description - Ket qua phep tinh o he thap phan
     *  @type {number}
     */
    var rs = input1 * input2;
    /**
     * @description - chuyen ket qua tu he thap phan ve he nhi phan
     *  @type {number}
     */
    var output;
    /**
     * @description - Neu ket qua < 0 thi thuc hien chuyen doi ma bu hai
     */
    if (rs < 0) {
        rs = Math.abs(rs);
        var binary_output = (rs).toString(2).padStart(input_n, "0");
        var binary_inverse = binary_output.split('').map(x => {
            return (x == 1) ? 0 : 1;
        }).join('');
        output = (parseInt(binary_inverse, 2) + 1).toString(2);
    } else { output = (rs).toString(2).padStart(input_n, "0"); }
    if (input1 > upper || input1 < lower || input2 > upper || input2 < lower || rs > upper || rs < lower) {
        // Hien thi canh bao neu tran so
        alert("Overflow - not enough binary digits to display this value");
        return "Overflow";
    } else {
        return output;
    }
}
/**
 * Ham tinh thuong hai so nhi phan n bit (n duoc nhap vao tu ban phim)
 * @constructor
 */
function divBin() {
    /**
     * @description - So hang thu nhat o dang thap phan
     * @type {number}
     */
    var input1 = parseInt(document.getElementById("dialogv5ed3679927243_input1").value, 10);
    /**
     * @description - So hang thu hai o dang thap phan
     *  @type {number}
     */
    var input2 = parseInt(document.getElementById("dialogv5ed3679927243_input2").value, 10);
    /**
     * @description - So bit muon bieu dien
     *  @type {number}
     */
    var input_n = parseInt(document.getElementById("dialogv5ed3679927243_n").value, 10);
    /**
     * @description - Gia tri lon nhat co the bieu dien voi n bit
     *  @type {number}
     */
    var upper = Math.pow(2, input_n) / 2 - 1;
    /**
     * @description - Gia tri nho nhat co the bieu dien voi n bit
     *  @type {number}
     */
    var lower = -Math.pow(2, input_n) / 2;
    /**
     * @description - Ket qua phep tinh o he thap phan
     *  @type {number}
     */
    var rs = input1 / input2;
    /**
     * @description - chuyen ket qua tu he thap phan ve he nhi phan
     *  @type {number}
     */
    var output;
    /**
     * @description - Neu ket qua < 0 thi thuc hien chuyen doi ma bu hai
     */
    if (rs < 0) {
        rs = Math.abs(rs);
        var binary_output = (rs).toString(2).padStart(input_n, "0");
        var binary_inverse = binary_output.split('').map(x => {
            return (x == 1) ? 0 : 1;
        }).join('');
        output = (parseInt(binary_inverse, 2) + 1).toString(2);
    } else { output = (rs).toString(2).padStart(input_n, "0"); }
    if (input1 > upper || input1 < lower || input2 > upper || input2 < lower || rs > upper || rs < lower) {
        // Hien thi canh bao neu tran so
        alert("Overflow - not enough binary digits to display this value");
        return "Overflow";
    } else {
        return output;
    }
}