/**
 * SH EDITOR Plugin 
 */
$(function() {
	var seq = 1; 
	
	var buttonConstructor = function(title, type, glyphIcon) {
		this.title = title;
		this.type = type;
		this.glyphIcon = glyphIcon;
	}
	
	var buttons = {
			textsize :  new buttonConstructor("text-size", "dropdown", "glyphicon-text-size"),		
			formatting :  new buttonConstructor("formatting", "dropdown", "glyphicon glyphicon-flag"),		
			bold : new buttonConstructor("bold", "", "glyphicon-bold"),
			italic : new buttonConstructor("italic", "", "glyphicon-italic"),
			alignLeft : new buttonConstructor("align-left", "", "glyphicon-align-left"),
			alignCenter : new buttonConstructor("align-center", "", "glyphicon-align-center"),
			alignRight : new buttonConstructor("align-right", "", "glyphicon-align-right"),
			image : new buttonConstructor("image-modal", "modal", "glyphicon glyphicon-picture"),
//			textUnderline : new buttonConstructor("text-underline", "", "glyphicons-text-underline"),
//			italic : new buttonConstructor("italic", "", "glyphicon-italic"),
//			italic : new buttonConstructor("italic", "", "glyphicon-italic"),
//			italic : new buttonConstructor("italic", "", "glyphicon-italic")
	};
	
	
	
	var pannelgroups = {
			basic : ["formatting", "bold", "italic", "alignLeft" , "alignCenter", "alignRight", "image"]
//			basic : ["textsize", "bold", "italic", "alignLeft" , "alignCenter", "alignRight"]
	}
	
	var createEditor = function(textArea, options) {
		var $container = $("<div/>").addClass('shEditor-container');
		var $toolbarContainer = $("<div/>").addClass("toolbar-container btn-group");
		textArea.wrap($container);
		$container = textArea.parent('.shEditor-container');
		
		$container.prepend($toolbarContainer);
		
//		console.log($container);
			
		var modalFactory = function(id, title) {
			var $modalContainer = $("<div/>").addClass("modal fade").attr("id", title).attr("role", "dialog");
			var $modalDialog = $("<div/>").addClass("modal-dialog");
			var $modalContent = $("<div/>").addClass("modal-content");
			var $modalBody = $("<div/>").addClass("modal-body");			
			$modalContainer.append($modalDialog);
			$modalContent.append($modalBody).appendTo($modalDialog);	
			return $modalContainer;
		};
		
		var dropDownOptionFactory = function(title) {
			switch(title) {
				case "formatting":
					var formatTitles = ['default', 'Header1', 'Header2', 'Header3', 'Header4', 'Header5', 'Header6']
					var formatCssCls = ['formatting-default', 'formatting-h1','formatting-h2','formatting-h3','formatting-h4','formatting-h5','formatting-h6'];
					var $dropDown = $('<ul/>').attr('class', 'dropdown-menu').attr('role', 'menu').attr('overflow-y', 'auto');
					$.each(formatTitles, function(idx, val) {
						var $listText = $('<a/>').attr('class', formatCssCls[idx]).attr('href', '#').text(val);
						var $list = $('<li/>').append($listText);
						$list.click(function() {
							console.log(formatCssCls);
							toolbarFuncHandler(formatCssCls[idx]);
						});
						$dropDown.append($list);						
					});					
					return $dropDown;
					break;
				default:
					break;
			}
		};
		
		var buttonFactory = function(button) {
			var $button = $('<button type="button"/>').attr("class", "btn btn-default btn-sm");
			var $spanImg = $("<span/>").attr("class", "glyphicon "+button.glyphIcon).attr("aria-hidden", "true").attr("data-toggle", "tooltip").attr("title", button.title);				
			$button.append($spanImg);
			if(button.type == "dropdown") {
				$button.addClass("dropdown-toggle").attr("data-toggle", "dropdown").attr("aria-expanded", "false");
				$button.append($spanImg);				
				var $dropDownWrapper = $('<div/>').addClass("btn-group");				
				$button.wrap($dropDownWrapper);
				$button = $button.parent();
				$button.append(dropDownOptionFactory(button.title));
			} else if(button.type == "modal") {
				var modalId = button.title + seq;
				$button.attr("data-toggle", "modal").attr("data-toggle", "modal").attr("data-target", "#"+modalId);
				var $modal = modalFactory(modalId, button.title);
				$container.append($modal);
			}
			return $button;
		};
		
		
		
		$.each(pannelgroups.basic, function(idx, val) {
			var button = buttons[val];
			var $button = buttonFactory(button);
			$toolbarContainer.append($button);
			$button.click(function() {
				switch(button.type) {
					case "dropdown":
						break;
					case "modal":
						break;
					default:
						toolbarFuncHandler(val);
						break;
				}
			});
			$('[data-toggle="tooltip"]').attr("data-placement", "top");			
			$('[data-toggle="tooltip"]').tooltip();
		});
		
		if(!options) {
			console.log(options);
			options = {};
		} 
		options.element = textArea.get(0);
		var wysiwyg = createWysiwyg(options);
//		'formatting-h1','formatting-h2','formatting-h3','formatting-h4','formatting-h5','formatting-h6'		
		var toolbarFuncHandler = function(name) {
			switch (name) {
			case "textsize":			
				break;
			case "bold":
				wysiwyg.bold();
				break;
			case "italic":
				wysiwyg.italic();
				break;
			case "alignLeft":			
				break;
			case "alignCenter":			
				break;
			case "alignRight":			
				break;
			case "textUnderline":	
				wysiwyg.underline();
				break;
			case "formatting-h1":
				wysiwyg.formatTag("h1");				
				break;
			case "formatting-h2":
				wysiwyg.formatTag("h2");				
				break;
			case "formatting-h3":
				wysiwyg.formatTag("h3");				
				break;
			case "formatting-h4":
				wysiwyg.formatTag("h4");				
				break;
			case "formatting-h5":
				wysiwyg.formatTag("h5");				
				break;
			case "formatting-h6":
				wysiwyg.formatTag("h6");				
				break;
			case "formatting-default":
				wysiwyg.formatTag("div");				
				break;
//			case "textsize":			
//				break;
//			case "textsize":			
//				break;
			default:
				break;
			}
			
		}
		console.log(test)
		
	};
	
	
	// create wysiwyg
	var createWysiwyg = function(userOptions) {		
		var defaultsOptions = {};
		
		var	options =  $.extend(true, {}, defaultsOptions, userOptions),
			textArea = options.element,
			shWysiwyg = document.createElement( 'DIV' ),
			parent = textArea.parentNode,
        	next = textArea.nextSibling,
        	shPopup;
		
		textArea.style.display = 'none';
		console.log(next);
		if(next) {
			parent.insertBefore(shWysiwyg, next );
		} else {
			parent.appendChild(shWysiwyg );
		}
		shWysiwyg.setAttribute("class", "shEditor");
		shWysiwyg.setAttribute( 'contentEditable', 'true' );

		var execCommand = function( command, param, force_selection ) {
	        // for webkit, mozilla, opera
	        if( window.getSelection ) {
	        	try {
	                if( document.queryCommandSupported && ! document.queryCommandSupported(command) )
	                    return false;
	                return document.execCommand( command, false, param );
	            }
	            catch( e ) {
	            }
	        }
	        // for IE
	        else if( document.selection ) {
	            var sel = document.selection;
	            if( sel.type != 'None' ) {
	                var range = sel.createRange();
	                try {
	                    if( ! range.queryCommandEnabled(command) )
	                        return false;
	                    return range.execCommand( command, false, param );	                    
	                }
	                catch( e ) {
	                }
	            }
	        }
	        return false;
	    };
		return {
			bold: function()
            {
                execCommand('bold');
                return this;
            },
	        italic: function()
	        {
	            execCommand('italic');
	            return this;
	        },
	        underline: function()
	        {
	            execCommand('underline');
	            return this;
	        },
	        formatTag: function(tag)
	        {
	        	execCommand("formatblock", tag);
	        	return this;
	        },
		};
	};
	/**
	 * target : $(textarea) - jquery object(textarea)
	 * return type : shEditor
	 */
	$.fn.onEditor = function(options) {
//		console.log(idx++);
		var textArea = $(this);
		createEditor(textArea, options);
		seq++;
	};
});



//$.extend($.fn, {
//	onEditor : function() {
//		return new $.shEditor($(this));
//	}	
//});
//
//
//$.shEditor = function(textArea, options) {
//	this.settings = $.extend(true, {}, $.shEditor.defaults, options);
//	this.frame;
//	this.init(textArea);
//};
//
//$.extend($.shEditor, {
//	defaults: {},
//	prototype : {
//		init : function(textArea) {
//			console.log("variable test start");
//			var a = 1;
//			var $b = 2;
//			console.log(a)
//			console.log($b)
//			console.log("variable test end");
//			
//			console.log(textArea);
//			console.log("shEditor initialize");
//			console.log($.compFactory("textsize"));
//			console.log(textArea.parent());
//			console.log($.compFactory("textsize"));
//			textArea.parent().append($.compFactory("textsize").makeStr)
//		}
//	},
//	makeEditor : function() {
//	},
//	
//});


