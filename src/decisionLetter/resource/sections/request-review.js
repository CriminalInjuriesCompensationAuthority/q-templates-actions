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
                    title: 'Tell us why you want a review',
                    description:
                        'Give reasons why our decision should be reviewed. Do not include personal or financial information, like your National Insurance number or credit card details.',
                    maxLength: 2000,
                    errorMessage: {
                        maxLength: 'Reasons for review must be 2000 characters or less'
                    },
                    meta: {
                        classifications: {
                            theme: 'review-information'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-request-review': 'Enter your reasons for requesting a review'
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
                    target: 'p-check-your-answers'
                }
            ]
        }
    }
};
