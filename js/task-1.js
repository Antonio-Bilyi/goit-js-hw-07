const categoriesList = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(elem => {
    const title = elem.querySelector('h2').textContent;

    const itemCount = elem.querySelectorAll('li').length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${itemCount}`);
});
