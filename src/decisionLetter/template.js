'use strict';

const {version} = require('../../package.json');

const confirmation = require('./resource/sections/confirmation.js');
const decisionLetter = require('./resource/sections/decision-letter.js');
const requestReview = require('./resource/sections/request-review.js');
const declaration = require('./resource/sections/declaration.js');

module.exports = {
    type: 'decisionletter',
    version,
    sections: {
        'p--confirmation': confirmation.section,
        'p-decision-letter': decisionLetter.section,
        'p-request-review': requestReview.section,
        'p-declaration': declaration.section
    },
    routes: {
        initial: 'p-decision-letter',
        referrer: 'https://www.gov.uk/claim-compensation-criminal-injury/make-claim',
        confirmation: 'p--confirmation',
        summary: ['p-declaration'],
        states: {
            'p--confirmation': confirmation.route,
            'p-decision-letter': decisionLetter.route,
            'p-request-review': requestReview.route,
            'p-declaration': declaration.route
        }
    },
    answers: {},
    progress: ['p-decision-letter'],
    taxonomies: {},
    onSubmit: {
        id: 'task0',
        type: 'sequential',
        retries: 0,
        data: [
            {
                id: 'task1',
                type: 'transformAndUpload',
                retries: 0,
                data: {
                    questionnaireDef: '$.questionnaireDef',
                    logger: '$.logger'
                }
            }
        ]
    },
    onCreate: {
        id: 'task0',
        type: 'sequential',
        retries: 0,
        data: [
            {
                id: 'task1',
                type: 'sendNotifyMessageToSQS',
                retries: 0,
                data: {
                    questionnaire: '$.questionnaireDef',
                    logger: '$.logger'
                }
            }
        ]
    },
    meta: {
        questionnaireDocumentVersion: '5.0.0',
        onComplete: {
            actions: [
                {
                    description: 'Notification email - applicant:adult',
                    type: 'sendEmail',
                    cond: ['==', '$.meta.personalisation.contact-method', 'email'],
                    // prettier-ignore
                    data: {
                        templateId: 'test',
                        emailAddress:
                            '||/meta/personalisation/email||',
                        personalisation: {
                            caseReference: '1',
                            content: '2'
                        },
                        reference: null
                    }
                }
            ]
        }
    }
};
