'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-time-off-work'],
            additionalProperties: false,
            properties: {
                'q-applicant-time-off-work': {
                    title: 'Have you been off work as a direct result of the injury',
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
                            theme: 'employment'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-time-off-work':
                        'Select yes if you have taken time off work as a direct result of the injury'
                }
            },
            examples: [
                {
                    'q-applicant-time-off-work': true
                },
                {
                    'q-applicant-time-off-work': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-time-off-work': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-returned-to-work',
                    cond: [
                        '==',
                        '$.answers.p-applicant-time-off-work.q-applicant-time-off-work',
                        true
                    ]
                },
                {
                    target: 'p-applicant-additional-information'
                }
            ]
        }
    }
};
