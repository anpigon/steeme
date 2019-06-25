const API_URL = "https://www.tistory.com";
const client = axios.create({
  baseURL: API_URL,
  timeout: 1000,
  headers: { "content-type": "application/json" }
});

function getAccessToken() {
  return window.localStorage.getItem("s2t_access_token");
}

function getBlogInfo() {
  const request = "/apis/blog/info";
  const params = {
    output: "json",
    access_token: getAccessToken()
  };
  return client
    .get(request, { params })
    .then(r => r.data.tistory.item)
    .catch(error => console.log(error));
}

function getPostList(blogName, page = 1) {
  const request = "/apis/post/list";
  const params = {
    output: "json",
    access_token: getAccessToken(),
    blogName,
    page
  };
  return client
    .get(request, { params })
    .then(r => r.data.tistory.item)
    .catch(error => console.log(error));
}
