/**
 * Created by Patron on 20.06.2015.
 */

Ext.define('IStore.store.IStoreStore', {
    extend: 'Ext.data.Store',
    requires : [
        'IStore.model.IStoreModel'
    ],
    model: 'IStore.model.IStoreModel',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'rest',
        api: {
            create: 'good',
            read: 'good',
            destroy: 'good',
            update: 'good'
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }

    }
});