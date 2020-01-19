function rot13(encoded) {
    let decoded = '';
    for (const letter of encoded) {
        if (/^[A-Z]$/.test(letter)) {
            let newCharCode = letter.charCodeAt(0) + 13;
            if (newCharCode > 'Z'.charCodeAt(0)) {
                newCharCode = 'A'.charCodeAt(0) - 1 + newCharCode - 'Z'.charCodeAt(0);
            }
            decoded += String.fromCharCode(newCharCode);
        } else {
            decoded += letter
        }
    }

    return decoded;
  }

  // Change the inputs below to test
  console.log(rot13("SERR PBQR PNZC"));
  console.log(rot13("LBH QVQ VG!"));