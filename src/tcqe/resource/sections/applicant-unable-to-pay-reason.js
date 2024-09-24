'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-unable-to-pay-reasons'],
            properties: {
                'q-applicant-unable-to-pay-reasons': {
                    type: 'string',
                    title: 'Explain why you are not able to pay up to £50 for the medical evidence',
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
                    'q-applicant-unable-to-pay-reasons':
                        'Explain why you are not able to pay up to £50 for the medical evidence'
                }
            },
            examples: [
                {
                    'q-applicant-unable-to-pay-reasons': 'Some info'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-unable-to-pay-reasons': 12345
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-any-other-reasons-prevent-getting-medical-evidence'
                }
            ]
        }
    }
};
