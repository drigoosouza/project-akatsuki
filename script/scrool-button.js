const members = [{name: "akatsuki", text:"Organização liderada por Pain/nagato"},
                  {name: "zetsu", text:"Zetsu Branco e Zetsu Negro"},
                  {name: "hidan", text:"Hidan - Yugakure (Vila Oculta das Fontes Termais)"},
                  {name: "deidara", text:"Deidara - Iwagakure (Vila Oculta da Pedra)."},
                  {name: "kakuzu", text:"Kakuzu - Takigakure (Vila Oculta da Cachoeira)."},
                  {name: "kisame", text:"Kisame Hoshigaki - Kirigakure (Vila Oculta da Névoa)"},
                  {name: "sasori", text:"Sasori da Areia Vermelha - Sunagakure (Vila Oculta da Areia)"},
                  {name: "konan", text:"Konan - Amegakure (Vila Oculta na Chuva)"},
                  {name: "orochimaru", text:"Orochimaru, Lendários Sannin - Konohagakure (Vila Oculta da Folha) DESERTOR"},
                  {name: "obito", text:"Obito Uchiha/Tobi - Konohagakure (Vila Oculta da Folha)"},
                  {name: "itachi", text:"Itachi Uchiha - Konohagakure (Vila Oculta da Folha)"},
                  {name: "pain", text:"Nagato/Pain - Amegakure (Vila Oculta na Chuva)"}
]

const image = document.getElementById("image")
const body = document.querySelector("body")
let buttonIndex = 0


function buttonStatus () {
  const prev = document.getElementById("prev")
  const prevInfo = buttonIndex == 0
  prev.disabled = prevInfo

  const next = document.getElementById("next")
  const nextInfo = buttonIndex==members.length-1
  next.disabled=nextInfo
}

function mainIformation(member,index){
  console.log(member.name)
  const name_member = document.getElementById("name")
  name_member.innerText = member.name
  name_member.style.color=`var(--${member.name})`

  const text_member = document.getElementById("text")
  text_member.innerText = member.text
}

function scrolly (button){
  buttonIndex += button
  const member = members[buttonIndex]
  image.style.transform=`translatex(${-100*buttonIndex}vw)`

  mainIformation(member,buttonIndex)
  buttonStatus()
  console.log(buttonIndex)
}

function stylebtnmenber(n){
  const p = document.querySelectorAll(".btnNavBar")
  let name_btn = p[n].lastChild
  name_btn.style.color=`var(--${members[n].name})`

  p[n].addEventListener("mouseleave", ()=>{
    name_btn.style.color=`transparent`
  })
  console.log(name_btn)

}
function buttonNav(number){
  buttonIndex=number
  const member = members[number]
  image.style.transform=`translatex(${-100*number}vw)`
  mainIformation(member,number)
  buttonStatus()
  navbar ()
  console.log(buttonIndex)
}

function navbar (){
  const buttonNavBar = document.querySelector(".nav")
  const navBar = document.getElementById("navBar")
  navBar.classList.toggle("active")
  buttonNavBar.classList.toggle("active")
}

console.log(members.length)