(() => {
   
    console.log("fired");
    
    const seeMoreButtons = document.querySelectorAll('.see-more'),
        popOver = document.querySelector(".popover"); //#beer1

    // waypoints are for things you can scroll to - content further down the page
    
    function fetchData() {
        let targetElement = this,
            url = `./includes/connect.php?id=${this.dataset.target}`;

        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            buildPopover(data, targetElement);
        })
        .catch((err) => console.log(err));
    }

    function buildPopover(beerdata, el) {
        popOver.querySelector(".title").textContent = beerdata.title;
        popOver.querySelector(".class1 h2").textContent = beerdata.class1;
        popOver.querySelector(".class2 h2").textContent = beerdata.class2;
        popOver.querySelector(".class3 h2").textContent = beerdata.class3;
        popOver.querySelector(".class1 img").src = `images/${beerdata.picture1}`;
        popOver.querySelector(".class2 img").src = `images/${beerdata.picture2}`;
        popOver.querySelector(".class3 img").src = `images/${beerdata.picture3}`;
        

       popOver.classList.add('show-popover');

       
    }

    seeMoreButtons.forEach(el => el.addEventListener("click", fetchData));
})();