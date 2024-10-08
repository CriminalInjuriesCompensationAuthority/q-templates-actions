'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'request-review-context': {
                    title: 'Request a review',
                    description: `<p class="govuk-body">We're going to ask about your reasons for requesting a review.</p>
                    <p class="govuk-body">This will include if you want to send us supporting evidence along with your review.</p>
                    <p class="govuk-body">You may want to request a review if you:</p>
                    <ul class='govuk-list govuk-list--bullet'>
                    <li>do not think we've considered all the information you gave us</li>
                    <li>think we've looked at the wrong information</li>
                    <li>have any extra information you'd like to give us</li>
                    <li>think our decision was wrong for another reason</li>
                    </ul>
                    <p class="govuk-body">If your case is reviewed, a new decision could me an the same, higher or lower award than in the first decision</p>
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
                    target: 'p-do-you-have-supporting-evidence'
                }
            ]
        }
    }
};
