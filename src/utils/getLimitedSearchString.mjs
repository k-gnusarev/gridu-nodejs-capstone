import {GET_EXERCISES_BY_USER_ID} from "../handlers/queries.mjs";

export const getLimitedSearchString = (values) => {
  const {from, to, limit} = values
  const fromQuery = from ? ' AND date >= ?' : ''
  const toQuery = to ? ' AND date <= ?' : ''
  const limitQuery = limit ? ' LIMIT ?' : ''

  return GET_EXERCISES_BY_USER_ID + fromQuery + toQuery + ' ORDER BY date' + limitQuery
}

