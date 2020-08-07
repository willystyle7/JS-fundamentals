// shema for LocalCBC
let schema1 = {
    type: 'object',
    properties: {
        host: {
            type: 'string',
            description: 'ip:port',
        },
        path: {
            type: 'object',
            properties: {
                alert: {
                    type: 'string',
                    description: '/services/:domain/CAP/alert',
                },
                report: {
                    type: 'string',
                    description: '/api/cbc/reports/',
                },
            },
            required: ['alert', 'report'],
            additionalProperties: false,
        },
    },
    required: ['host', 'path'],
    additionalProperties: false,
};
// schema for ExternalCBE
let schema2 = {
    type: 'object',
    properties: {
        host: {
            type: 'string',
            description: 'ip:port',
        },
        path: {
            type: 'object',
            properties: {
                cease: {
                    type: 'string',
                    description: '/ceasePath',
                },
                resume: {
                    type: 'string',
                    description: '/resumePath',
                },
                maintenance: {
                    type: 'string',
                    description: '/maintenancePath',
                },
            },
            anyOf: [
                {
                    required: ['maintenance'],
                },
                {
                    required: ['cease', 'resume'],
                },
            ],
            additionalProperties: false,
        },
    },
    required: ['host', 'path'],
    additionalProperties: false,
};

function generateFields(schema, generated = {}, path = '') {
    if (schema.type === 'object') {
        for (let property in schema.properties) {
            generateFields(
                schema.properties[property],
                generated,
                path + (path ? '.' : '') + property
            );
        }
    } else if (schema.type) {
        generated[path] = {
            path: path,
            type: schema.type,
            description: schema.description,
            title: '',
        };
    }
    return generated;
}

console.log(generateFields(schema2, {}, ''));
