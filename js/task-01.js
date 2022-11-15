
const itemElement = document.querySelector("#categories");
console.log("Number of categories:", itemElement.children.length);

const classItem = document.querySelectorAll(".item");
classItem.forEach(itemTitleFunc);

function itemTitleFunc(category) {
    const titleItemEl = category.firstElementChild;
    console.log("Category:", titleItemEl.textContent);
    const titleSum = category.lastElementChild;
    console.log("Elements:", titleSum.children.length);
}







