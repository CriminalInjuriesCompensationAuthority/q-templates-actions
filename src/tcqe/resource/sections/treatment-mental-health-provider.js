'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            allOf: [
                {
                    title: 'Enter the name and contact details of the people providing treatment',
                    meta: {
                        compositeId: 'mental-health-provider',
                        classifications: {
                            theme: 'injuries-mental'
                        },
                        summary: {
                            title: 'Mental health treatment provider'
                        }
                    },
                    required: [
                        'q-treatment-mental-health-provider-name',
                        'q-treatment-mental-health-provider-job-title',
                        'q-treatment-mental-health-provider-building-and-street',
                        'q-treatment-mental-health-provider-town-or-city',
                        'q-treatment-mental-health-provider-postcode',
                        'q-treatment-mental-health-provider-telephone-number',
                        'q-treatment-mental-health-provider-injury'
                    ],
                    propertyNames: {
                        enum: [
                            'q-treatment-mental-health-provider-name',
                            'q-treatment-mental-health-provider-job-title',
                            'q-treatment-mental-health-provider-building-and-street',
                            'q-treatment-mental-health-provider-building-and-street-2',
                            'q-treatment-mental-health-provider-building-and-street-3',
                            'q-treatment-mental-health-provider-town-or-city',
                            'q-treatment-mental-health-provider-postcode',
                            'q-treatment-mental-health-provider-telephone-number',
                            'q-treatment-mental-health-provider-injury'
                        ]
                    },
                    allOf: [
                        {
                            properties: {
                                'q-treatment-mental-health-provider-name': {
                                    type: 'string',
                                    title: 'Treatment provider name',
                                    maxLength: 60,
                                    errorMessage: {
                                        maxLength:
                                            'Treatment provider name must be 60 characters or less'
                                    }
                                }
                            }
                        },
                        {
                            properties: {
                                'q-treatment-mental-health-provider-job-title': {
                                    type: 'string',
                                    title: 'Treatment provider job title',
                                    maxLength: 60,
                                    errorMessage: {
                                        maxLength:
                                            'Treatment provider job title must be 60 characters or less'
                                    }
                                }
                            }
                        },
                        {
                            properties: {
                                'q-treatment-mental-health-provider-building-and-street': {
                                    type: 'string',
                                    title: 'Address line 1',
                                    maxLength: 32,
                                    errorMessage: {
                                        maxLength:
                                            'First line of address must be 32 characters or less'
                                    }
                                }
                            }
                        },
                        {
                            properties: {
                                'q-treatment-mental-health-provider-building-and-street-2': {
                                    type: 'string',
                                    title: 'Address line 2 (optional)',
                                    maxLength: 32,
                                    errorMessage: {
                                        maxLength:
                                            'Second line of address must be 32 characters or less'
                                    }
                                }
                            }
                        },
                        {
                            properties: {
                                'q-treatment-mental-health-provider-building-and-street-3': {
                                    type: 'string',
                                    title: 'Address line 3 (optional)',
                                    maxLength: 32,
                                    errorMessage: {
                                        maxLength:
                                            'Third line of address must be 32 characters or less'
                                    }
                                }
                            }
                        },
                        {
                            properties: {
                                'q-treatment-mental-health-provider-town-or-city': {
                                    type: 'string',
                                    title: 'Town or city',
                                    maxLength: 32,
                                    errorMessage: {
                                        maxLength: 'Town or city must be 32 characters or less'
                                    }
                                }
                            }
                        },
                        {
                            properties: {
                                'q-treatment-mental-health-provider-postcode': {
                                    type: 'string',
                                    title: 'Postcode',
                                    description:
                                        'This could be a UK postcode or an international postal or zip code.',
                                    maxLength: 10,
                                    errorMessage: {
                                        maxLength: 'Postcode must be 10 characters or less'
                                    }
                                }
                            }
                        },
                        {
                            properties: {
                                'q-treatment-mental-health-provider-telephone-number': {
                                    type: 'string',
                                    title: 'Treatment provider telephone number',
                                    maxLength: 20,
                                    pattern: '^[\\+\\d][\\d \\(\\)\\+\\-\\#]{7,19}$',
                                    errorMessage: {
                                        maxLength: 'Telephone number must be 20 characters or less',
                                        pattern:
                                            'Enter a telephone number, like 01632 960 001, 07700 900 982 or +44 0808 157 0192'
                                    }
                                }
                            }
                        },
                        {
                            properties: {
                                'q-treatment-mental-health-provider-injury': {
                                    type: 'string',
                                    title: 'Injury they are providing treatment for',
                                    maxLength: 60,
                                    errorMessage: {
                                        maxLength:
                                            'Injury description must be 60 characters or less'
                                    }
                                }
                            }
                        }
                    ],
                    errorMessage: {
                        required: {
                            'q-treatment-mental-health-provider-name':
                                'Enter the name of the people providing treatment',
                            'q-treatment-mental-health-provider-job-title':
                                'Enter the job title of the people providing treatment',
                            'q-treatment-mental-health-provider-building-and-street':
                                'Enter the first line of address of the people providing treatment',
                            'q-treatment-mental-health-provider-town-or-city':
                                'Enter the town or city where the people providing treatment live',
                            'q-treatment-mental-health-provider-postcode':
                                'Enter the postcode of the people providing treatment',
                            'q-treatment-mental-health-provider-telephone-number':
                                'Enter the telephone number of the people providing treatment',
                            'q-treatment-mental-health-provider-injury':
                                'Enter the injury the treatment is being provided for'
                        }
                    }
                }
            ],
            examples: [
                {
                    'q-treatment-mental-health-provider-name': 'test',
                    'q-treatment-mental-health-provider-job-title': 'test',
                    'q-treatment-mental-health-provider-building-and-street': 'test',
                    'q-treatment-mental-health-provider-town-or-city': 'test',
                    'q-treatment-mental-health-provider-postcode': 'test',
                    'q-treatment-mental-health-provider-telephone-number': '01632 960 001',
                    'q-treatment-mental-health-provider-injury': 'test'
                }
            ],
            invalidExamples: [
                {
                    'q-treatment-mental-health-provider-name': 1234556,
                    'q-treatment-mental-health-provider-job-title': 'test',
                    'q-treatment-mental-health-provider-building-and-street': 'test',
                    'q-treatment-mental-health-provider-town-or-city': 'test',
                    'q-treatment-mental-health-provider-postcode': 'test',
                    'q-treatment-mental-health-provider-telephone-number': 111,
                    'q-treatment-mental-health-provider-injury': 'test'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-scarring'
                }
            ]
        }
    }
};
