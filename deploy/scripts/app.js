Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'tags',
    launch: function() {
        Ext.create('tags.view.MainView');
    }
});