'use strict';

module.exports = {
    section: {
        schema: {
            $schema: 'http://json-schema.org/draft-07/schema#',
            type: 'object',
            additionalProperties: false,
            properties: {
                'scarring-context': {
                    title: 'Proof of scarring',
                    description:
                        '<p class="govuk-body">Please send recent colour photographs ensuring that the scar or disfigurement and the injured area of the body are clearly visible. You may be able take these photographs yourself or ask a photographer, friend or family member to take the photographs. Please email a copy of your photographs to <a class="govuk-link" href="mailto:info@cica.gov.uk" target="_blank">info@cica.gov.uk</a>. Please certify in the email that the photographs have not been retouched and ensure that your name and reference number are included in the email. Alternatively, if sending a physical copy, the person who takes the photographs must sign and date the back of each one and certify that it has not been retouched.</p><p class="govuk-body">Please ensure that our reference number is also written on the back of each photograph.</p>'
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
                    target: 'p--context-medical-evidence'
                }
            ]
        }
    }
};
