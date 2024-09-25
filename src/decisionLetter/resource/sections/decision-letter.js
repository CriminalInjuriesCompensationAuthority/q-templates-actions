'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-accept-decision'],
            additionalProperties: false,
            properties: {
                'decision-letter-info': {
                    title: 'Decision Letter',
                    description: `<p class="govuk-body">You are ||/meta/personalisation/first-name|| ||/meta/personalisation/last-name||. You are not eligible for compensation</p>`
                },
                'q-accept-decision': {
                    title: 'Do you accept the decision?',
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
                    ]
                }
            },
            errorMessage: {
                required: {
                    'q-accept-decision': 'Select yes if you accept the decision'
                }
            },
            examples: [
                {
                    'q-accept-decision': true
                },
                {
                    'q-accept-decision': false
                }
            ],
            invalidExamples: [
                {
                    'q-accept-decision': 'foos'
                }
            ],
            options: {
                outputOrder: ['decision-letter-info', 'q-accept-decision'],
                properties: {
                    'q-accept-decision': {
                        options: {
                            macroOptions: {
                                fieldset: {
                                    legend: {
                                        classes: 'govuk-fieldset__legend--m'
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--confirmation',
                    cond: ['==', '$.answers.p-decision-letter.q-accept-decision', true]
                },
                {
                    target: 'p-request-review'
                }
            ]
        }
    }
};
