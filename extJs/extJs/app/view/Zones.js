Ext.define('tags.view.Zones', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.zonegrid',
    listeners: {
        itemdblclick: function (gridpanel, record, item, e) {
            //debugger;
            var formWindow = Ext.create('ZoneEditForm');
            var theForm = formWindow.down('form');
            theForm.loadRecord(record);
            formWindow.show();
        }
    },
    store: {
        fields: ['id',
            {
                name: 'name',
                sortType: 'asUCText'
            },
            'zoneType',
            'enabled',
            'description',
            'flatStopTags',
            'flatIntersectionTags',
            'tags'],
        autoLoad: true,
        autoSync: true,
        proxy: {
            type: 'rest',
            url: baseRESTAddress + 'zone?includeTags=true',
            reader: {
                type: 'json',
                root: 'data'
            }
        },
        sorters: [
            { property: 'name' }
        ],
        groupField: 'zoneType'
    },
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
            dataIndex: 'zoneType'
        },
        {
            xtype: 'gridcolumn',
            text: 'Active',
            dataIndex: 'enabled'
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
        },
        {
            xtype: 'gridcolumn',
            text: 'Tag Array',
            dataIndex: 'tags'
        }
    ]
});