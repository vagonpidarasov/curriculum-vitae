module.exports = function (migration) {
    const imageLink = migration
        .createContentType('imageLink')
        .name('Image Link')
        .description('')
        .displayField('title');

    imageLink
        .createField('title')
        .name('Title')
        .type('Symbol')
        .localized(false)
        .required(true)
        .validations([])
        .disabled(false)
        .omitted(false);

    imageLink
        .createField('image')
        .name('Image or Icon')
        .type('Link')
        .localized(false)
        .required(true)
        .validations([
            {
                linkMimetypeGroup: ['image']
            }
        ])
        .disabled(false)
        .omitted(false)
        .linkType('Asset');

    imageLink
        .createField('url')
        .name('Url Address')
        .type('Symbol')
        .localized(false)
        .required(true)
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

    imageLink
        .createField('type')
        .name('Link Type')
        .type('Symbol')
        .localized(false)
        .required(false)
        .validations([
            {
                in: ['header', 'footer']
            }
        ])
        .disabled(false)
        .omitted(false);

    imageLink.changeEditorInterface('title', 'singleLine', {});
    imageLink.changeEditorInterface('image', 'assetLinkEditor', {});
    imageLink.changeEditorInterface('url', 'singleLine', {});
    imageLink.changeEditorInterface('type', 'dropdown', {});
};
