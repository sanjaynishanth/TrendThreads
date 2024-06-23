var productcontainer = document.getElementById("product")
var searchbox = document.getElementById("search")
var productlist = productcontainer.querySelectorAll("div")

searchbox.addEventListener("keyup", function () {
    var enteredvalue = event.target.value.toUpperCase()

    for (count = 0; count <= productlist.length; count++) {
        var productname = productlist[count].querySelector("p").textContent

        if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
            productlist[count].style.display = "none"
        }
        else{
            productlist[count].style.display = "block"
        }

    }
})