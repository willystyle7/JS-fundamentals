let output = {
    user_name: 'xyz',
    user_address_home_city: 'city1',
    user_address_home_state: 'state1',
    user_address_office_city: 'city2',
    user_address_office_state: 'state2',
    user_phone_home: 1234,
    user_phone_office: 5678
};
// TODO
let output2 = {
    "/platform/v1/sdp/configs/home/ico/brtest.xml": "1",
    "/platform/v1/sdp/configs/home/ico/brtest2.xml": "2",
    "/platform/v1/sdp/configs/home/ico/gwtest.xml": "3",
    "/platform/v1/sdp/configs/home/ico/nodes.xml": "4",
    // "/platform/v1/sdp/configs": "5",
    // "/platform/v1/sdp/configs/home/ico": "6",
}

function buildTree(obj, separator = '_') {
    let result = {};
    Object.keys(obj).forEach(key => {
        let levels = key.split(separator);
        let tempBranch = result;
        levels.forEach((level, idx) => {
            if (idx === levels.length - 1) {
                tempBranch[level] = obj[key];
            } else {
                if (!tempBranch.hasOwnProperty(level)) {
                    tempBranch[level] = {};
                }
                tempBranch = tempBranch[level];
            }
        });
    });
    return result;
}

console.log(JSON.stringify(buildTree(output2, '/'), null, 2));

