package model.dao.impl;

import model.Good;
import model.dao.GoodDao;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.Collection;
import java.util.List;

/**
 * Created by Patron on 20.06.2015.
 */
public class GoodDaoImpl implements GoodDao {

    @PersistenceContext
    private EntityManager emf;

    @Override
    public void add(Good good) {
        emf.persist(good);
    }

    @Override
    public void update(Good good) {
        emf.merge(good);
    }

    @Override
    public void delete(Good good) {
        emf.remove(emf.getReference(Good.class, good.getId()));
    }

    @Override
    public Collection<Good> getGoods(String search) {
        if (null == search || search.trim().isEmpty()) {
            return emf.createQuery(
                    "select g from Good g")
                    .getResultList();
        }
        return emf.createQuery(
                "select g from Good g where g.name like :search")
                .setParameter("search", search.trim() + "%")
                .getResultList();
    }

    public List<Good> findByGood(String name, Long price) {
        return emf.createQuery(
                "select g from Good g where g.name = :name and g.price = :price")
                .setParameter("name", name)
                .setParameter("price", price)
                .getResultList();
    }
}

