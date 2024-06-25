
export default class CustomRepository {
  constructor(dao) {
    this.dao = dao;
  }

  get         = async (filter)             => await this.dao.get        (filter)
  getBy       = async (filter)             => await this.dao.getBy      (filter)
  getPaginate = async (filter, options)    => await this.dao.getPaginate(filter, options)
  create      = async (newElement)         => await this.dao.create     (newElement)
  update      = async (eid, elementUpdate) => await this.dao.update     ({_id: eid}, elementUpdate)
  delete      = async (filter)             => await this.dao.delete     (filter)
  exists      = async (filter)             => await this.dao.exists     (filter)
  getUniquesValues = async (field)         => await this.dao.getUniquesValues(field);
}