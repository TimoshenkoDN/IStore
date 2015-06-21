package model.dao;

import model.Good;
import java.util.Collection;
import java.util.List;
/**
 * Created by Patron on 20.06.2015.
 */
public interface GoodDao {

    void add(Good good);

    void update(Good good);

    void delete(Good good);

    Collection<Good> getGoods(String search);

    public List findByGood(String name, Long price);

}
