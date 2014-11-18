Ext.define('tags.store.routestore',
{
    extend: 'Ext.data.Store',
    model: 'tags.model.route',

    autoLoad: true,
    autoSync: true,
    sorters: [
        { property: 'number' }
    ]
});