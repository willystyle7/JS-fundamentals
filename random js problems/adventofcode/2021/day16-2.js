// https://adventofcode.com
// What do you get if you evaluate the expression represented by your hexadecimal-encoded BITS transmission?

function solve(input) {
    function toBin(str) {
        let hexToBin = {
            '0': '0000',
            '1': '0001',
            '2': '0010',
            '3': '0011',
            '4': '0100',
            '5': '0101',
            '6': '0110',
            '7': '0111',
            '8': '1000',
            '9': '1001',
            'A': '1010',
            'B': '1011',
            'C': '1100',
            'D': '1101',
            'E': '1110',
            'F': '1111'
        }
        return str.split('').map(ch => hexToBin[ch]).join('');
    }

    let bin = toBin(input);
    // console.log('bin: ', bin);

    function readPacket() {
        let ver = parseInt(bin.slice(0, 3), 2); // we do not need version
        bin = bin.slice(3);
        let typeID = parseInt(bin.slice(0, 3), 2);
        bin = bin.slice(3);

        let values = [];
        if (typeID === 4) {
            // literal value
            let val = '';
            let val0 = '';
            do {
                let currVal = bin.slice(0, 5);
                val0 = currVal[0];
                val += currVal.slice(1);
                bin = bin.slice(5);
            } while (val0 === '1');
            val = parseInt(val, 2);
            values.push(val);
        } else {
            // operator
            let lengthTypeID = bin.slice(0, 1);
            bin = bin.slice(1);
            if (lengthTypeID === '0') {
                // total length in bits
                let totalLen = parseInt(bin.slice(0, 15), 2);
                bin = bin.slice(15);
                let startLen = bin.length;
                // we get needed packets
                while (startLen - bin.length < totalLen) {
                    values.push(readPacket());
                }
            } else {
                // number of sub-packets immediately contained
                let numSubPacks = parseInt(bin.slice(0, 11), 2);
                bin = bin.slice(11);
                for (let idx = 0; idx < numSubPacks; idx++) {
                    values.push(readPacket());
                }
            }
        }
        let value = 0;
        switch (typeID) {
            case 0:
                // sum
                value = values.reduce((a, b) => a + b, 0);
                break;
            case 1:
                // product
                value = values.reduce((a, b) => a * b, 1);
                break;
            case 2:
                // minimum
                value = Math.min(...values);
                break;
            case 3:
                // maximum
                value = Math.max(...values);
                break;
            case 4:
                // literal value
                value = values[0];
                break;
            case 5:
                // greater than
                value = values[0] > values[1] ? 1 : 0;
                break;
            case 6:
                // less than
                value = values[0] < values[1] ? 1 : 0;
                break;
            case 7:
                // equal to
                value = values[0] === values[1] ? 1 : 0;
                break;
            default:
                break;
        }
        // console.log('typeID: ', typeID);
        // console.log('values: ', values);
        // console.log('value: ', value);
        return value;
    }

    let value = 0;
    // while (bin && !/^0+$/.test(bin)) {
    //     value += readPacket();
    // }
    value = readPacket();

    return value;
}

// let input = `C200B40A82`; // C200B40A82 finds the sum of 1 and 2, resulting in the value 3.
// let input = `04005AC33890`; // 04005AC33890 finds the product of 6 and 9, resulting in the value 54.
// let input = `880086C3E88112`; // 880086C3E88112 finds the minimum of 7, 8, and 9, resulting in the value 7.
// let input = `CE00C43D881120`; // CE00C43D881120 finds the maximum of 7, 8, and 9, resulting in the value 9.
// let input = `D8005AC2A8F0`; // D8005AC2A8F0 produces 1, because 5 is less than 15.
// let input = `F600BC2D8F`; // F600BC2D8F produces 0, because 5 is not greater than 15.
// let input = `9C005AC2F8F0`; // 9C005AC2F8F0 produces 0, because 5 is not equal to 15.
let input = `9C0141080250320F1802104A08`; // 9C0141080250320F1802104A08 produces 1, because 1 + 3 = 2 * 2.

console.log(solve(input)); // ?

let input1 = `C20D7900A012FB9DA43BA00B080310CE3643A0004362BC1B856E0144D234F43590698FF31D249F87B8BF1AD402389D29BA6ED6DCDEE59E6515880258E0040A7136712672454401A84CE65023D004E6A35E914BF744E4026BF006AA0008742985717440188AD0CE334D7700A4012D4D3AE002532F2349469100708010E8AD1020A10021B0623144A20042E18C5D88E6009CF42D972B004A633A6398CE9848039893F0650048D231EFE71E09CB4B4D4A00643E200816507A48D244A2659880C3F602E2080ADA700340099D0023AC400C30038C00C50025C00C6015AD004B95002C400A10038C00A30039C0086002B256294E0124FC47A0FC88ACE953802F2936C965D3005AC01792A2A4AC69C8C8CA49625B92B1D980553EE5287B3C9338D13C74402770803D06216C2A100760944D8200008545C8FB1EC80185945D9868913097CAB90010D382CA00E4739EDF7A2935FEB68802525D1794299199E100647253CE53A8017C9CF6B8573AB24008148804BB8100AA760088803F04E244480004323BC5C88F29C96318A2EA00829319856AD328C5394F599E7612789BC1DB000B90A480371993EA0090A4E35D45F24E35D45E8402E9D87FFE0D9C97ED2AF6C0D281F2CAF22F60014CC9F7B71098DFD025A3059200C8F801F094AB74D72FD870DE616A2E9802F800FACACA68B270A7F01F2B8A6FD6035004E054B1310064F28F1C00F9CFC775E87CF52ADC600AE003E32965D98A52969AF48F9E0C0179C8FE25D40149CC46C4F2FB97BF5A62ECE6008D0066A200D4538D911C401A87304E0B4E321005033A77800AB4EC1227609508A5F188691E3047830053401600043E2044E8AE0008443F84F1CE6B3F133005300101924B924899D1C0804B3B61D9AB479387651209AA7F3BC4A77DA6C519B9F2D75100017E1AB803F257895CBE3E2F3FDE014ABC`;

console.log(solve(input1)); // 12301926782560

