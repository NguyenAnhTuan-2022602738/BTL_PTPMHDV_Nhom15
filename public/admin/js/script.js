//lọc
//End lọc

//Form search
const formSearch = document.querySelector("#form-search");
if(formSearch){
    let url = new URL (window.location.href);

    formSearch.addEventListener("submit", (e) => {
        e.preventDefault();
        const keyword = e.target.elements.keyword.value;

        if(keyword){
            url.searchParams.set("keyword", keyword);
        } else{
            url.searchParams.delete("keyword");
        }

        window.location.href = url.href;
    })
}
//End Form search


//pagination
const buttonsPagination = document.querySelectorAll("[button-pagination]");
if(buttonsPagination){
    let url = new URL(window.location.href);

    buttonsPagination.forEach(button => {

        button.addEventListener("click", () => {
            const page = button.getAttribute("button-pagination");
            
            url.searchParams.set("page", page);

            window.location.href = url.href;
        })
    })
}
//End pagination