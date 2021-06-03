import { dbContext } from "../db/DbContext";

class HousesService {

  async deleteHouse(id) {
    let house = await dbContext.Houses.findByIdAndDelete(id)
    return house
  }

  async updateHouse(id, houseData) {
    let house = await dbContext.Houses.findByIdAndUpdate(id, houseData, { new: true, runValidators: true })
    return house
  }

  async createHouse(houseData) {
    let house = await dbContext.Houses.create(houseData)
    return house
  }

  async getHouses(){
    let houses = await dbContext.Houses.find({})
    return houses
  }
}

export const housesService = new HousesService()