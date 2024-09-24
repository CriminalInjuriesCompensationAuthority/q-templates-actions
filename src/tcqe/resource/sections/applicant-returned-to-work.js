'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-returned-to-work'],
            additionalProperties: false,
            properties: {
                'q-applicant-returned-to-work': {
                    title: 'Have you now returned to work?',
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
                    'q-applicant-returned-to-work': 'Select yes if you have now returned to work'
                }
            },
            examples: [
                {
                    'q-applicant-returned-to-work': true
                },
                {
                    'q-applicant-returned-to-work': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-returned-to-work': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-first-date-of-absence'
                }
            ]
        }
    }
};
