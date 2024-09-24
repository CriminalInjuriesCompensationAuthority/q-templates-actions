'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-have-you-recovered-from-your-injury'],
            additionalProperties: false,
            properties: {
                'q-applicant-have-you-recovered-from-your-injury': {
                    title: 'Have you recovered from your injury?',
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
                            theme: 'medical-evidence'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-have-you-recovered-from-your-injury':
                        'Select yes if you have recovered from your injury'
                }
            },
            examples: [
                {
                    'q-applicant-have-you-recovered-from-your-injury': true
                },
                {
                    'q-applicant-have-you-recovered-from-your-injury': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-have-you-recovered-from-your-injury': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-describe-symptoms',
                    cond: [
                        '==',
                        '$.answers.p-applicant-have-you-recovered-from-your-injury.q-applicant-have-you-recovered-from-your-injury',
                        false
                    ]
                },
                {
                    target: 'p-applicant-referred-for-mental-treatment'
                }
            ]
        }
    }
};
