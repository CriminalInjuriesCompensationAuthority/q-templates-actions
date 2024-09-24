'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-able-to-pay-for-medical-evidence'],
            additionalProperties: false,
            properties: {
                'q-applicant-able-to-pay-for-medical-evidence': {
                    title: 'Are you able to pay for the initial medical evidence, up to £50?',
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
                            theme: 'medical-evidence'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-able-to-pay-for-medical-evidence':
                        'Select yes if you are able to pay up to £50 for initial medical evidence'
                }
            },
            examples: [
                {
                    'q-applicant-able-to-pay-for-medical-evidence': true
                },
                {
                    'q-applicant-able-to-pay-for-medical-evidence': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-able-to-pay-for-medical-evidence': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-unable-to-pay-reason',
                    cond: [
                        '==',
                        '$.answers.p-applicant-able-to-pay-for-medical-evidence.q-applicant-able-to-pay-for-medical-evidence',
                        false
                    ]
                },
                {
                    target: 'p-applicant-any-other-reasons-prevent-getting-medical-evidence'
                }
            ]
        }
    }
};
