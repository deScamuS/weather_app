jQuery(document).ready(function() {

	/**
	 * Global variables.
	 */

	var $ui = {};
		$ui.status = jQuery('#status');
		$ui.answer = {};
		$ui.answer.card = jQuery('.answer-card');
		$ui.answer.edit_button = jQuery('.edit-answer-button');
		$ui.comment = {};
		$ui.comment.edit_button = jQuery('.edit-comment-button');
		$ui.comment_form = {};
		$ui.comment_form.toggle = jQuery('.comment-form-toggle');
		$ui.comment_form.item = '.comment-form-item';
		$ui.subscribe_button = jQuery('#subscribe-button');
		$ui.vote_button = jQuery('.vote-button');
		$ui.best_answer_button = jQuery('.best-answer-button'); 

	/**
	 * Update Question status on change.
	 */

	$ui.status.on('change', function() {
		jQuery(this).closest('form').submit();
	});

	/**
	 * Load Answer form on "Edit" button click.
	 */

	$ui.answer.edit_button.on('click', function(event) {

		event.preventDefault();

		var button = jQuery(this),
			id = button.attr('href').replace('#', '');

		if( id && !button.is(':disabled') ) {

			var container = button.closest('.card');

			jQuery.ajax({
				url : ajax_url,
				type : 'POST',
				data : {
					action : 'mdb_forum_get_answer_form',
					id : id
				},
				dataType : 'json',
				beforeSend : function(jqXHR, settings) {
					button.prop('disabled', true).addClass('disabled');
				},
				complete : function(jqXHR, textStatus) {
					button.prop('disabled', false).removeClass('disabled');
				},
				error : function(jqXHR, textStatus, errorThrown) {
					toastr.error('An error occurred.');
				},
				success : function(data, textStatus, jqXHR) {

					if( !data.editor_id || !data.editor_body ) { toastr.error('An error occurred.'); }
					else {

						container.html(data.html);
						
						var form = container.find('form')[0];

						if( form ) {
							initFormValidation(form);
						}

					    initWmdEditor('_' + data.editor_id);

					}

				}
			});

		}

	});

	/**
	 * Comment form: toggle.
	 */

	$ui.comment_form.toggle.on('click', function(event) {

		event.preventDefault();

		jQuery(this)
			.closest('form')
			.find($ui.comment_form.item)
			.toggleClass('is-hidden')
			.find('textarea')
			.focus();
	});

	/**
	 * Load Comment form on "Edit" button click.
	 */

	$ui.comment.edit_button.on('click', function(event) {

		event.preventDefault();

		var button = jQuery(this),
			id = button.attr('href').replace('#', '');

		if( id && !button.is(':disabled') ) {

			var container = button.closest('.comment-card');

			jQuery.ajax({
				url : ajax_url,
				type : 'POST',
				data : {
					action : 'mdb_forum_get_comment_form',
					id : id
				},
				dataType : 'json',
				beforeSend : function(jqXHR, settings) {
					button.prop('disabled', true).addClass('disabled');
				},
				complete : function(jqXHR, textStatus) {
					button.prop('disabled', false).removeClass('disabled');
				},
				error : function(jqXHR, textStatus, errorThrown) {
					toastr.error('An error occurred.');
				},
				success : function(data, textStatus, jqXHR) {

					if( !data.editor_id || !data.editor_body ) { toastr.error('An error occurred.'); }
					else {

						container.html(data.html);
						
						var form = container.find('form')[0];

						if( form ) {
							initFormValidation(form);
						}

					    initWmdEditor('_' + data.editor_id);

					}

				}
			});

		}

	});

	/**
	 * Subscribe / unsubscribe the Question.
	 */

	$ui.subscribe_button.on('click', function(event) {

		event.preventDefault();

		var button = jQuery(this),
			id = button.attr('href').replace('#', '');

		if( id && !button.is(':disabled') ) {

			jQuery.ajax({
				url : ajax_url,
				type : 'POST',
				data : {
					action : 'mdb_forum_subscribe',
					id : id
				},
				dataType : 'json',
				beforeSend : function(jqXHR, settings) {
					button.prop('disabled', true).addClass('disabled');
				},
				complete : function(jqXHR, textStatus) {
					button.prop('disabled', false).removeClass('disabled');
				},
				error : function(jqXHR, textStatus, errorThrown) {
					toastr.error('An error occurred.');
				},
				success : function(data, textStatus, jqXHR) {

					if( !data.result ) { toastr.error('An error occurred.'); }
					else {

						button.text(data.result == 'Subscribed' ? 'Unsubscribe' : 'Subscribe');
						toastr.success('Operation succeeded.');

					}

				}
			});

		}

	});

	/**
	 * Add / remove upvote / downvote from the Post.
	 */

	$ui.vote_button.on('click', function(event) {

		event.preventDefault();

		var button = jQuery(this),
			id = button.attr('href').replace('#', ''),
			action = button.attr('data-action');

		if( id && !button.is(':disabled') ) {

			var vote_buttons = button.closest('.card').find('.vote-button');

			jQuery.ajax({
				url : ajax_url,
				type : 'POST',
				data : {
					action : 'mdb_forum_'+ action,
					id : id
				},
				dataType : 'json',
				beforeSend : function(jqXHR, settings) {
					vote_buttons.prop('disabled', true).addClass('disabled');
				},
				complete : function(jqXHR, textStatus) {
					vote_buttons.prop('disabled', false).removeClass('disabled');
				},
				error : function(jqXHR, textStatus, errorThrown) {
					toastr.error('An error occurred.');
				},
				success : function(data, textStatus, jqXHR) {

					if( !data.count ) { toastr.error('An error occurred.'); }
					else {
					
						toastr.success('Operation succeeded.');
						vote_buttons.filter('.upvote-button').find('.value').html(data.count.upvotes);
						vote_buttons.filter('.downvote-button').find('.value').html(data.count.downvotes);

					}

				}
			});

		}

	});

	/**
	 * Select / unselect best Answer.
	 */

	$ui.best_answer_button.on('click', function(event) {

		event.preventDefault();

		var button = jQuery(this),
			id = button.attr('href').replace('#', '');

		if( id && !button.is(':disabled') ) {

			var card = button.closest('.answer-card'),
				best_answer_buttons = card.find('.best-answer-button');

			jQuery.ajax({
				url : ajax_url,
				type : 'POST',
				data : {
					action : 'mdb_forum_select_best_answer',
					id : id,
					parent_id : question_id
				},
				dataType : 'json',
				beforeSend : function(jqXHR, settings) {
					best_answer_buttons.prop('disabled', true).addClass('disabled');
				},
				complete : function(jqXHR, textStatus) {
					best_answer_buttons.prop('disabled', false).removeClass('disabled');
				},
				error : function(jqXHR, textStatus, errorThrown) {
					toastr.error('An error occurred.');
				},
				success : function(data, textStatus, jqXHR) {

					if( data.result == 'Error' ) { toastr.error('An error occurred.'); }
					else { window.location.reload(); }

				}
			});

		}

	});


	var questionParticipants = mdb_forum_object.question_participants;

	suggestValues = [];

	questionParticipants.forEach( function(el, i){

		suggestValues[i] = {
			on: '',
			show: el.name,
			use: '[@' + el.name + '](/profile/?id=' + el.id + ')'
		};
	});

	var instance = new AutoSuggest({
        caseSensitive: false,
        suggestions: [
            {
                trigger: '@',
                values: suggestValues
            }
        ]
    }, $('textarea'));

});