'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-additional-information'],
            properties: {
                'q-applicant-additional-information': {
                    type: 'string',
                    title:
                        'Enter any additional information you wish to provide about your injuries, treatment or claim',
                    maxLength: 2000,
                    errorMessage: {
                        maxLength: 'Additional information must be 2000 characters or less'
                    },
                    meta: {
                        classifications: {
                            theme: 'additional-information'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-additional-information': 'Enter any additional information'
                }
            },
            examples: [
                {
                    'q-applicant-additional-information': 'Some info'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-additional-information': 12345
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--check-your-answers'
                }
            ]
        }
    }
};
