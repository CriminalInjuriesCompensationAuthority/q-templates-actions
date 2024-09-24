'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-referred-for-mental-treatment'],
            additionalProperties: false,
            properties: {
                'q-applicant-referred-for-mental-treatment': {
                    title:
                        'Have you been referred to a psychiatrist or clinical psychologist for treatment?',
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
                            theme: 'injuries-mental'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-referred-for-mental-treatment':
                        'Select yes if you have been referred to a psychiatrist or clinical psychologist for treatment'
                }
            },
            examples: [
                {
                    'q-applicant-referred-for-mental-treatment': true
                },
                {
                    'q-applicant-referred-for-mental-treatment': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-referred-for-mental-treatment': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-treatment-mental-health-provider',
                    cond: [
                        '==',
                        '$.answers.p-applicant-referred-for-mental-treatment.q-applicant-referred-for-mental-treatment',
                        true
                    ]
                },
                {
                    target: 'p-applicant-scarring'
                }
            ]
        }
    }
};
