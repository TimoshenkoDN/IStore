/**
 * Created by Patron on 20.06.2015.
 */
Ext.application({
    name: 'IStore',

    views:[
        'AddGoodFromView',
        'GoodCatalogView',
        'GoodGridView',
        'SearchGoodView'
    ],

    controllers : [
        'IStoreController'
    ],

    stores : [
        'IStoreStore'
    ],

    launch: function(){
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype: 'goodCatalogView'
            }
        });
    }
});