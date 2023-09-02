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
    <div class="card w-80 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src="${categories.thumbnail
          }" />
          <h4 class="text-right absolute bottom-44 right-6 text-lime-400" > ${categories.others.posted_date} </h4>
        </figure>
        <div class="card-body items-center text-center">
          <div class="flex gap-4 ">
            <img class="h-12 w-12 rounded-full " src="${categories.authors[0].profile_picture}" alt="">
            <h2 class="card-title">${categories.title
            } </h2>
          </div>
          <p>${categories.authors[0].profile_name } </p>
          <h4> view ${ categories.others.views  } </h4>
        </div>
      </div>
    `;

cardContainer.appendChild(div);
  });




};
handleCategory()
