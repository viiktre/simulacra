export async function execute(sourceCode) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const PAYLOAD = JSON.stringify({
    source_code: sourceCode,
    language_id: "71",
    stdin: "Judge0",
  });
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: PAYLOAD,
  };
  return await fetch("http://127.0.0.1:2358/submissions/", requestOptions)
    .then((response) => response.json())
    .then((data) => console.log("data", data))
    .catch((error) => console.error(error));
}

export async function executionRes(token) {
  const requestOptions = {
    method: "GET",
  };

  return await fetch(
    `http://127.0.0.1:2358/submissions/${token}?base64_encoded=false&fields=stdout,stderr,status_id,language_id`,
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => console.log("data", data))
    .catch((error) => console.log(error));
}
