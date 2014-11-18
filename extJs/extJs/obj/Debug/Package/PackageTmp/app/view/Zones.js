Ext.define('tags.view.Zones', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.zonegrid',
    listeners: {
        itemdblclick: function (gridpanel, record, item, e) {
            //debugger;
            var formWindow = Ext.create('tags.view.ZoneEditForm');
            var theForm = formWindow.down('form');
            theForm.loadRecord(record);
            formWindow.show();
        }
    },
    store: 'zonestore',
    columns: [
        {
            xtype: 'gridcolumn',
            text: 'Zone',
            dataIndex: 'name',
            width: 200
        },
        {
            xtype: 'gridcolumn',
            text: 'Type',
            dataIndex: 'zoneTypeName'
        },
        {
            xtype: 'gridcolumn',
            text: 'Active',
            dataIndex: 'enabled'
        },
        {
            xtype: 'gridcolumn',
            text: 'Priority',
            dataIndex: 'priority'
        },
        {
            xtype: 'gridcolumn',
            text: 'Stops',
            dataIndex: 'flatStopTags',
            flex: 1
        },
        {
            xtype: 'gridcolumn',
            text: 'Intersections',
            dataIndex: 'flatIntersectionTags',
            flex: 1
        }//,
        //{
        //    xtype: 'gridcolumn',
        //    text: 'Tag Array',
        //    dataIndex: 'tags'
        //}
    ]
});