jQuery(window).on('load', function() {

    var editors = jQuery('.wmd-input');
    var postfix = '';

    editors.each(function(key, value) {

        var editor_id = jQuery(this).attr('id');

        /**
         * Initialize WYSIWYG Editor if needed.
         */

        if (editor_id) {

            postfix = editor_id.slice(15);

            initWmdEditor(postfix);
        }

    });
    
    $('.wmd-input:not(.processed)').TextAreaResizer();
});

/**
 * Function used to initialize WMD Editor.
 */

function initWmdEditor(postfix) {

    /**
     * Local variables.
     */

    Markdown.local = Markdown.local || {};

    var editor_area = jQuery('#wmd-form-editor' + postfix);
    var $ui = {};
        $ui.form = editor_area.closest('form');
        $ui.wmd_editor = $('#wmd-form-editor' + postfix);
        $ui.wmd_editor_hidden = $('#wmd-form-editor-hidden' + postfix);
        $ui.wmd_container = editor_area.closest('.wmd-input');
        $ui.wmd_preview = $('#wmd-preview' + postfix);
        $ui.wmd_element = editor_area;
    var options = {
        strings: Markdown.local.value
    };

    var converter = Markdown.getSanitizingConverter( postfix );
    var editor = new Markdown.Editor(converter, postfix, options);
    
    var turndownService = new TurndownService();
    var markdown = turndownService.turndown($ui.wmd_editor.val());
    $ui.wmd_editor.val(markdown);

    /**
     * Validate WMD Editor on each keyup.
     */

    $ui.wmd_editor.on('keyup', function() {
        validateWmdEditor($ui);
    });

    /**
     * Update WMD Editor CSS classes on focus.
     */

    $ui.wmd_editor.on('focus', function() {
        $ui.wmd_container.addClass('is-focused');
    });

    /**
     * Update WMD Editor CSS classes on blur.
     */

    $ui.wmd_editor.on('blur', function() {
        $ui.wmd_container.removeClass('is-focused');
    });

    /**
     * Prevent form from submitting
     * when the WMD Editor content is null.
     */

    $ui.form.on('submit', function(event) {

        $ui.wmd_editor_hidden.val($ui.wmd_preview.html());

        var editor_name = $ui.wmd_editor.attr('id');
        var content = $ui.wmd_preview.text(),
            min_length = editor_name.indexOf('_comment') !== -1 ? 15 : 20;

        if( content.trim().length < min_length ) {

            event.preventDefault();
            event.stopPropagation();
            validateWmdEditor($ui);

        }

    });

    editor.run();

}

/**
 * Function used to validate WMD Editor.
 *
 * @param object ui
 */

function validateWmdEditor(ui) {
    
    if( ui.form.hasClass('needs-validation') && ui.form.hasClass('was-validated') ) {

        var editor_name = ui.wmd_editor.attr('id');
        var content = ui.wmd_preview.text(),
            min_length = editor_name.indexOf('_comment') !== -1 ? 15 : 20;

        ui.wmd_container.removeClass('is-valid is-invalid')
        ui.wmd_container.parents('.wp-editor-container').next('.invalid-feedback').hide(0);

        if( content.trim().length >= min_length ) { ui.wmd_container.addClass('is-valid'); }
        else {

            ui.wmd_container.addClass('is-invalid');
            ui.wmd_container.parents('.wp-editor-container').next('.invalid-feedback').show(0);
        }

    }

}