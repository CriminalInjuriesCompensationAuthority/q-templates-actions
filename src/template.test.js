'use strict';

const createTemplateValidator = require('q-template-validator');
const ajvFormatsMobileUk = require('ajv-formats-mobile-uk');
const templates = require('./templates');

describe('all templates', () => {
    it('should be valid', () => {
        Object.keys(templates).forEach(templateKey => {
            const qTemplateValidator = createTemplateValidator({
                questionnaireTemplate: templates[templateKey],
                customSchemaFormats: {
                    'mobile-uk': ajvFormatsMobileUk
                }
            });
            const valid = qTemplateValidator.validateTemplate();

            expect(valid).toEqual(true);
        });
    });
});
