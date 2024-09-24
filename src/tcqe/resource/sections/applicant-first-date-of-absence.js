'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            required: ['q-applicant-first-date-of-absence'],
            additionalProperties: false,
            properties: {
                'q-applicant-first-date-of-absence': {
                    title: 'Enter the first date of absence',
                    type: 'string',
                    format: 'date-time',
                    description: 'For example, 31 12 2010.',
                    errorMessage: {
                        format: 'Enter the first date of absence including day, month and year'
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
                    'q-applicant-first-date-of-absence':
                        'Enter the first date of absence including day, month and year'
                }
            },
            examples: [
                {
                    'q-applicant-first-date-of-absence': '1970-01-01T00:00:00.000Z'
                },
                {
                    'q-applicant-first-date-of-absence': '2019-01-01T00:00:00.000Z'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-first-date-of-absence': 12345
                },
                {
                    'q-applicant-first-date-of-absence': 'not a date'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-last-date-of-absence'
                }
            ]
        }
    }
};
