module.exports = function (migration) {
    const education = migration
        .createContentType('education')
        .name('Education')
        .description('Education of an employee')
        .displayField('universityName');

    education
        .createField('universityName')
        .name('University Name')
        .type('Symbol')
        .localized(true)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);

    education
        .createField('degree')
        .name('Degree')
        .type('Symbol')
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    education
        .createField('fieldOfStudy')
        .name('Field of study')
        .type('Symbol')
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    education
        .createField('startDate')
        .name('Start Date')
        .type('Date')
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);
    education
        .createField('endDate')
        .name('End Date')
        .type('Date')
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);
    education
        .createField('location')
        .name('location')
        .type('Location')
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    education
        .createField('description')
        .name('description')
        .type('Text')
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    education
        .createField('url')
        .name('url')
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

    education.changeEditorInterface('universityName', 'singleLine', {});
    education.changeEditorInterface('degree', 'singleLine', {});
    education.changeEditorInterface('fieldOfStudy', 'singleLine', {});

    education.changeEditorInterface('startDate', 'datePicker', {
        format: 'dateonly'
    });

    education.changeEditorInterface('endDate', 'datePicker', {
        format: 'dateonly'
    });

    education.changeEditorInterface('location', 'locationEditor', {});
    education.changeEditorInterface('description', 'markdown', {});
    education.changeEditorInterface('url', 'singleLine', {});
};
