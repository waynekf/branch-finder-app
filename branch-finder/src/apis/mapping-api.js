import wait from "../utils/wait";

function getPostcode(postcode) {
  wait(2500);
  const url = `https://api.postcodes.io/postcodes/${postcode}`;
  return fetch(url)
    .then((res) => {
      if (res.status === 404) {
        return Promise.reject({
          status: res.status,
          msg: "Failed to match postcode",
        });
      }
      return res.json();
    })
    .then((postcode) => {
      return postcode.result;
    });
}

export default getPostcode;
