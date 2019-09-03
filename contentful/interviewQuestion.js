module.exports = function (migration) {
    const interviewQuestion = migration
        .createContentType('interviewQuestion')
        .name('Interview Question')
        .description('')
        .displayField('question');

    interviewQuestion
        .createField('question')
        .name('question')
        .type('Symbol')
        .localized(false)
        .required(true)
        .validations([
            {
                unique: true
            }
        ])
        .disabled(false)
        .omitted(false);

    interviewQuestion
        .createField('answer')
        .name('answer')
        .type('Text')
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    interviewQuestion
        .createField('keywords')
        .name('keywords')
        .type('Symbol')
        .localized(false)
        .required(false)
        .validations([])
        .disabled(false)
        .omitted(false);

    interviewQuestion.changeEditorInterface('question', 'singleLine', {});
    interviewQuestion.changeEditorInterface('answer', 'markdown', {});
    interviewQuestion.changeEditorInterface('keywords', 'singleLine', {});
};
