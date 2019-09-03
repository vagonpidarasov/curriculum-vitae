module.exports = function (migration) {
    const employee = migration
        .createContentType('employee')
        .name('Employee')
        .description('')
        .displayField('name');

    employee
        .createField('name')
        .name('Name')
        .type('Symbol')
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);

    employee
        .createField('title')
        .name('title')
        .type('Symbol')
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    employee
        .createField('avatar')
        .name('Avatar')
        .type('Link')
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .linkType('Asset');

    employee
        .createField('backgroundImage')
        .name('Background Image')
        .type('Link')
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false)
        .linkType('Asset');

    employee
        .createField('dateOfBirth')
        .name('Date of Birth')
        .type('Date')
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    employee
        .createField('location')
        .name('Location')
        .type('Location')
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    employee
        .createField('overview')
        .name('overview')
        .type('Text')
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    employee
        .createField('expertise')
        .name('Expertise')
        .type('Text')
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    employee
        .createField('phoneNumber')
        .name('Phone Number')
        .type('Symbol')
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    employee
        .createField('emailAddress')
        .name('Email Address')
        .type('Symbol')
        .localized(false)
        .required(false)
        .validations([
            {
                regexp: {
                    pattern: '^\\w[\\w.-]*@([\\w-]+\\.)+[\\w-]+$'
                }
            }
        ])
        .disabled(false)
        .omitted(false);

    employee.changeEditorInterface('name', 'singleLine', {});
    employee.changeEditorInterface('title', 'singleLine', {});
    employee.changeEditorInterface('avatar', 'assetLinkEditor', {});
    employee.changeEditorInterface('backgroundImage', 'assetLinkEditor', {});

    employee.changeEditorInterface('dateOfBirth', 'datePicker', {
        format: 'dateonly'
    });

    employee.changeEditorInterface('location', 'locationEditor', {});
    employee.changeEditorInterface('overview', 'markdown', {});
    employee.changeEditorInterface('expertise', 'markdown', {});
    employee.changeEditorInterface('phoneNumber', 'singleLine', {});
    employee.changeEditorInterface('emailAddress', 'singleLine', {});
};
