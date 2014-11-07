Ext.define("tags.view.Agvs", {
    extend: 'Ext.grid.Panel',
    alias: 'widget.agvgrid',
    listeners: {
        itemdblclick: function (gridpanel, record, item, e) {
            //debugger;
            this.getStore().reload();
        }
    },

    store: {
        fields: ['agvNumber', 'currentTag', 'connected', 'batteryLevel', 'statusCode', 'errorCode'
        ],
        autoLoad: true,
        autoSync: true,
        proxy: {
            type: 'rest',
            url: baseRESTAddress + 'agvs',
            reader: {
                type: 'json',
                root: 'data'
            }
        },
        sorters: [
            { property: 'agvNumber' }
        ]
    },
    columns: [
        {
            xtype: 'gridcolumn',
            text: 'Number',
            dataIndex: 'agvNumber'
        },
        {
            xtype: 'gridcolumn',
            text: 'Current Tag',
            dataIndex: 'currentTag'
        },
        {
            xtype: 'gridcolumn',
            text: 'Battery Level',
            dataIndex: 'batteryLevel'
        },
        {
            xtype: 'gridcolumn',
            text: 'Error Code',
            dataIndex: 'errorCode'
        },
        {
            xtype: 'gridcolumn',
            text: 'Status Code',
            dataIndex: 'statusCode'
        },
        {
            xtype: 'gridcolumn',
            text: 'Connected',
            dataIndex: 'connected'
        }
    ]
});