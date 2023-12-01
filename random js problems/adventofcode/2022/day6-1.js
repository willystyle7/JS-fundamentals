// https://adventofcode.com
// How many characters need to be processed before the first start-of-packet marker is detected?

const unique = 4;

function solve(input) {
    let idx = 0;
    while(true) {
        let part = input.slice(idx, idx + unique);
        if (part.length === [...new Set(part.split(''))].length) {
            idx = idx + unique;
            break;
        }
        idx += 1;
    }
    return idx;
}

// Examples
console.log(solve('mjqjpqmgbljsphdztnvjfqwrcgsmlb')); // 7
console.log(solve('bvwbjplbgvbhsrlpgdmjqwftvncz')); // 5
console.log(solve('nppdvjthqldpwncqszvftbrmjlhg')); // 6
console.log(solve('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg')); // 10
console.log(solve('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw')); // 11

let input = `qzbzwwghwhwdhdqhhbhfbfsstggdsssgzgdzzdbbbzmbzzvlldppjnjlltwtsszwswgssjnsjnnfqfzqqjzjfjmfmwfmfhfnnmdnmnllbzzlbzlzflldzdbzbsbdddpgdppzhphhjjtccjgcgrgjgcjgjjsbjbffsgsqqrsqqgppgmgcmmrdrqdqbqmmctchcgcdgdwdwcdcjcfjccmpmlpllqqpmpllhfhchppwwdmdhdphpvprrhwhgwwlrwlwggwlwqqnmqnqrrbbzdzwddqzznllzwlljsscqqtlltppqspswsttlrttnvvvwllfslsjsfjssnqnbbbvgvlltjtltjljmljjfgfbggcbgbmbjjvwjvjgvgzvvzddrjdddrwrlrlgldlhlwwcddbsbbtwwcssrnndvvsbsnbsbmbnmngnpgpphfhzhshllltqtppnrrzpzrpzzrttmbmssbrbmbsmsnspnsncscwwmjwmwdmwmrmvmqvqvjqvvnrrtntwwwwsrwrnwnrwwwlslrlhrllvpvhppdpprrgzrgzggqmqgmgvghhsmhhjljfflrflfrlrzzbjjqmmmcncddvhhzjjqzzjfzzbssjqqtsqtqccmttdhttmwtmtffspplhlrhrdhhhpghgrhrchhmgmqgqlglssvnnwrrrrqqbmmpgmpmdmmljlflzzjttqntqqcnqccrvcczffclffmvfvwvmvnvsvnvffczzljzztdtztcztctbtppmrprqprpbbhlhphphhvppvdvmddvcctvvjbvvpmpbpnpllvclvlqlwqqpcpffdwdsdttzftfddbrrgsrgsgvgpgjpggfvgfvvtqtnnscssmnnfqnnblnnjlnlbbjrrmmpgmgnnqbbcjbcjbbmjjljsjrsjrsrwrgwgpgqgccqppfdpdssffgdgwddcvdvzzpttjlttmwwhnnlntncttfvfwvvwrvrwwlhlwlvwvzvpvfpvvsbslblrlssjddwhwfhwffqjfjzfjfmfrrvsrrlbrrdfdmdwmddpnpfnpfnfppczpprzprpvpjjtltptvvrgvvsttflfvfqqhnnbmnbmmpsptpdpttrbbhjbbdnntppbsbmssgccfdfflppbcpbblclrlhrhttffvqqvvnpnmpnnrbnnhqnqrrwvwrrbvbffcvctcjcwwmzmvvtdvtvbtblbvlbvlvdvdrdsrdrprllnzznzhhcjjsgglfglgrlrwwfcfzfjzfztfztzggffjftjffcbfbhhwfwnnbssrpsppmllszstztwwgbwgbgtbgggztgztzwtztbbrffznndhdmmqggssjfssrgssbnsndnqnvqvqvjqvqttlctltvlttrzrqrrdprddpqqvppvddgmdddpldllnvvjdjcjdjvvznzqqbgqbgbpbnbvvdjvvsnndsdjjjhnhggrnnrvrvlvqllqhhsbhssvvlhlssgqgmqqcscpsspsrpsrpspvvdmvdvwwcjwwvhwvvmzvzvfvccfzczjccscbcrcjrrrsgrsspnsntsnnrnwwhdwwzhzbbwgwcgglvlttqrttvrrgprrljlddnttqrqffgdfgdgzzhghthhmdmsmtsshhsfhhgzgvzgzwzffvlffzjjrttsdddbldljlvjvjttwdwzzrbblwbbgmbmgmbggbdbsbqqwzzgnzgzczpzfztftbtwbtbsttrwrfrssbrrdqdjqdqppdsswrwttmgmllqbqnnpspjjzjjmbbsddgjgbjggqqlgqgmgdmmwcmwcmwwsddvgvpphmhqmmlvlpvlpltllphhcshhrsrgsgzssspjspplgghvvwhwgwssbhshvvscshhbccbtcbcvvmnndsdwwbzbffhmmbppfjppbsblbtlltggzczdczdzjdjpjtppwdwlwqwnwjnnvttmcmzzqccvfcvvmrmzmwmhmttgdgmsrlddnbgqfbbmrpdglpbtdqpmctzjrffvvqnltcqlfddwqhvjpzhczzwhsmjtrpgsdtqlcqsljsjzqwhcfwttgghsjqhzqlgjzgrtgttwblpprbppcpzsbntrwwmvfvbmjjrjwjqcjhnstmvwzrbnjpzznnctrtllzhtwttntjqwjnfspzccqpjlzbncgbjjjztbgfmzflzsqflflcrfhtlsgbdfdbtwwqfdrqhzmmqdqthwzwqqqzddfvbwhnqwqtgwhtzlqqpwhcjhglcmmncvfcmqdwnzzmjbflwjrcjzwcblftzrpdcjzcmtzccjbsqmcnfmbsmrvlhswnmrqdczvvzzcnffgljdbtlvjgrqttcjhjmcdllnvhcdpztqghfgvjcqmqvmdwhcgrtwpjlmjfbqmnjnbvvjczcwfcrhcgzmsvmjlplcpghnqtpzddnwtmrwmqwbttsnlngszfbnslqvlbzbfzqnjpdvcdpmjpmmjhvzwwgzfjfqwbqwrznhsdpjgsvzlsrtlmhjrfnwrmljlqzwnfnsmqtzfsldwrgmbrrvcmmmdmwflwnvpwsrrstmffwbtwqmjzdnzbwmqfrfdgsmhzhprdsgsqtljqhtdqmvnzlwhrrqqftbvnhmjnzvmbdqpjhzjnszgcfptfcmthpfcvfvdmwdswzfgwjblglfbpfvvwrmnzlcvtgqbcrhfqlffrznnhbtbwdwdldthbhdsqvnghpqdlvpfmzhjbtdhfmrdzpghtppmvddnphcnnczvznwzrvtcwvpslhrhmhzbzqtjqjvdpwncjbqdnwwpnfblqtqdwwqncbvtsncfhgncrprvhvzppwjfpdmtdrmtfcqdmdhwzrhpnrvspfbzhsvlpwzgrrhnrllhmpcdfcqdhcnphlffpbfmbsznmvfdgshbsjcjjvhqqfpmjgpdpcrglbqdrnqmftqtnwcsgqzdwntfplsnlhdbdmcgwfldzzgmzjsdnldbnlnhjqhpmnsljsbhrglhjbbrmlhrmjnvzhnlvnfpdzfzwwdpzwhnqhlbqhrgfmvzpctdvscqbgznzdsvvvvcjnmbzlvsptslmqnggqjcmgvtgbnrzlmzqzmtdfvhjqqcpvbngmngjvrtcfvsmbvthvhmdcfhthmnjcvsvmsbwsjtmrwshspcsmnhvzqvglntngbmgtdngbvvcjrznpdmmsssljnnqjwwfzgwtlfqqpsqghjgrghldrcdmcqvqdjsfrfrnlnvltpfjhmcclwbsdcbmvmlnwltztfggzmrtnsczwvqgpqtwffmphprgrmjlnftlgqjvrngbcndlmrblmvcjsdhdcmtgsztjttpbgcznfcgdwfwdnqmrrjgdgrgshjfjqrbsjdhblvrqhlfphnbdslrjszcnpfhhwrfhhdvqbjpsmzznzbtbsgcggtctfbsrscvzlplfhlwjlrmzhbwjqhffdhrwcdctwvttwqzbdtrhdhdvtgvdbzjtqvdgbpwtzqqqnljztgpbjjcrgdgmrrsfvngcdbgzvcfpdppbgfrmmdnqdvtlwwglmghjwfjjrwjfnwgwdplbmlfljhsmshwvvvtdnvfcbbwplwnvzfcjwgsrrlctpsrhprttcjgcmfsjggfvbbljsbjtzplvjdwnwgsgvvntjwdwdqbwmtnnlgdcmfcccnwnrjlqtznjhdzwfpbzhjdmwwpcmffcwsnpfhmgqgwwnvpmqvrdfhlqtghrrbggdmtvpqgqsspmchnrqnrmqlddnspcdrwqpvclhrvjtzhpvthpltwqqbrdfjtnwncwrmdqszdpmmdzmjwjvqnfszvbchfdvwzhtrfgfhfmgwprdpqgmbfntsqztvqmtjvgbsjvzsbhfznbbzrstqbrrmqdjcztmfpnwbmvtccmvlhtvmgfdzcchbccrzznscbdwrdtnpslvcqmgrrvwhnjgjdpvbfgsdtdcmhpnwfwnnntqjqnwzfwnhsrjbhtqtlncvsnhgvtntfwldqfzztcdctsscfdmtnmdqgqgwmtqhlmswtqrvqbchdwtjsdlqjvfjdtmzlvrzwvfprzvjzrrfn`;

console.log(solve(input)); // 1987
