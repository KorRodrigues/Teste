import _get from '../services/_get'
import getHeroesCatalog from '../services/getHeroes'

export const CATALOG_REQUESTED = 'heroCatalog/CATALOG_REQUESTED'
export const CATALOG = 'heroCatalog/CATALOG'
export const CATALOG_REQUEST_ERROR = 'heroCatalog/CATALOG_REQUEST_ERROR'
export const CATALOG_PAGE = 'heroCatalog/CATALOG_PAGE'

const initialState = {
  catalog: null,
	isRequestingCatalog: false,
	catalogRequestError: null,
	page: parseInt(_get('page')) || 1
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CATALOG_REQUESTED:
      return {
        ...state,
        isRequestingCatalog: true
      }

    case CATALOG:
      return {
        ...state,
        catalog: action.catalog,
        isRequestingCatalog: false
      }

		case CATALOG_REQUEST_ERROR:
			return {
				...state,
				catalog: action.catalog,
				catalogRequestError: action.catalogRequestError
			}

		case CATALOG_PAGE:
			return {
				...state,
				page: action.page,
			}

    default:
      return state
  }
}


// TODO maybe is better to put actions on his own file
// ************* //
// ** ACTIONS ** //
// ************* //


export const requestCatalog = (page = 1, searchTerm = '') => {
  return dispatch => {
    dispatch({
      type: CATALOG_REQUESTED
    })
    return getHeroesCatalog(
			page,
			searchTerm,
			(catalog) => {
				dispatch({
					type: CATALOG,
					catalog,
				})
			},
			() => {
				dispatch({
					type: CATALOG_REQUEST_ERROR,
					catalogRequestError:
						'Houve um erro ao buscar os heróis, Tony Stark logo resolverá isso :D',
				})
		})
  }
}

export const changeCatalogPage = (page) => {
  return dispatch => {
    dispatch({
			type: CATALOG_PAGE,
			page,
    })
  }
}
