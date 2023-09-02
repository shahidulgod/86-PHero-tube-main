const handleCategory = async() =>{
  const response = await fetch("https://openapi.programming-hero.com/api/videos/categories");
  const data = await response.json();
  const tabContainer =document.getElementById("tab-container");
  data.data.forEach((categories) => {
    // console.log(categories)
    const div = document.createElement("div");
div.innerHTML = `
<a  onclick="viewCategory('${categories.category_id}'
    )" class="tab"> ${categories.category} </a>   `;
tabContainer.appendChild(div)
  });
  // console.log(data.data)

};

const viewCategory = async (category_id) => {
  const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${category_id}`);
  const data = await response.json(); 
  const cardContainer = document.getElementById("card-container");
  
  
  // console.log(data.data);
  data.data.forEach((categories) => {
    console.log(categories)
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card w-80  bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img 
          src=${categories.thumbnail
          }
          />
        </figure>
        <div class="card-body items-center text-center">
          <div class= " flex justify-evenly> 
          <img 
          // src=${categories.authors
          }
          />
          <h> </h>
          </div
          <p>If a dog chews shoes whose shoes does he choose?</p>
          
        </div>
      </div>
    `;

cardContainer.appendChild(div);
  });




};
handleCategory()
