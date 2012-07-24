Ext.define('TaskManager.model.Task', {
	extend : 'Ext.data.Model',
	fields : [{
		name : 'id',
		type : 'int'
	}, {
		name : 'version',
		type : 'int'
	}, {
		name : 'name',
		type : 'string'
	}/*, {
		name : 'group',
		type : 'int',
		mapping : 'group.id'
	}*/, {
		name : 'priority',
		type : 'string'
	}, {
		name : 'dueDate',
		type : 'date'
	}, {
		name : 'reminder',
		type : 'date'
	}],
	proxy : {
		type : 'rest',
		url : 'service/tasks',
		reader : {
			type : 'json',
		}
	}
});
