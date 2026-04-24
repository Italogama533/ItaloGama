const btnDarkmodetroca = document.getElementById("temas")
const themesystem = localStorage.getItem("themeSystem") || "light"

btnDarkmodetroca.addEventListener('click' , () =>{
    let oldTheme = localStorage.getItem("themeSystem") || "light"
    let newTheme = oldTheme == "light" ? "dark" : "light"
    localStorage.setItem("themeSystem", newTheme)
    defineCurrentTheme(newTheme)

})

function defineCurrentTheme(theme){
    document.documentElement.setAttribute("data-theme",theme)
    if(theme == "light"){
    }
}