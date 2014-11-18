Ext.define("tags.view.Routes", {
    extend: 'Ext.grid.Panel',
    alias: 'widget.routegrid',
    listeners: {
        itemdblclick: function (gridpanel, record, item, e) {
            //debugger;
            this.getStore().reload();
        }
    },
    store: 'routestore',
    columns: [
        {
            xtype: 'gridcolumn',
            text: 'Tag Number',
            dataIndex: 'number'
        },
        {
            xtype: 'gridcolumn',
            text: 'AGV #',
            dataIndex: 'residentAGVNumber'
        },
        {
            xtype: 'gridcolumn',
            text: 'Battery Level',
            dataIndex: 'residentAGVBatteryLevel'
        }
    ]
});