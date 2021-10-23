//Variaveis tipo Texto
//"Italo Saraiva", "12345"

//Variaveis tipo Numeros
//123, 5+1

//Variaveis tipo Booleano
//true, false

//variaveis : let ou const
//let = o valor pode ser mudado
//const = um valor constante, não pode ser mudada

//const name = 'Italo Saraiva'
//let phone = 992000000
//let accept = true

//tipo de dado simples
//let accept = true

//tipo de dado estruturado
//const user = {
//name: 'Italo Saraiva',
//phone: 123456789
// }

//alert(user.phone)

//function showMeSomthing() {
//alert(links.instagram)
//}
//showMeSomthing()

//variavel global
const links = {
  github: 'idss13',
  youtube: 'italosaraiva',
  facebook: 'italosaraiva',
  instagram: 'italodss',
  twitter: 'teste'
}

function changeSocialMediaLinks() {
  //document.getElementById('userName').textContent = 'Italo'
  //userName.textContent = 'Fulano'

  //Laço de repetição
  //for (let i = 0; i <= 10; i++) {
  //alert(i)
  //}
  for (let li of socialLinks.children) {
    //variavel escopo
    const social = li.getAttribute('class')

    li.children[0].href = `http://${social}.com/${links[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${links.github}`

  //promise => then()

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

//Arrow Functions

//modo normal
//function nomedafuncao(argumentos){
//codigo
//}

//modo arrow function
//argumento => {
//}
