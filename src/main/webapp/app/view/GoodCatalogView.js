Ext.define('IStore.view.GoodCatalogView', {
    extend: 'Ext.panel.Panel',
    width: 500,
    height: 360,
    padding: 10,
    alias: 'widget.goodCatalogView',
    layout: 'border',
    items: [
        {
            xtype: 'goodGridView',
            region: 'center'
        },
        {
            xtype: 'panel',
            html: '<div style="font: normal 18px cursive"><center><font size = "10">Каталог товаров</font></center></div>',
            region: 'north',
            height: 80
        },
        {
            xtype: 'searchGoodView',
            title: 'Поиск',
            region: 'west',
            width: 300,
            collapsible: true,
            collapsed: false
        }
    ],
    renderTo: Ext.getBody()
});