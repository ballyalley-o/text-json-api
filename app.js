document.getElementById('button1').addEventListener('click', getText)
document.getElementById("button2").addEventListener("click", getJSON);
document.getElementById("button3").addEventListener("click", getJSON);


//GET Text File
function getText() {
    fetch('data.txt')
    .then(function(res) {
       return res.text()
    })

    .then(function(data) {
        console.log(data);
        document.getElementById('output').innerHTML = data;
    })
    .catch(function(err) {
        console.log(err);
    })

}


//GET JSON File
function getJSON() {
    fetch('data.json')
    .then(function(res){
        return res.json()
    })
    .then(function(data) {
        console.log(data)

        let output = '+=';

        data.forEach(function(people) {
            output += `

            <ul>
                <li>name: ${people.name}</li>
                <li>age: ${people.age}</li>
            </ul>
            `;
        })
    document.getElementById('output').innerHTML = output;

    })
    .catch(function(err) {
        console.log(err);
    })
}

//GET JSON File
function getJSON() {
    fetch("https://api.github.com/users")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        Math.random(data) * 1000
        console.log(data);

        let output = "";

        data.forEach(function (user) {
          output += `
            <div class="card">
            <ul>
                <li>Id: ${user.id}</li>
                <li>User Name: ${user.login}</li>
                <li>Type: ${user.type}</li>
                <li>Repos: ${user.repos_url}</li>
            </ul>
            </div>

            `;
        });


        document.getElementById("output").innerHTML = output;
      })
      .catch(function (err) {
        console.log(err);
      });
}