'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'sending-evidence-context': {
                    title: 'Sending supporting evidence',
                    description: `<p class="govuk-body">If you want to send us supporting evidence, you must do this by post or email.</p>
                    <p class="govuk-body">If you're posting documents, send us photocopies rather than originals if you can.</p>
                    <p class="govuk-body">Or you could email us a scan or a photo of the document.</p>
                    <p class="govuk-body">Include the reference number if you're sending us any evidence.</p>
                    <p class="govuk-body"></p>
                    <p class="govuk-body">If your case is reviewed, a new decision could me an the same, higher or lower award than in the first decision</p>
                    {% from "components/inset-text/macro.njk" import govukInsetText %}{{ govukInsetText({html: \'<h2 class="govuk-heading-s">Address</h2><p class="govuk-body">Criminal Injuries Compensation Authority</p><p class="govuk-body">10 Clyde Place</p><p class="govuk-body">Buchanan Wharf</p><p class="govuk-body">Glasgow</p><p class="govuk-body">G5 8AQ</p><p class="govuk-body">United Kingdom</p><h2 class="govuk-heading-s">Email</h2><p class="govuk-body"><a href="mailto:info@CICA.gov.uk">info@CICA.gov.uk</a></p>\'})}}

                    `
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
                    target: 'p-request-review-reasons'
                }
            ]
        }
    }
};
