Ext.define("tags.view.PLCEditForm", {
    extend: 'Ext.window.Window', //top level container
    alias: 'widget.plcform',
    padding: 5,
    width: 500,
    title: 'Edit PLC',
    //model: 'true',
    defaults: {
        labelWidth: 90,
        margin: '0 0 10 0',
        anchor: '90%'
    },
    items: [
        {
            xtype: 'form', //Window->form
            bodyPadding: 10,

            title: "",
            items: [
                {
                    xtype: 'textfield',
                    name: 'ipAddress',
                    fieldLabel: 'IP Address'
                },
                {
                    xtype: 'textfield',
                    name: 'port',
                    fieldLabel: 'Listener Port'
                },
                {
                    xtype: 'textfield',
                    name: 'description',
                    fieldLabel: 'Description'
                }
            ]
        },
        {
            xtype: 'container', //Window->container
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
                        var form = button.up().up().down('form');//up to container, up to window, down to form
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