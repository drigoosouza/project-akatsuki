const members = [{name: "akatsuki", text:"É um grupo formado por shinobis renegados que trabalham como mercenários em missões secretas para alguns países ninja. Além disso, eles possuíam um objetivo próprio, que é revelado mais adiante, de capturar todos os Jinchuuriki para extrair deles as Bestas de Cauda. Nagato assume a liderança da Akatsuki e seu objetivo fica distorcido pelo ódio do rapaz pelo mundo shinobi que lhe tirou seu país, sua família e seus amigos. E pelas manipulações do Obito. Dessa forma, a Akatsuki passa a recrutar ninjas renegados e o grupo começa a trabalhar como mercenário para adquirir poder e dinheiro. O objetivo do Nagato agora é o de atingir o mundo shinobi com um massacre tão violento e incomparável que geraria medo na população e cessaria as guerras por um período de tempo. Isso funcionaria como um ciclo e esse poder seria usado no futuro novamente, causando o mesmo efeito."},
                  {name: "zetsu", text:"Zetsu Branco foi metade da dupla de Zetsu, o outro sendo o Zetsu Negro. Um ser humano criado artificialmente que trabalha a serviço da Akatsuki, Zetsu branco foi criado a partir do DNA de Hashirama Senju. O zetsu Negro foi criado a partir da vontade de Kaguya Ootsutsuki para garantir seu renascimento."},
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
  image.style.transform=`translatey(${-100*buttonIndex}vh)`

  mainIformation(member,buttonIndex)
  buttonStatus()
}

function navbar (){
  const buttonNavBar = document.querySelector(".nav")
  const navBar = document.getElementById("navBar")
  navBar.classList.toggle("active")
  buttonNavBar.classList.toggle("active")
}

console.log(members.length)