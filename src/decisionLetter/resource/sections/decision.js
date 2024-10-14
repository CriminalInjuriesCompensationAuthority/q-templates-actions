'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'decision-letter-info': {
                    title: 'Decision Letter',
                    description: `
                    <p class="govuk-body">||/meta/personalisation/first-name|| ||/meta/personalisation/last-name||</p>
                    <p class="govuk-body">||/answers/system/case-reference||</p>
                    <p class="govuk-body">||/meta/personalisation/date||</p>
                    <p class="govuk-body">We've assessed your application for criminal injuries compensation. <b>Unfortunately, you are not eligible for compensation.</b></p>
                    <p class="govuk-body">This decision is based on the eligibility criteria in the Criminal Injuries Compensation Scheme.</p>
                    <p class="govuk-body">This decision is not intended to minimise the impact the incident may have had on you.</p>
                    <h2 class="govuk-heading-m">How we made this decision</h2>
                    <p class="govuk-body">||/meta/personalisation/decision-reason||</p>
                    <h2 class="govuk-heading-m">Request a review</h2>
                    <p class="govuk-body">You may want to request a review if you:</p>
                    <ul class='govuk-list govuk-list--bullet'>
                    <li>do not think we've considered all the information you gave us</li>
                    <li>think we've looked at the wrong information</li>
                    <li>have any extra information you'd like to give us</li>
                    <li>think our decision was wrong for another reason</li>
                    </ul>
                    <p class="govuk-body"><b>If you want to request a review, do this by 11:59pm on ||/meta/personalisation/expiry-date||.</b> We may be able to extend this date if there are exceptional circumstances.</p>
                    <p class="govuk-body">If your case is reviewed a new decision could mean the same, higher or lower award than in the first decision.</p>
                    <p class="govuk-body">You do not need to pay someone (like a claims lawyer) to request a review for you. If you do decide to use a paid representative, we cannot cover the cost of this.</p>
                    <h2 class="govuk-heading-m">What to do next</h2>
                    <p class="govuk-body">If you accept this decision, you do not need to do anything.</p>
                    <p class="govuk-body">If you do <b>not</b> accept this decision, you can request a review.</p>
                    <button type="submit" data-prevent-double-click="true" class="cica-disguised-button"><p class="govuk-body"><a class="govuk-link">Request a review</a></p></button>
                    <h2 class="govuk-heading-s">Download the decision</h2>
                    <p class="govuk-body">To keep a copy of the decision, download or print it.</p>
                    <p class="govuk-body">If you do not do this now, you can sign into your account and download or print it at any time before 11:59pm on ||/meta/personalisation/expiry-date||.</p>
                    <p class="govuk-body"><a class="govuk-link" href="/download/decision-letter" target="_blank">Download the decision</a></p>
                    <p class="govuk-body"><a class="govuk-link" href="" target="_blank">Print the decision</a></p>
                    <h2 class="govuk-heading-s">More information</h2>
                    <p class="govuk-body"><a class="govuk-link" href="https://www.gov.uk/government/publications/criminal-injuries-compensation-scheme-2012" target="_blank">Read more about the scheme</a></p>
                    <h2 class="govuk-heading-s">Contact us</h2>
                    <p class="govuk-body"><a class="govuk-link" href="/contact-us" target="_blank">Contact us if you have any queries</a></p>
                    `
                }
            },
            examples: [{}],
            invalidExamples: [
                {
                    'decision-letter-info': 'foo'
                }
            ],
            options: {
                hiddenButton: true
            }
        }
    },
    route: {
        on: {
            ANSWER: [
                {
                    target: 'p--context-request-review'
                }
            ]
        }
    }
};
