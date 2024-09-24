'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-other-compensation'],
            additionalProperties: false,
            properties: {
                'q-applicant-other-compensation': {
                    title:
                        'Have you been awarded any other compensation or damages for your injuries by any court or other source?',
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
                            theme: 'other-compensation'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-other-compensation':
                        'Select yes if you have been awarded compensation by any other source'
                }
            },
            examples: [
                {
                    'q-applicant-other-compensation': true
                },
                {
                    'q-applicant-other-compensation': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-other-compensation': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-other-compensation-amount',
                    cond: [
                        '==',
                        '$.answers.p-applicant-other-compensation.q-applicant-other-compensation',
                        true
                    ]
                },
                {
                    target: 'p-applicant-time-off-work'
                }
            ]
        }
    }
};
