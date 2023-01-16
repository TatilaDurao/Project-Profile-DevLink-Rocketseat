function toggleMode(){
    //document  = representação do nosso documento em html
     //acesso o html atraves do documentElement
    const html = document.documentElement
    html.classList.toggle('light')
    //na tag html na lista de classes contem a informação light?
    /*if(html.classList.contains('light')){
        html.classList.remove('light')
    }else{
        html.classList.add('light')
    }*/
    

    //pegar a tag image e substuir a imagem
    //se tiver light remove se tiver sem add

    //pesquisa pelo seletor la no css
    const img = document.querySelector("#profile img")

    if(html.classList.contains("light")){
        img.setAttribute("src", "./assets/avatar-dark.png")
    }else{
        img.setAttribute("src", "./assets/avatar.png")
    }

}