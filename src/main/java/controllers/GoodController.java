package controllers;

import model.Good;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import service.GoodService;


import java.util.Collection;

@Controller
@RequestMapping("/good")
/**
 * Created by Patron on 20.06.2015.
 */
public class GoodController {

    @Autowired
    private GoodService goodService;


    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public Collection<Good> getGoods(String search) {
        return goodService.getGoods(search);
    }

    @RequestMapping(method = RequestMethod.POST)
    @ResponseBody
    public ExtResult setGood(@RequestBody Good good) {
        return new ExtResult(goodService.add(good), good);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public String deleteGood(@RequestBody Good good) {
        goodService.delete(good);
        return "delete";
    }

    @RequestMapping(value = "{id}", method = RequestMethod.PUT)
    @ResponseBody
    public String updateGood(@RequestBody Good good) {
        goodService.update(good);
        return "update";
    }
}
