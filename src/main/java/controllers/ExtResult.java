package controllers;

import model.Good;
/**
 * Created by Patron on 20.06.2015.
 */
public class ExtResult {
    private boolean success;
    private Good data;


    public ExtResult(boolean success, Good data) {
        this.success = success;
        this.data = data;
    }

    public ExtResult() {
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public Good getData() {
        return data;
    }

    public void setData(Good data) {
        this.data = data;
    }
}
