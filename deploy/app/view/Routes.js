Ext.define("tags.view.Routes", {
    extend: 'Ext.grid.Panel',
    alias: 'widget.routegrid',
    listeners: {
        itemdblclick: function (gridpanel, record, item, e) {
            //debugger;
            this.getStore().reload();
        }
    },
    store: {
        fields: ['number', 'residentAGVNumber', 'residentAGVBatteryLevel'
        ],
        autoLoad: true,
        autoSync: true,
        proxy: {
            type: 'rest',
            url: baseRESTAddress + 'agvroutes/5/tags',
            reader: {
                type: 'json',
                root: 'data'
            }
        },
        sorters: [
            { property: 'number' }
        ]
    },
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