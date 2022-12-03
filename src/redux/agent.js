const API_ROOT =
  process.env.REACT_APP_BACKEND_URL ?? 'https://assigment-database.onrender.com/api/v1';

/**
 * Serialize object to URL params
 *
 * @param {Record<string, unknown>} object
 * @returns {String}
 */
function serialize(object) {
  const params = [];

  for (const param in object) {
    if (Object.hasOwnProperty.call(object, param) && object[param] != null) {
      params.push(`${param}=${encodeURIComponent(object[param])}`);
    }
  }

  return params.join('&');
}

let token = null;

/**
 * API client
 *
 * @param {String} url The endpoint
 * @param {Object} body The request's body
 * @param {('GET'|'DELETE'|'PUT'|'POST')} [method='GET'] The request's method
 *
 * @throws {@link ApiError API Error}
 *
 * @returns {Promise<Object>} API response's body
 */
const agent = async (url, body, method = 'GET') => {
  const headers = new Headers();

  if (body) {
    headers.set('Content-Type', 'application/json');
  }

  if (token) {
    headers.set('Authorization', `Token ${token}`);
  }

  const response = await fetch(`${API_ROOT}${url}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });
  let result;

  try {
    result = await response.json();
  } catch (error) {
    result = { errors: { [response.status]: [response.statusText] } };
  }

  if (!response.ok) throw result;

  return result;
};

const requests = {
  /**
   * Send a DELETE request
   *
   * @param {String} url The endpoint
   * @returns {Promise<Object>}
   */
  del: (url) => agent(url, undefined, 'DELETE'),
  /**
   * Send a GET request
   *
   * @param {String} url The endpoint
   * @param {Object} [query={}] URL parameters
   * @param {Number} [query.limit=10]
   * @param {Number} [query.page]
   * @param {String} [query.author]
   * @param {String} [query.tag]
   * @param {String} [query.favorited]
   * @returns {Promise<Object>}
   */
  get: (url, query = {}) => {
    if (Number.isSafeInteger(query?.page)) {
      query.limit = query.limit ? query.limit : 10;
      query.offset = query.page * query.limit;
    }
    delete query.page;
    const isEmptyQuery = query == null || Object.keys(query).length === 0;

    return agent(isEmptyQuery ? url : `${url}?${serialize(query)}`);
  },
  /**
   * Send a PUT request
   *
   * @param {String} url The endpoint
   * @param {Record<string, unknown>} body The request's body
   * @returns {Promise<Object>}
   */
  put: (url, body) => agent(url, body, 'PUT'),
  /**
   * Send a POST request
   *
   * @param {String} url The endpoint
   * @param {Record<string, unknown>} body The request's body
   * @returns {Promise<Object>}
   */
  post: (url, body) => agent(url, body, 'POST'),
};

const Auth = {
  /**
   * Get current user
   *
   * @returns {Promise<UserAuth>}
   */
  current: () => requests.get('/user'),
  /**
   * Login with email and password
   *
   * @param {String} email
   * @param {String} password
   * @returns {Promise<UserAuth>}
   */
  login: (email, password) =>
    requests.post('/users/login', { user: { email, password } })
};

const Supplier = {
  /**
   * Get all articles
   *
   * @param {Object} query Article's query parameters
   * @param {Number} [query.limit=10]
   * @param {Number} [query.page]
   * @param {String} [query.author]
   * @param {String} [query.tag]
   * @param {String} [query.favorited]
   * @returns {Promise<ArticlesResponse>}
   */
  all: (query) => requests.get(`/supplier`, query),
  /**
   * Get all articles from author
   *
   * @param {String} author Article's author
   * @param {Number} [page]
   * @returns {Promise<ArticlesResponse>}
   */
  byAuthor: (author, page) =>
    requests.get(`/articles`, { author, limit: 5, page }),
  /**
   * Get all articles by tag
   *
   * @param {String} tag Article's tag
   * @param {Number} page
   * @returns {Promise<ArticlesResponse>}
   */
  byTag: (tag, page) => requests.get(`/articles`, { tag, page }),
  /**
   * Get all articles in the user's feed
   *
   * @param {Number} [page]
   * @returns {Promise<ArticlesResponse>}
   */
  feed: (page) => requests.get('/articles/feed', { page }),
  /**
   * Get one article by slug
   *
   * @param {String} slug Article's slug
   * @returns {Promise<ArticleResponse>}
   */
  get: (slug) => requests.get(`/articles/${slug}`),
  create: (article) => requests.post('/articles', { article }),
};

const Customer = {
    /**
   * Get the profile of an user
   *
   * @param {String} username User's username
   * @returns {Profile<ProfileResponse>}
   */
  get: (username) => requests.get(`/profiles/${username}`),
  };

export default {
  Supplier,
  Auth,
  Customer,
  setToken: (_token) => {
    token = _token;
  },
};
