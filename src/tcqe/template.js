'use strict';

const {version} = require('../../package.json');

const confirmation = require('./resource/sections/confirmation.js');
const applicantDeclaration = require('./resource/sections/applicant-declaration.js');
const applicantAbleToPayForMedicalEvidence = require('./resource/sections/applicant-able-to-pay-for-medical-evidence.js');
const applicantAdditionalInformation = require('./resource/sections/applicant-additional-information.js');
const applicantAnyOtherReasonsPreventGettingMedicalEvidence = require('./resource/sections/applicant-any-other-reasons-prevent-getting-medical-evidence.js');
const applicantAreYouStillReceivingTreatment = require('./resource/sections/applicant-are-you-still-receiving-treatment.js');
const applicantCertifiedUnfit = require('./resource/sections/applicant-certified-unfit.js');
const applicantOtherCompensationAmount = require('./resource/sections/applicant-other-compensation-amount.js');
const applicantOtherCompensation = require('./resource/sections/applicant-other-compensation.js');
const applicantDescribeSymptoms = require('./resource/sections/applicant-describe-symptoms.js');
const applicantFirstDateOfAbsence = require('./resource/sections/applicant-first-date-of-absence.js');
const applicantHaveYouRecoveredFromYourInjury = require('./resource/sections/applicant-have-you-recovered-from-your-injury.js');
const applicantInjuriesClaimingFor = require('./resource/sections/applicant-injuries-claiming-for.js');
const applicantLastDateOfAbsence = require('./resource/sections/applicant-last-date-of-absence.js');
const applicantReferredForMentalTreatment = require('./resource/sections/applicant-referred-for-mental-treatment.js');
const applicantReturnedToWork = require('./resource/sections/applicant-returned-to-work.js');
const applicantScarring = require('./resource/sections/applicant-scarring.js');
const applicantTimeOffWork = require('./resource/sections/applicant-time-off-work.js');
const applicantUnableToGetEvidenceOtherReason = require('./resource/sections/applicant-unable-to-get-evidence-other-reason.js');
const applicantUnableToPayReason = require('./resource/sections/applicant-unable-to-pay-reason.js');
const checkYourAnswers = require('./resource/sections/check-your-answers.js');
const contextMedicalEvidence = require('./resource/sections/context-medical-evidence.js');
const contextScarring = require('./resource/sections/context-scarring.js');
const contextStart = require('./resource/sections/context-start.js');
const treatmentMentalHealthProvider = require('./resource/sections/treatment-mental-health-provider.js');
const treatmentPhysicalProvider = require('./resource/sections/treatment-physical-provider.js');

module.exports = {
    type: 'tcqe',
    version,
    sections: {
        'p--confirmation': confirmation.section,
        'p-applicant-declaration': applicantDeclaration.section,
        'p-applicant-able-to-pay-for-medical-evidence':
            applicantAbleToPayForMedicalEvidence.section,
        'p-applicant-additional-information': applicantAdditionalInformation.section,
        'p-applicant-any-other-reasons-prevent-getting-medical-evidence':
            applicantAnyOtherReasonsPreventGettingMedicalEvidence.section,
        'p-applicant-are-you-still-receiving-treatment':
            applicantAreYouStillReceivingTreatment.section,
        'p-applicant-certified-unfit': applicantCertifiedUnfit.section,
        'p-applicant-other-compensation-amount': applicantOtherCompensationAmount.section,
        'p-applicant-other-compensation': applicantOtherCompensation.section,
        'p-applicant-describe-symptoms': applicantDescribeSymptoms.section,
        'p-applicant-first-date-of-absence': applicantFirstDateOfAbsence.section,
        'p-applicant-have-you-recovered-from-your-injury':
            applicantHaveYouRecoveredFromYourInjury.section,
        'p-applicant-injuries-claiming-for': applicantInjuriesClaimingFor.section,
        'p-applicant-last-date-of-absence': applicantLastDateOfAbsence.section,
        'p-applicant-referred-for-mental-treatment': applicantReferredForMentalTreatment.section,
        'p-applicant-returned-to-work': applicantReturnedToWork.section,
        'p-applicant-scarring': applicantScarring.section,
        'p-applicant-time-off-work': applicantTimeOffWork.section,
        'p-applicant-unable-to-get-evidence-other-reason':
            applicantUnableToGetEvidenceOtherReason.section,
        'p-applicant-unable-to-pay-reason': applicantUnableToPayReason.section,
        'p--check-your-answers': checkYourAnswers.section,
        'p--context-medical-evidence': contextMedicalEvidence.section,
        'p--context-scarring': contextScarring.section,
        'p--context-start': contextStart.section,
        'p-treatment-mental-health-provider': treatmentMentalHealthProvider.section,
        'p-treatment-physical-provider': treatmentPhysicalProvider.section
    },
    routes: {
        initial: 'p--context-start',
        referrer: 'https://www.gov.uk/claim-compensation-criminal-injury/make-claim',
        confirmation: 'p--confirmation',
        summary: ['p-applicant-declaration'],
        states: {
            'p--confirmation': confirmation.route,
            'p-applicant-declaration': applicantDeclaration.route,
            'p-applicant-able-to-pay-for-medical-evidence':
                applicantAbleToPayForMedicalEvidence.route,
            'p-applicant-additional-information': applicantAdditionalInformation.route,
            'p-applicant-any-other-reasons-prevent-getting-medical-evidence':
                applicantAnyOtherReasonsPreventGettingMedicalEvidence.route,
            'p-applicant-are-you-still-receiving-treatment':
                applicantAreYouStillReceivingTreatment.route,
            'p-applicant-certified-unfit': applicantCertifiedUnfit.route,
            'p-applicant-other-compensation-amount': applicantOtherCompensationAmount.route,
            'p-applicant-other-compensation': applicantOtherCompensation.route,
            'p-applicant-describe-symptoms': applicantDescribeSymptoms.route,
            'p-applicant-first-date-of-absence': applicantFirstDateOfAbsence.route,
            'p-applicant-have-you-recovered-from-your-injury':
                applicantHaveYouRecoveredFromYourInjury.route,
            'p-applicant-injuries-claiming-for': applicantInjuriesClaimingFor.route,
            'p-applicant-last-date-of-absence': applicantLastDateOfAbsence.route,
            'p-applicant-referred-for-mental-treatment': applicantReferredForMentalTreatment.route,
            'p-applicant-returned-to-work': applicantReturnedToWork.route,
            'p-applicant-scarring': applicantScarring.route,
            'p-applicant-time-off-work': applicantTimeOffWork.route,
            'p-applicant-unable-to-get-evidence-other-reason':
                applicantUnableToGetEvidenceOtherReason.route,
            'p-applicant-unable-to-pay-reason': applicantUnableToPayReason.route,
            'p--check-your-answers': checkYourAnswers.route,
            'p--context-medical-evidence': contextMedicalEvidence.route,
            'p--context-scarring': contextScarring.route,
            'p--context-start': contextStart.route,
            'p-treatment-mental-health-provider': treatmentMentalHealthProvider.route,
            'p-treatment-physical-provider': treatmentPhysicalProvider.route
        }
    },
    answers: {},
    progress: ['p--context-start'],
    taxonomies: {
        theme: {
            taxa: {
                injuries: {
                    title: 'Your injuries'
                },
                'injuries-mental': {
                    title: 'Mental injuries'
                },
                scarring: {
                    title: 'Injury causing scarring'
                },
                'medical-evidence': {
                    title: 'Medical evidence'
                },
                'other-compensation': {
                    title: 'Other compensation or damages'
                },
                employment: {
                    title: 'Employment details'
                },
                'additional-information': {
                    title: 'Additional information'
                },
                default: {
                    title: 'Other Information'
                }
            }
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
            },
            {
                id: 'task2',
                type: 'sendSubmissionMessageToSQS',
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
            actions: []
        }
    }
};
