function exportGraph(data){
	var foo = data;
	var csrf_token =  $.cookie('csrftoken');
		
	var form = $('<form>').attr({
	    type: 'hidden',
	    method: 'POST',
	    action: '/graph/',
	    id: 'formgraph'
	}).appendTo('body');
	
	$('<input>').attr({type: 'hidden', name: 'data',  value: foo}).appendTo(form);
	$('<input>').attr({type: 'hidden', name: 'csrfmiddlewaretoken',  value: csrf_token}).appendTo(form);
		
	$(form).submit();
}