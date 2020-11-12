function ConvertFloattoBin() {
    var input = document.getElementById("dialogv5ed3679927243_input").value;
    var inputFloat = parseFloat(input);
    const Float32ToBin = (float32) => {
            const HexToBin = hex => (parseInt(hex, 16).toString(2)).padStart(32, '0');
            const getHex = i => ('00' + i.toString(16)).slice(-2);
            var view = new DataView(new ArrayBuffer(4))
            view.setFloat32(0, float32);
            return HexToBin(Array.apply(null, { length: 4 }).map((_, i) => getHex(view.getUint8(i))).join(''));
        }
        //console.log(`Input value (${inputFloat}) => binary (${Float32ToBin(inputFloat)}) [${Float32ToBin(inputFloat).length} bits] => float32 (${Float32ToBin(inputFloat)})`);
    var output = (`${Float32ToBin(inputFloat)}`);
    console.log(output);
    document.getElementById("dialogv5ed3679927243_representation").innerHTML = output;
    document.getElementById("dialogv5ed3679927243_n").value = output;
}

function ConvertBintoFloat() {
    var input = document.getElementById("dialogv5ed3679927243_n").value;
    const BinToFloat32 = (str) => {
        var int = parseInt(str, 2);
        if (int > 0 || int < 0) {
            var sign = (int >>> 31) ? -1 : 1;
            var exp = (int >>> 23 & 0xff) - 127;
            var mantissa = ((int & 0x7fffff) + 0x800000).toString(2);
            var float32 = 0
            for (var i = 0; i < mantissa.length; i += 1) {
                float32 += parseInt(mantissa[i]) ? Math.pow(2, exp) : 0;
                exp--
            }
            return float32 * sign;
        } else return 0
    }
    var output = (`${BinToFloat32(input)}`);
    console.log(output);
    document.getElementById("dialogv5ed3679927243_representation").innerHTML = output;
    document.getElementById("dialogv5ed3679927243_input").value = output;
}