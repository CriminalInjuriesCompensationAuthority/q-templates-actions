'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-unable-to-get-evidence-other-reason'],
            properties: {
                'q-applicant-unable-to-get-evidence-other-reason': {
                    type: 'string',
                    title: 'Explain why you are not able to obtain medical evidence',
                    maxLength: 2000,
                    errorMessage: {
                        maxLength: 'Reason must be 2000 characters or less'
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
                    'q-applicant-unable-to-get-evidence-other-reason':
                        'Explain why you are not able to obtain medical evidence'
                }
            },
            examples: [
                {
                    'q-applicant-unable-to-get-evidence-other-reason': 'Some info'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-unable-to-get-evidence-other-reason': 12345
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-other-compensation'
                }
            ]
        }
    }
};
