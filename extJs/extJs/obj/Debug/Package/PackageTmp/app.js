var baseRESTAddress = 'http://192.168.1.200/tmmc.agv.webapi/Api/';

Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'tags',
    requires: ['tags.view.MainView'],
    views:[
        'Routes',
        'Zones',
        'Agvs',
        'PLCs',
        'PLCDataPackets'
    ],

    launch: function() {
        Ext.create('tags.view.MainView');
    }
});