/**
 * Chuyen doi tu so thap phan ve so thuc dau phay dong theo chuan IEEE 754 (32bit)
 * @constructor
 */
function ConvertFloattoBin() {
    /**
     * @description - So thuc dau phay dong o he thap phan duoi dang string
     * @type {string}
     */
    var input = document.getElementById("dialogv5ed3679927243_input").value;
    /**
     * @description - So thuc dau phay dong o he thap phan duoi dang so
     * @type {string}
     */
    var inputFloat = parseFloat(input);
    /**
     * Chuyen doi so thuc tu he thap phan sang nhi phan theo IEEE 754
     * @constructor
     * @param {string} float32 - so thuc dau phay dong can chuyen sang he nhi phan
     */
    const Float32ToBin = (float32) => {
        /**
         * Chuyen doi so thuc tu he 16 ve he nhi phan
         * @constructor
         * @param {string} hex - So thuc can chuyen ve nhi phan o dang string
         */
        const HexToBin = hex => (parseInt(hex, 16).toString(2)).padStart(32, '0');
        /**
         * Lay so thuc dau phay dong o he 16 duoi dang string
         * @constructor
         * @param {string} i - ky tu dag xet
         */
        const getHex = i => ('00' + i.toString(16)).slice(-2);
        /**
         * @description - Doi tuong view dung de set gia tri cho mot so thuc dau phay dong
         */
        var view = new DataView(new ArrayBuffer(4))
        view.setFloat32(0, float32);
        return HexToBin(Array.apply(null, { length: 4 }).map((_, i) => getHex(view.getUint8(i))).join(''));
    }
    var output = (`${Float32ToBin(inputFloat)}`);
    console.log(output);
    document.getElementById("dialogv5ed3679927243_representation").innerHTML = output;
    document.getElementById("dialogv5ed3679927243_n").value = output;
}
/**
 * Chuyen doi tu so thuc dau phay dong theo chuan IEEE 754 ve so thap phan
 * @constructor
 */
function ConvertBintoFloat() {
    /**
     * @description - So nhi phan 32 bit o dang chuoi string
     * @type {string}
     */
    var input = document.getElementById("dialogv5ed3679927243_n").value;
    /**
     * Chuyen doi tu so nhi phan sang thap phan
     * @constructor
     * @param {string} str - Chuoi nhi phan can chuyen sang thap phan
     */
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
        /**
         * @description - So thuc dau phay dong sau khi duoc chuyen tu chuoi nhi phan
         * @type {string}
         */
    var output = (`${BinToFloat32(input)}`);
    console.log(output);
    document.getElementById("dialogv5ed3679927243_representation").innerHTML = output;
    document.getElementById("dialogv5ed3679927243_input").value = output;
}