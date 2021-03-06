const API = process.env.REACT_APP_API_URL

function headers() {
  let auth = { token: null }
  try {
    auth = JSON.parse(localStorage.getItem("atlas-auth") || "")
  } catch (error) {
    // ignore
  }

  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer: ${auth.token}`,
  }
}

function parseResponse(response: any) {
  return response.json().then((json: any) => {
    if (!response.ok) {
      return Promise.reject(json)
    }
    return json
  })
}

function queryString(params: any) {
  const query = Object.keys(params)
    .map(k => `${k}=${encodeURIComponent(params[k])}`)
    .join("&")
  return `${query.length ? "?" : ""}${query}`
}

export default {
  get(url: string, params = {}) {
    return fetch(`${API}${url}${queryString(params)}`, {
      method: "GET",
      headers: headers(),
    }).then(parseResponse)
  },

  post(url: string, data: any) {
    const body = JSON.stringify(data)

    return fetch(`${API}${url}`, {
      method: "POST",
      headers: headers(),
      body,
    }).then(parseResponse)
  },

  patch(url: string, data: any) {
    const body = JSON.stringify(data)

    return fetch(`${API}${url}`, {
      method: "PATCH",
      headers: headers(),
      body,
    }).then(parseResponse)
  },

  delete(url: string) {
    return fetch(`${API}${url}`, {
      method: "DELETE",
      headers: headers(),
    }).then(parseResponse)
  },
}
