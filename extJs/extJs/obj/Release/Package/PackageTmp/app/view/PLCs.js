Ext.define("tags.view.PLCs", {
    extend: 'Ext.grid.Panel',
    alias: 'widget.plcgrid',

    listeners: {
        itemdblclick: function (gridpanel, record, item, e) {
            //debugger;
            var formWindow = Ext.create('tags.view.PLCEditForm');
            var theForm = formWindow.down('form');
            theForm.loadRecord(record);
            formWindow.show();
        }
    },

    store: 'plcstore',
    columns: [
        {
            xtype: 'gridcolumn',
            text: 'IPAddress',
            dataIndex: 'ipAddress',
            flex: 1
        },
        {
            xtype: 'gridcolumn',
            text: 'Port',
            dataIndex: 'port'
        },
        {
            xtype: 'gridcolumn',
            text: 'Description',
            dataIndex: 'description'
        }
    ]
});