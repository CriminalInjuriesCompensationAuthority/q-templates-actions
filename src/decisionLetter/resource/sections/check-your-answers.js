'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'p-check-your-answers': {
                    title: 'Check your answers',
                    description: 'Check your answers before sending your letter',
                    type: 'object',
                    properties: {
                        summaryInfo: {
                            type: 'object',
                            urlPath: 'actions/decisionletter',
                            editAnswerText: 'Edit',
                            summaryStructure: [],
                            lookup: {}
                        }
                    }
                }
            },
            examples: [{}],
            invalidExamples: [
                {
                    foo: 'bar'
                }
            ],
            options: {
                pageContext: 'submission'
            }
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--confirmation'
                }
            ]
        }
    }
};
