Ext.define('tags.model.plc',
{
    extend: 'Ext.data.Model',
    fields: ['id',
        {
            name: 'ipAddress'
        },
        'port',
        'description'
    ],
    proxy: {
        type: 'rest',
        url: baseRESTAddress + 'plc',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});