Ext.define("tags.view.ZoneEditForm", {
    extend: 'Ext.window.Window',
    alias: 'widget.zoneform',
    padding: 5,
    width: 500,
    title: 'Edit Zone',
    //model: 'true',
    defaults: {
        labelWidth: 100,
        margin: '0 0 10 0',
        anchor: '90%'
    },
    items: [
        {
            xtype: 'form',
            bodyPadding: 10,

            title: "",
            items: [
                {
                    xtype: 'textfield',
                    name: 'name',
                    fieldLabel: 'Name'
                },
                {
                    xtype: 'textfield',
                    name: 'description',
                    fieldLabel: 'Description'
                },
                {
                    xtype: 'textfield',
                    name: 'column',
                    fieldLabel: 'Column'
                },
                {
                    xtype: 'textfield',
                    name: 'enabled',
                    fieldLabel: 'Enabled'
                },
                {
                    xtype: 'textfield',
                    name: 'priority',
                    fieldLabel: 'Priority'
                },
                {
                    xtype: 'textfield',
                    name: 'maxOccupants',
                    fieldLabel: 'Staging Buffer'
                },
                {
                    xtype: 'textfield',
                    name: 'startRetryMax',
                    fieldLabel: 'Start Retry Max'
                },
                {
                    xtype: 'textfield',
                    name: 'startWaitTimeout',
                    fieldLabel: 'Start Wait Timeout'
                },
                {
                    xtype: 'textarea',
                    name: 'flatStopTags',
                    fieldLabel: 'Stop Tags',
                    width: 200
                }
            ]
        },
        {
            xtype: 'container',
            padding: '10 10 10 10',
            layout: {
                type: 'hbox',
                align: 'middle',
                pack: 'center'
            },
            items: [
                {
                    xtype: 'button',
                    text: 'Save',

                    handler: function (button) {
                        debugger;
                        var form = button.up().up().down('form');
                        form.updateRecord();
                        button.up('window').destroy();
                    }
                },
                {
                    xtype: 'button',
                    text: 'Cancel',
                    margin: '5 5 5 5',
                    handler: function (button) {
                        button.up('window').destroy();
                    }
                }
            ]
        }
    ]
});