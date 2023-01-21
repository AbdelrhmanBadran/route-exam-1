


window. addEventListener ("load", () =>{
    const loader = document.querySelector(".pre-loader");
    loader.classList. add("pre-loader-hidden");

    loader. addEventListener ("transitionend", () =>{
    document.body.removeChild("pre-loader"); 
    })

})