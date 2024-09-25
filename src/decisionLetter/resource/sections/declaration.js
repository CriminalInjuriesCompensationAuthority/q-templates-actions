'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            title: 'Declaration',
            required: ['q-declaration'],
            propertyNames: {
                enum: ['q-declaration']
            },
            allOf: [
                {
                    properties: {
                        declaration: {
                            description: 'test'
                        }
                    }
                },
                {
                    properties: {
                        'q-declaration': {
                            type: 'string',
                            title: 'I have read and understood the declaration',
                            const: 'i-agree'
                        }
                    }
                }
            ],
            errorMessage: {
                required: {
                    'q-declaration': 'Select that you have read and understood'
                }
            },
            examples: [
                {
                    'q-declaration': 'i-agree'
                }
            ],
            invalidExamples: [
                {},
                {
                    foo: 'bar'
                },
                {
                    'q-declaration': true
                },
                {
                    'q-declaration': 'false'
                },
                {
                    'q-declaration': 123
                },
                {
                    'q-declaration': [123]
                }
            ],
            options: {
                pageContext: 'submission'
            }
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-confirmation'
                }
            ]
        }
    }
};
