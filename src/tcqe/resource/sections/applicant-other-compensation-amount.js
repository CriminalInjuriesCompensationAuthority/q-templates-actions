'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-other-compensation-amount'],
            properties: {
                'q-applicant-other-compensation-amount': {
                    type: 'string',
                    title: 'What was the full amount awarded?',
                    maxLength: 50,
                    errorMessage: {
                        maxLength: 'Amount must be 50 characters or less'
                    },
                    meta: {
                        classifications: {
                            theme: 'other-compensation'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-other-compensation-amount': 'Enter the full amount awarded'
                }
            },
            examples: [
                {
                    'q-applicant-other-compensation-amount': 'Some info'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-other-compensation-amount': 12345
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-time-off-work'
                }
            ]
        }
    }
};
