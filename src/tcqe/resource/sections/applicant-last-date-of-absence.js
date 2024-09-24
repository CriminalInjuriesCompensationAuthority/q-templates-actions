'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-last-date-of-absence'],
            additionalProperties: false,
            properties: {
                'q-applicant-last-date-of-absence': {
                    title: 'Enter the last date of absence',
                    type: 'string',
                    format: 'date-time',
                    description: 'For example, 31 12 2010.',
                    errorMessage: {
                        format: 'Enter the last date of absence including day, month and year'
                    },
                    meta: {
                        classifications: {
                            theme: 'employment'
                        }
                    }
                }
            },
            errorMessage: {
                required: {
                    'q-applicant-last-date-of-absence':
                        'Enter the last date of absence including day, month and year'
                }
            },
            examples: [
                {
                    'q-applicant-last-date-of-absence': '1970-01-01T00:00:00.000Z'
                },
                {
                    'q-applicant-last-date-of-absence': '2019-01-01T00:00:00.000Z'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-last-date-of-absence': 12345
                },
                {
                    'q-applicant-last-date-of-absence': 'not a date'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-certified-unfit'
                }
            ]
        }
    }
};
