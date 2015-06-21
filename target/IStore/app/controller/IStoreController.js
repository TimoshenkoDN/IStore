/**
 * Created by Patron on 20.06.2015.
 */

Ext.define('IStore.controller.IStoreController', {
    extend: 'Ext.app.Controller',

    refs: [
        {selector: 'GoodGridView',
            ref: 'goodGridView'},
        {selector: 'goodGridView button[action="add"]',
            ref: 'goodGridAdd'},
        {selector: 'goodGridView button[action="delete"]',
            ref: 'goodGridDelete'},
        {selector: 'searchGoodView button[action="search"]',
            ref: 'searchGood'},
        {selector: 'addGoodFormView',
            ref: 'addGoodFormView'},
        {selector: 'goodCatalogView',
            ref: 'goodCatalogView'},
        {selector: 'addGoodFormView textfield[name=name] ',
            ref: 'addGoodFormName'},
        {selector: 'addGoodFormView textfield[name=price]',
            ref: 'addGoodFormPrice'},
        {selector: 'addGoodFormView button[action=save]',
            ref: 'addGoodFormSave'}
    ],

    init: function () {
        this.control({
            'goodGridView  button[action=add]': {
                click: this.onAddGood
            },
            'goodGridView  button[action=delete]': {
                click: this.onDelGood
            },
            'searchGoodView  textfield[name="search"]': {
                change: this.onChangeText
            },
            'goodGridView': {
                cellclick: this.onLineGrid
            },
            'addGoodFormView  button[action=save]': {
                click: this.onSaveGood
            },
            'addGoodFormView  textfield[name=name]': {
                change: this.onValidation
            },
            'addGoodFormView  textfield[name=price]': {
                change: this.onValidation
            }
        });
    },

    onSaveGood: function (button) {
        var me = this;
        var goodModel = Ext.create('IStore.model.IStoreModel');
        goodModel.set(this.getAddGoodFormView().down('form').getValues());
        goodModel.save({
            success: function (operation, response) {
                var objAjax = operation.data;
                Ext.getStore('IStoreStore').add(objAjax);
                me.getAddGoodFormView().close();
            },
            failure: function (dummy, result) {
                Ext.MessageBox.show({
                    title: 'Дубликат!',
                    msg: 'Такой товар и цена уже существуют',
                    buttons: Ext.Msg.OK,
                    icon: Ext.Msg.ERROR
                });
            }

        });
    },

    onAddGood: function () {
        Ext.widget('addGoodFormView');
    },

    onDelGood: function () {
        var sm = this.getGoodGridView().getSelectionModel();
        var rs = sm.getSelection();
        this.getGoodGridView().store.remove(rs[0]);
        this.getGoodGridView().store.commitChanges();
        this.getGoodGridDelete().disable();
    },

    onChangeText: function () {
        Ext.getStore('GoodCatalogStore').load({
            params: {
                search: this.getGoodCatalogView().down('searchGoodView').getValues()
            }
        });
    },

    onLineGrid: function () {
        this.getGoodGridDelete().enable();
    },

    onValidation: function () {
        if (this.getAddGoodFormName().validate() && this.getAddGoodFormPrice().validate()) {
            this.getAddGoodFormSave().enable();
        } else {
            this.getAddGoodFormSave().disable();
        }
    }

});