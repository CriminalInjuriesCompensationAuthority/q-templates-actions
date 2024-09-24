'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-request-review'],
            properties: {
                'q-request-review': {
                    type: 'string',
                    title: 'Enter the reasons you would like to request a review',
                    maxLength: 2000,
                    errorMessage: {
                        maxLength: 'Reasons for review must be 2000 characters or less'
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-request-review': 'Enter any additional information'
                }
            },
            examples: [
                {
                    'q-request-review': 'Some info'
                }
            ],
            invalidExamples: [
                {
                    'q-request-review': 12345
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-declaration'
                }
            ]
        }
    }
};
