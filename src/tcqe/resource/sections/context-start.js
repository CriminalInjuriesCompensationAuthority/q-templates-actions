'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'start-context': {
                    title: 'Additional information for application for compensation',
                    description:
                        '<p class="govuk-body">We are almost ready to assess your application for compensation but we need some more information about your current medical situation, your recovery and any ongoing treatment you may be receiving.</p><p class="govuk-body">This is to help us assess if an award is appropriate. We can only make a payment if the injury is one which is described in the Tariff at Annex E of the Criminal InjuriesCompensation Scheme 2012. A copy of this is available on <a class="govuk-link" href="https://www.gov.uk/" target="_blank">www.gov.uk</a>.</p><p class="govuk-body">Please complete and return the form overleaf to us within 30 days of the date of this letter to help progress your claim. If you have any difficulty getting the information we need, please contact us as soon as you can so we can discuss how best to proceed.</p><p class="govuk-body">Please let us know immediately of any changes in your circumstances including any change of address or contact information. If you have any questions about this letteror your claim, please call our Customer Support Team on 0300 003 3601 and have our reference number available when calling. You may also find our guide to the Scheme helpful and this can be found at <a class="govuk-link" href="https://www.gov.uk/" target="_blank">www.gov.uk</a></p>'
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
                    target: 'p-applicant-injuries-claiming-for'
                }
            ]
        }
    }
};
