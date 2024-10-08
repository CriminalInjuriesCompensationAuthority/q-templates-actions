'use strict';

/* eslint-disable no-useless-escape */
module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                confirmation: {
                    title: 'Review Requested',
                    description: `{{ govukPanel({
                                      titleText: "Review requested",
                                      html: ''
                                    })}}
                                    <h2 class="govuk-heading-m">Next steps</h2>
                                    <p class="govuk-body">Thank you for asking for a review. We'll consider this adn send a letter to you when we've finished the review.</p>
                                    <h2 class="govuk-heading-m">Contact us</h2>
                                    <p class="govuk-body"><a class="govuk-link" href="/contact-us" target="_blank">Contact us if you have any queries</a>.</p>
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
        type: 'final'
    }
};
