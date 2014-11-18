Ext.define('tags.store.plcstore',
{
    extend: 'Ext.data.Store',
    model: 'tags.model.plc',

    autoLoad: true,
    autoSync: true,
    sorters: [
        { property: 'ipAddress' }
    ]
});