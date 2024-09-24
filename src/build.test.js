'use strict';

const createTemplateValidator = require('q-template-validator');
const ajvFormatsMobileUk = require('ajv-formats-mobile-uk');
const generatedObject = require('../dist/template');

describe('build template', () => {
    it('should validate against the compiled document', () => {
        Object.keys(generatedObject).forEach(templateKey => {
            const qTemplateValidator = createTemplateValidator({
                questionnaireTemplate: generatedObject[templateKey],
                customSchemaFormats: {
                    'mobile-uk': ajvFormatsMobileUk
                }
            });
            const valid = qTemplateValidator.isValidCompiledDocument([
                'examples',
                'invalidExamples'
            ]);

            expect(valid).toEqual(true);
        });
    });
});
