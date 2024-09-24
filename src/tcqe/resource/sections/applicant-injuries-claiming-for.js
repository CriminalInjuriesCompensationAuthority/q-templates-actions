'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            allOf: [
                {
                    title: 'Please confirm the injuries you are claiming for',
                    meta: {
                        compositeId: 'injuries-claimed-for',
                        classifications: {
                            theme: 'injuries'
                        },
                        summary: {
                            title: 'Injuries being claimed for'
                        }
                    },
                    required: ['q-applicant-injury-1'],
                    propertyNames: {
                        enum: [
                            'q-applicant-injury-1',
                            'q-applicant-injury-2',
                            'q-applicant-injury-3',
                            'q-applicant-injury-4',
                            'q-applicant-injury-5'
                        ]
                    },
                    allOf: [
                        {
                            properties: {
                                'q-applicant-injury-1': {
                                    title: 'Injury 1',
                                    type: 'string',
                                    maxLength: 50,
                                    errorMessage: {
                                        maxLength: 'Injury must be 6 characters or less'
                                    }
                                }
                            }
                        },
                        {
                            properties: {
                                'q-applicant-injury-2': {
                                    title: 'Injury 2 (optional)',
                                    type: 'string',
                                    maxLength: 50,
                                    errorMessage: {
                                        maxLength: 'Injury must be 6 characters or less'
                                    }
                                }
                            }
                        },
                        {
                            properties: {
                                'q-applicant-injury-3': {
                                    title: 'Injury 3 (optional)',
                                    type: 'string',
                                    maxLength: 50,
                                    errorMessage: {
                                        maxLength: 'Injury must be 6 characters or less'
                                    }
                                }
                            }
                        },
                        {
                            properties: {
                                'q-applicant-injury-4': {
                                    title: 'Injury 4 (optional)',
                                    type: 'string',
                                    maxLength: 50,
                                    errorMessage: {
                                        maxLength: 'Injury must be 6 characters or less'
                                    }
                                }
                            }
                        },
                        {
                            properties: {
                                'q-applicant-injury-5': {
                                    title: 'Injury 5 (optional)',
                                    type: 'string',
                                    maxLength: 50,
                                    errorMessage: {
                                        maxLength: 'Injury must be 6 characters or less'
                                    }
                                }
                            }
                        }
                    ],
                    errorMessage: {
                        required: {
                            'q-applicant-injury-1': 'Enter at least one injury'
                        }
                    }
                }
            ],
            examples: [
                {
                    'q-applicant-injury-1': 'broken leg'
                }
            ],
            invalidExamples: [
                {
                    'q-applicant-injury': 12345
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-have-you-recovered-from-your-injury'
                }
            ]
        }
    }
};
