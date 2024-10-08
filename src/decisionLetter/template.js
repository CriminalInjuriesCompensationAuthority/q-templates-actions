'use strict';

const {version} = require('../../package.json');

const checkYourAnswers = require('./resource/sections/check-your-answers.js');
const confirmation = require('./resource/sections/confirmation.js');
const contextRequestReview = require('./resource/sections/context-request-review.js');
const contextSendingEvidence = require('./resource/sections/context-sending-evidence.js');
const decisionLetter = require('./resource/sections/decision-letter.js');
const declaration = require('./resource/sections/declaration.js');
const doYouHaveSupportingEvidence = require('./resource/sections/do-you-have-supporting-evidence.js');
const requestReviewReasons = require('./resource/sections/request-review-reasons.js');

module.exports = {
    type: 'decisionletter',
    version,
    sections: {
        'p-check-your-answers': checkYourAnswers.section,
        'p--confirmation': confirmation.section,
        'p--context-request-review': contextRequestReview.section,
        'p--context-sending-evidence': contextSendingEvidence.section,
        'p-decision-letter': decisionLetter.section,
        'p-do-you-have-supporting-evidence': doYouHaveSupportingEvidence.section,
        'p-request-review-reasons': requestReviewReasons.section,
        'p-declaration': declaration.section
    },
    routes: {
        initial: 'p-decision-letter',
        referrer: 'https://www.gov.uk/claim-compensation-criminal-injury/make-claim',
        confirmation: 'p--confirmation',
        summary: ['p-check-your-answers'],
        states: {
            'p-check-your-answers': checkYourAnswers.route,
            'p--confirmation': confirmation.route,
            'p--context-request-review': contextRequestReview.route,
            'p--context-sending-evidence': contextSendingEvidence.route,
            'p-decision-letter': decisionLetter.route,
            'p-do-you-have-supporting-evidence': doYouHaveSupportingEvidence.route,
            'p-request-review-reasons': requestReviewReasons.route,
            'p-declaration': declaration.route
        }
    },
    answers: {},
    progress: ['p-decision-letter'],
    taxonomies: {
        theme: {
            taxa: {review: {}}
        }
    },
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
                    logger: '$.logger',
                    type: '$.type'
                }
            }
        ]
    },
    meta: {
        questionnaireDocumentVersion: '5.0.0',
        onCreate: {
            actions: [
                {
                    description: 'Notification email - applicant:adult',
                    type: 'sendEmail',
                    cond: ['==', '$.meta.personalisation.contact-method', 'email'],
                    // prettier-ignore
                    data: {
                        templateId: 'test notification',
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
