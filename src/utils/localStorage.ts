const ACCESS_TOKEN_KEY = 'access_token';

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function setAccessToken(token: string) {
  return localStorage.setItem(ACCESS_TOKEN_KEY, token);
}

export function removeAccessToken() {
  return localStorage.removeItem(ACCESS_TOKEN_KEY);
}
