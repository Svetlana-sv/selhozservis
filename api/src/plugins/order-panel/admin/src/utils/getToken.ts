const getToken = () => {
  return `Bearer ${JSON.parse(window.sessionStorage.jwtToken)}`;
}

const fetchAdmin = (url: string) => {
  return fetch(url, {
    headers: {
      // Authorization: getToken()
    }
})
}

export {getToken,fetchAdmin};
