'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-certified-unfit'],
            additionalProperties: false,
            properties: {
                'q-applicant-certified-unfit': {
                    title: 'Were you certified unfit for work by a GP?',
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
                    'q-applicant-certified-unfit':
                        'Select yes if you were certified unfit for work by your GP'
                }
            },
            examples: [
                {
                    'q-applicant-certified-unfit': true
                },
                {
                    'q-applicant-certified-unfit': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-certified-unfit': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-additional-information'
                }
            ]
        }
    }
};
