this.addEventListener("DOMContentLoaded", () =>{
    const questions = document.querySelectorAll(".duvida")
    questions.forEach((duvida) => duvida.addEventListener("click", () =>{
  
        if(duvida.parentNode.classList.contains("active")){
            duvida.parentNode.classList.toggle("active")
        }
    else{
    questions.forEach(duvida => duvida.parentNode.classList.remove("active"))
    duvida.parentNode.classList.add("active")
        }

    }))
})