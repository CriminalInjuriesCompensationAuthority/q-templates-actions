'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-any-other-reasons-prevent-getting-medical-evidence'],
            additionalProperties: false,
            properties: {
                'q-applicant-any-other-reasons-prevent-getting-medical-evidence': {
                    title:
                        'Are there any other reasons which would prevent you from getting the medical evidence?',
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
                    'q-applicant-any-other-reasons-prevent-getting-medical-evidence':
                        'Select yes if there are any other reasons that would prevent you from getting the medical evidence'
                }
            },
            examples: [
                {
                    'q-applicant-any-other-reasons-prevent-getting-medical-evidence': true
                },
                {
                    'q-applicant-any-other-reasons-prevent-getting-medical-evidence': false
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-any-other-reasons-prevent-getting-medical-evidence': 'foo'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-unable-to-get-evidence-other-reason',
                    cond: [
                        '==',
                        '$.answers.p-applicant-any-other-reasons-prevent-getting-medical-evidence.q-applicant-any-other-reasons-prevent-getting-medical-evidence',
                        true
                    ]
                },
                {
                    target: 'p-applicant-other-compensation'
                }
            ]
        }
    }
};
