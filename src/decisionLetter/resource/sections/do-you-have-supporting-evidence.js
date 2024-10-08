'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-do-you-have-supporting-evidence'],
            additionalProperties: false,
            properties: {
                'q-do-you-have-supporting-evidence': {
                    title: 'Do you have supporting evidence you want to send us?',
                    description:
                        "This could be any documents you think are relevant. Do not send us anything you've sent us before",
                    type: 'boolean',
                    oneOf: [
                        {
                            title: 'Yes',
                            const: true
                        },
                        {
                            title: 'No',
                            const: false
                        }
                    ],
                    meta: {
                        classifications: {
                            theme: 'review-information'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-do-you-have-supporting-evidence':
                        'Select yes if you have any supporting evidence'
                }
            },
            examples: [
                {
                    'q-do-you-have-supporting-evidence': true
                },
                {
                    'q-do-you-have-supporting-evidence': false
                }
            ],
            invalidExamples: [
                {
                    'q-do-you-have-supporting-evidence': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--context-sending-evidence',
                    cond: [
                        '==',
                        '$.answers.p-do-you-have-supporting-evidence.q-do-you-have-supporting-evidence',
                        true
                    ]
                },
                {
                    target: 'p-request-review-reasons'
                }
            ]
        }
    }
};
