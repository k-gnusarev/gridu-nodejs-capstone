import {GET_EXERCISES_BY_USER_ID} from "../handlers/queries.mjs";

export const getLimitedSearchString = (values) => {
  const {from, to, limit} = values
  const limitQuery = limit ? ' LIMIT ?' : ''
  const fromQuery = from ? ' AND date > ?' : ''
  const toQuery = to ? ' AND date < ?' : ''

  return GET_EXERCISES_BY_USER_ID + fromQuery + toQuery + limitQuery
}

