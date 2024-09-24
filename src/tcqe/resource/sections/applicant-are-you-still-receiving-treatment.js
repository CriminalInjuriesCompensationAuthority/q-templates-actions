'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-are-you-still-receiving-treatment'],
            additionalProperties: false,
            properties: {
                'q-applicant-are-you-still-receiving-treatment': {
                    title: 'Are you still receiving treatment as a result of the incident?',
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
                            theme: 'injuries'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-are-you-still-receiving-treatment':
                        'Select yes if you are still receiving treatment'
                }
            },
            examples: [
                {
                    'q-applicant-are-you-still-receiving-treatment': true
                },
                {
                    'q-applicant-are-you-still-receiving-treatment': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-are-you-still-receiving-treatment': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-treatment-physical-provider',
                    cond: [
                        '==',
                        '$.answers.p-applicant-are-you-still-receiving-treatment.q-applicant-are-you-still-receiving-treatment',
                        true
                    ]
                },
                {
                    target: 'p-applicant-referred-for-mental-treatment'
                }
            ]
        }
    }
};
