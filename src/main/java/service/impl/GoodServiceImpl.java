package service.impl;

import model.Good;
import model.dao.GoodDao;
import org.springframework.transaction.annotation.Transactional;
import service.GoodService;

import java.util.Collection;
import java.util.List;

/**
 * Created by Patron on 20.06.2015.
 */
public class GoodServiceImpl implements GoodService {

    private GoodDao goodDao;

    public GoodDao getGoodDao() {
        return goodDao;
    }

    public void setGoodDao(GoodDao goodDao) {
        this.goodDao = goodDao;
    }

    @Transactional
    @Override
    public Boolean add(Good good) {
        List<Good> duplicate = goodDao.findByGood(good.getName(), good.getPrice());
        if (duplicate.isEmpty()) {
            goodDao.add(good);
            return true;
        }
        return false;
    }

    @Transactional
    @Override
    public void update(Good good) {
        goodDao.update(good);
    }

    @Transactional
    @Override
    public Collection<Good> getGoods(String search) {
        return goodDao.getGoods(search);
    }

    @Transactional
    @Override
    public void delete(Good good) {
        goodDao.delete(good);
    }

}
