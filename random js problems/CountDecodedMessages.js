// Given the mapping a = 1, b = 2, ... z = 26, and an encoded message,
// count the number of ways it can be decoded.
// For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

let dict = {};
let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('').forEach((letter, index) => {dict[index + 1] = letter});

// recursive decision
function countDecodedMessages(msg) {
    let count = 0;
    if (msg === '') {
        return 1;
    }
    for (const key in dict) {
        if (msg.startsWith(key)) {
            let restMsg = msg.slice(key.length);
            count += countDecodedMessages(restMsg);
        }
    }
    return count;
}

// non recursive with queues 1
function countDecodedMessages2(msg) {
    let messages = [];
    let message = {
        encoded: msg,
        decoded: ''
    };
    messages.push(message);
    while (messages.filter(m => m.encoded !== '').length > 0) {
        let len = messages.length;
        for (let i = 0; i < len; i++) {
            let currMsg = messages.shift();
            if (currMsg.encoded === '') {
                messages.push(currMsg);
            } else {
                for (const key in dict) {
                    if (currMsg.encoded.startsWith(key)) {
                        messages.push({
                            encoded: currMsg.encoded.slice(key.length),
                            decoded: currMsg.decoded + dict[key]
                        });
                    }
                }
            }
        }
    }
    console.log(messages.map(m => m.decoded));
    return messages.length;
}

// non recursive with queues 2
function countDecodedMessages3(msg) {
    let messages = [];
    let decoded = [];
    let message = {
        encoded: msg,
        decoded: ''
    };
    messages.push(message);
    while (messages.length > 0) {
        let currMsg = messages.shift();
        for (const key in dict) {
            if (currMsg.encoded.startsWith(key)) {
                let restEncodedMsg = currMsg.encoded.slice(key.length);
                let currDecodedMsg = currMsg.decoded + dict[key];
                if (restEncodedMsg === '') {
                    decoded.push(currDecodedMsg);
                    continue;
                }
                messages.push({
                    encoded: restEncodedMsg,
                    decoded: currDecodedMsg
                });
            }
        }
    }
    console.log(decoded);
    return decoded.length;
}

console.log(countDecodedMessages('1112345'));
console.log(countDecodedMessages2('1112345'));
console.log(countDecodedMessages3('1112345'));
