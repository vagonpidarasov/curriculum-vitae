module.exports = function (migration) {
    const experience = migration
        .createContentType('experience')
        .name('Experience')
        .description('')
        .displayField('companyName');

    experience
        .createField('companyName')
        .name('Company Name')
        .type('Symbol')
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);

    experience
        .createField('companyUrl')
        .name('Company URL')
        .type('Symbol')
        .localized(false)
        .required(false)
        .validations([
            {
                regexp: {
                    pattern:
                        '^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-\\/]))?$'
                }
            }
        ])
        .disabled(false)
        .omitted(false);

    experience
        .createField('position')
        .name('Position')
        .type('Symbol')
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);

    experience
        .createField('startDate')
        .name('Start Date')
        .type('Date')
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);

    experience
        .createField('period')
        .name('Period')
        .type('Integer')
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    experience
        .createField('description')
        .name('Description')
        .type('Text')
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    experience
        .createField('isCurrentPosition')
        .name('Current Position')
        .type('Boolean')
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    experience.changeEditorInterface('companyName', 'singleLine', {});
    experience.changeEditorInterface('companyUrl', 'singleLine', {});
    experience.changeEditorInterface('position', 'singleLine', {});

    experience.changeEditorInterface('startDate', 'datePicker', {
        format: 'dateonly'
    });

    experience.changeEditorInterface('period', 'numberEditor', {});
    experience.changeEditorInterface('description', 'markdown', {});

    experience.changeEditorInterface('isCurrentPosition', 'boolean', {
        trueLabel: 'Yes',
        falseLabel: 'No'
    });
};
