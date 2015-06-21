/**
 * Created by Patron on 20.06.2015.
 */

Ext.define('IStore.model.IStoreModel', {
    extend: 'Ext.data.Model',
    fields: ['name', 'price'],
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
