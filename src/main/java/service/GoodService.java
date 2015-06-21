package service;

import model.Good;

import java.util.Collection;
/**
 * Created by Patron on 20.06.2015.
 */
public interface GoodService {
    Boolean add(Good good);

    void update(Good good);

    Collection<Good> getGoods(String search);

    void delete(Good good);
}
