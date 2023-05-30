function getProjects() {
  const urlGitHub = "https://api.github.com/users/Henriquenascimento01/repos";
  let loadingElement = document.querySelector("#loading");

  fetch(urlGitHub, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((response) => {
      loadingElement.style.display = "none";
      showProjects(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

function showProjects(data) {
  let listElement = document.querySelector("#my-projects-list");

  for (let i = 0; i < data.length; i++) {
    let a = document.createElement("a");

    a.href = data[i]["clone_url"];
    a.target = "_blank";
    a.title = data[i]["description"];

    let linkText = document.createTextNode(data[i]["name"]);

    a.appendChild(linkText);
    listElement.appendChild(a);
  }
}

getProjects();
