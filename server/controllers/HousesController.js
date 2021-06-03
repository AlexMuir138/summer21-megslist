import { dbContext } from "../db/DbContext";
import { housesService } from "../services/HousesService";
import BaseController from "../utils/BaseController";

export class HousesController extends BaseController{
  constructor(){
    super("api/houses")
    this.router 
    .get("", this.getHouses)
    .get("", this.createHouse)
    .put("/:id", this.updateHouse)
    .delete("/:id", this.deleteHouse)
  }

  async deleteHouse(){
    try {
      let house = await housesService.deleteHouse(req.params.id)
      return res.send(house)
    } catch (error) {
      next(error)
    }
  }

  async updateHouse(req, res, next){
    try {
      let id = req.params.id
      let house = await housesService.updateHouse(id, req.body)
      return res.send(house)
    } catch (error) {
      next(error)
    }
  }

  async createHouse(req, res, next){
    try {
      let house = await housesService.createHouse(req.body)
      return res.send(house)
    } catch (error) {
      next(error)
    }
  }

  async getHouses(req, res, next){
    try {
      let houses = await housesService.getHouses()
      return res.send(houses)
    } catch (error) {
      next(error)
    }
  }
}