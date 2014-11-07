Ext.define("tags.view.PLCDataPackets", {
    extend: 'Ext.grid.Panel',
    alias: 'widget.plcpacketgrid',

    listeners: {
        itemdblclick: function (gridpanel, record, item, e) {
            //debugger;
            var formWindow = Ext.create('PLCPacketEditForm');

            var theForm = formWindow.down('form');
            theForm.loadRecord(record);

            formWindow.show();
        }
    },

    store: {
        fields: ['id',
            {
                name: 'ipAddress'
            },
            'port',
            'description'
        ],
        autoLoad: true,
        autoSync: true,
        proxy: {
            type: 'rest',
            url: baseRESTAddress + 'plc',
            reader: {
                type: 'json',
                root: 'data'
            }
        },
        sorters: [
            { property: 'databitindex' }
        ]
    },
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