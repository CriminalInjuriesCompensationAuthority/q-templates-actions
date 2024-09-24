'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-describe-symptoms'],
            properties: {
                'q-applicant-describe-symptoms': {
                    type: 'string',
                    title: 'Describe your symptoms',
                    description:
                        'If you have not fully recovered, we may hold your application until you are able to confirm you have stopped receiving treatment or you have recovered sufficiently. This helps us to assess the long-term impact of your injuries.',
                    maxLength: 2000,
                    errorMessage: {
                        maxLength: 'Symptom description must be 2000 characters or less'
                    },
                    meta: {
                        classifications: {
                            theme: 'medical-evidence'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-describe-symptoms': 'Describe your symptoms'
                }
            },
            examples: [
                {
                    'q-applicant-describe-symptoms': 'Some info'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-describe-symptoms': 12345
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-are-you-still-receiving-treatment'
                }
            ]
        }
    }
};
