    const Article = document.querySelector('.Article')
    const text = document.querySelector('.text')


    Btnclick1.addEventListener("click",()=>{
        const text = document.getElementsByClassName('text')
        const Article = document.getElementsByClassName('Article')


        // text.classList.toggle('active')
        if(text.classList.contains("text"))
        {
            // text.classList.remove("hidden");
            text.classList.add("active");
            Article.classList.add("hidden");
        }
        
    })




    // checkbox.addEventListener("change", function () {
    //     if (text.classList.contains('text')) {
    //     text.style.display = "block";
    //     } else {
    //     text.style.display = "none";
    //     }
    //     });
