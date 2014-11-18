Ext.define('tags.model.route',
{
    extend: 'Ext.data.Model',
    fields: ['number', 'residentAGVNumber', 'residentAGVBatteryLevel'
    ],
    proxy: {
        type: 'rest',
        url: baseRESTAddress + 'agvroutes/5/tags',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});