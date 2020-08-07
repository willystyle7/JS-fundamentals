// https://stackoverflow.com/questions/61336489/javascript-recursion-thru-children-and-display-in-html

/*
  Example result that I want to achieve is something like be:

      (1894 $or 1501)
      $or
      (7068 $or 7120 or 7141)
      $or
      (997 $and 9001)
      $or
      (7256 $or 4534)
  */

//My sample data:

const data = [
    {
        type: '$or',
        items: [
            {
                course_id: '1894',
            },
            {
                course_id: '1501',
            },
            {
                type: '$or',
                items: [
                    {
                        course_id: '7068',
                    },
                    {
                        course_id: '7120',
                    },
                    {
                        course_id: '7141',
                    },
                    {
                        type: '$and',
                        items: [
                            {
                                course_id: '997',
                            },
                            {
                                course_id: '9001',
                            },
                        ],
                    },
                ],
            },
            {
                type: '$or',
                items: [
                    {
                        course_id: '7256',
                    },
                    {
                        course_id: '4534',
                    },
                ],
            },
        ],
    },
];

// without ident oneliner
function recursion(items, type = '') {
    let result = [];
    for (let item of items) {
        if (!item.items && !item.type) {
            result.push(item.course_id);
        } else {
            result.push(`(${recursion(item.items, item.type)})`);
        }
    }
    return result.join(` ${type} `);
}

// with identation
function recursion2(items, type = '', depth = 0) {
    let tab = '  '
    let ident = tab.repeat(depth * 2);
    let prevIdent = depth ? tab.repeat((depth - 1) * 2) : tab;
    let result = [];
    for (let item of items) {
        if (!item.items && !item.type) {
            result.push(item.course_id);
        } else {
            result.push(`${ident}(\n${ident + tab}${recursion2(item.items, item.type, depth + 1)}\n${ident})`);
        }
    }
    return result.join(`\n${ident + tab}${type}\n${ident}`);
}

//start here
console.log(recursion2(data));
