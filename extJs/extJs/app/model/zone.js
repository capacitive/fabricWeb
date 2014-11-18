Ext.define('tags.model.zone',
{
    extend: 'Ext.data.Model',
    fields: ['id',
        {
            name: 'name',
            sortType: 'asUCText'
        },
        'enabled',
        'priority',
        'description',
        'column',
        'zoneType',
        'zoneTypeName',
        'maxOccupants',
        'startRetryMax',
        'startWaitTimeout',
        'flatStopTags',
        'flatIntersectionTags',
        'tags'],
    proxy: {
        type: 'rest',
        url: baseRESTAddress + 'zone',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});