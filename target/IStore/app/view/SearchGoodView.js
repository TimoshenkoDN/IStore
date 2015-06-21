Ext.define('IStore.view.SearchGoodView', {
    extend: 'Ext.form.Panel',
    alias: 'widget.searchGoodView',
    bodyPadding: 10,
    items: [
        {
            xtype: 'textfield',
            name: 'search',
            fieldLabel: 'Введите название товара',
            maxLength: 200
        }
    ]
});