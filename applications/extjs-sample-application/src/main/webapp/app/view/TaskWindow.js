Ext.define('TaskManager.view.TaskWindow', {
	extend : 'Ext.window.Window',
	alias : 'widget.task-window',
	title : TaskManager.title + ' - task',
	modal : true,
	width : 400,
	minWidth : 400,
	layout : 'fit',
	items : {
		xtype : 'form',
		fieldDefaults : {
			labelAlign : 'left',
			labelWidth : 75
		},
		items : [{
			xtype : 'textfield',
			name : 'name',
			fieldLabel : 'Name',
			anchor : '100%',
			allowBlank : false
		}, {
			xtype : 'combobox',
			name : 'group',
			fieldLabel : 'Group',
			anchor : '100%',
			store : 'TaskGroups',
			queryMode : 'local',
			valueField : 'id',
			displayField : 'name',
			allowBlank : false
		}, {
			xtype : 'datefield',
			name : 'dueDate',
			fieldLabel : 'Due date',
			anchor : '100%',
			format : 'Y-m-d'
		}, {
			xtype : 'timefield',
			name : 'reminder',
			fieldLabel : 'Reminder',
			anchor : '100%',
			format : 'H:i',
			increment : 15
		}, {
			xtype : 'checkbox',
			name : 'priority',
			fieldLabel : 'Priority',
			inputValue : 'IMPORTANT',
			uncheckedValue : 'NORMAL'
		}],
		buttons : [{
			text : 'Save',
			action : 'save',
			formBind : true,
			disabled : true
		}, {
			text : 'Cancel',
			action : 'cancel'
		}],
		margin : 5
	}
})