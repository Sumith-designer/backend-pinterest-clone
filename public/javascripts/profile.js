const editBtn = document.getElementById("ipd-edit-1573");
const formPage = document.getElementById("ipd-form-1573")
const inputFile = formPage.querySelector("input")
editBtn.addEventListener("click", () => {
    inputFile.click();
});

inputFile.addEventListener("change", (event) => {  
    formPage.submit();
});
