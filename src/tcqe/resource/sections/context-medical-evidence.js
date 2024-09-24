'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'medical-evidence-context': {
                    title: 'Medical evidence',
                    description:
                        '<p class="govuk-body">When we receive this completed questionnaire we will decide whether it is the right time to obtain medical evidence. If we decide that we need this, it will be your responsibility to obtain this using the form we give you. You will then have to pay your GP or dentist direct for the initial medical evidence, up to a maximum cost of £50 including VAT. If costs exceed £50, we will reimburse the additional amount. If you are not able to pay for the medical evidence, or you would have problems obtaining it, we may be able to help you. We may request this on your behalf and deduct the cost (up to the £50 maximum) from any compensation payment.</p>'
                }
            },
            examples: [{}],
            invalidExamples: [
                {
                    foo: 'bar'
                }
            ]
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p-applicant-able-to-pay-for-medical-evidence'
                }
            ]
        }
    }
};
