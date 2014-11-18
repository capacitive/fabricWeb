Ext.define('tags.store.zonestore',
{
    extend: 'Ext.data.Store',
    model: 'tags.model.zone',

    autoLoad: true,
    autoSync: true,
    sorters: [
        { property: 'name' }
    ],
    groupField: 'zoneType'
});