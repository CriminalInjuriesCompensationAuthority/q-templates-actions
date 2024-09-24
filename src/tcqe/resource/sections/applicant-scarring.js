'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-scarring'],
            additionalProperties: false,
            properties: {
                'q-applicant-scarring': {
                    title: 'Do you have any visible scarring or disfigurement',
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
                            theme: 'scarring'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-scarring': 'Select yes if you have any scarring or disfigurement'
                }
            },
            examples: [
                {
                    'q-applicant-scarring': true
                },
                {
                    'q-applicant-scarring': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-scarring': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--context-scarring',
                    cond: ['==', '$.answers.p-applicant-scarring.q-applicant-scarring', true]
                },
                {
                    target: 'p--context-medical-evidence'
                }
            ]
        }
    }
};
