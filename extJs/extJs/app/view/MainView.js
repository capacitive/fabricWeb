Ext.define('tags.view.MainView', {
    extend: 'Ext.container.Viewport',
    layout: 'border',
    bodyBorder: false,
    defaults: {
        collapsible: true,
        split: true,
        bodyPadding: 0
    },
    items: [
    {
        xtype: 'routegrid',
        collapsible: false,
        width: 8000,
        minWidth: 1000,
        margins: '0 0 0 0',
        title: 'Route Traffic',
        region: 'west'
    },
    {
        xtype: 'tabpanel',
        width: 800,
        minWidth: 400,
        maxWidth: 800,
        margins: '0 0 0 0',
        title: 'Config - Web API: ' + baseRESTAddress,
        region: 'east',
        items: [
            {
                title: 'AGV',
                xtype: 'agvgrid'
            },
            {
                title: 'PLC',
                xtype: 'plcgrid'
            },
            {
                title: 'PLC Data Packet',
            }
        ]
    },
    {
        xtype: 'zonegrid',
        height: 400,
        minHeight: 200,
        maxHeight: 1080,
        margins: '5 0 0 0',
        title: 'Global Traffic Conditions',
        region: 'south',
        collapsed: true
    }
    ]
});