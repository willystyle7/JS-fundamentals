let condition = {
    op: 'AND',
    rules: [
        {
            op: '<=',
            tag: 'tag1',
            value: '1',
        },
        {
            op: '>',
            tag: 'tag2',
            value: '22',
        },
        {
            op: 'OR',
            rules: [
                {
                    op: '>',
                    tag: 'tag3',
                    value: '33',
                },
                {
                    op: 'AND',
                    rules: [
                        {
                            op: '!=',
                            tag: 'tag4',
                            value: '4',
                        },
                        {
                            op: 'contains',
                            tag: 'tag5',
                            value: '55',
                        },
                    ],
                },
            ],
        },
    ],
};

function renameLogicalOpCondition(condition, oldPropertyName, newPropertyName) {
    if (condition.rules) {
        condition[newPropertyName] = condition[oldPropertyName];
        delete condition[oldPropertyName];
        condition.rules.forEach((rule) => {
            renameLogicalOpCondition(rule, oldPropertyName, newPropertyName);
        });
    }
    return condition;
}

// let renamedCondition = renameLogicalOpCondition(condition, 'op', 'logical_op');
// console.log(JSON.stringify(renamedCondition, null, 4));

let condition2 = {
    rules: [
        {
            op: '<=',
            tag: 'tag1',
            value: '1',
        },
        {
            op: '>',
            tag: 'tag2',
            value: '22',
        },
        {
            rules: [
                {
                    op: '>',
                    tag: 'tag3',
                    value: '33',
                },
                {
                    rules: [
                        {
                            op: '!=',
                            tag: 'tag4',
                            value: '4',
                        },
                        {
                            op: 'contains',
                            tag: 'tag5',
                            value: '55',
                        },
                    ],
                    logical_op: 'AND',
                },
            ],
            logical_op: 'OR',
        },
    ],
    logical_op: 'AND',
};

let renamedCondition2 = renameLogicalOpCondition(condition2, 'logical_op', 'op');
console.log(JSON.stringify(renamedCondition2, null, 4));
