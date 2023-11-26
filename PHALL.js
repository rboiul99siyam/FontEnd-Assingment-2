const PHtubeByCategory = async (categoryId) => {
  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
    );
    const data = await res.json();
    displayAll(data.data);
    catarGoryHere(data.data);

  } catch (err) {
    console.log("PHtube is fetching error", err);
  }
};

const PHtubeAll = async () => {
  await PHtubeByCategory(1000);
  const DrowImage = document.getElementById("DrowImg").innerText = " "
};

const PHtubeMusic = async () => {
  await PHtubeByCategory(1001);
};

const PHtubeComedy = async () => {
  await PHtubeByCategory(1003);
};

const PHtubeDrawing = async () => {
  await PHtubeByCategory(1005);
  const DrowImage = document.getElementById("DrowImg");
  if (DrowImage.style.display === "") {
    DrowImage.style.display = "block";
  } else {
    DrowImage.style.display = "none";
  }
  document.getElementById("Opps").innerText =
    "Oops! Sorry, There is No content";
};

PHtubeAll();

const displayAll = (data) => {
  const allContainer = document.getElementById("All-container");
  allContainer.innerHTML = "";

  data?.forEach((AllData) => {
    const card = document.createElement("div");

    card.classList.add("all");
    card.innerHTML = `

        <img src="${AllData.thumbnail}" class="card-img-top" alt="...">
        <div class="ProFileTitle">
        <img class="ProfileAll" src="${
          AllData.authors[0].profile_picture
        }" class="card-img-top" alt="...">
        <p>${AllData.title}</p>
        <br>
        </div>
        <div class="BluePro">
        <p class="profile-name ">${AllData.authors[0].profile_name}</p> 
        ${
          (AllData.authors[0].verified &&
            `<i id="showVi" class="bi text-primary bi-check-circle-fill"></i>`) ||
          ""
        }
        </div>
        </div>
        
        <p class="views"> ${AllData.others.views}</p>

          
          `;

    allContainer.appendChild(card);
  });
};





const sortByViews = () => {
  const allContainer = document.getElementById("All-container");
  const cards = Array.from(allContainer.getElementsByClassName('all'));

  const sortByViewsCards = cards.sort((a, b) => {
    const viewsA = parseInt(a.querySelector(".views").innerText);
    const viewsB = parseInt(b.querySelector(".views").innerText);
      return viewsB - viewsA;
  });

  allContainer.innerHTML = ""; 

  sortByViewsCards.forEach(card => {
      allContainer.appendChild(card);
  });
};


const catarGoryHere = (data) => {
  const CatagoryButtonNowHere = document.getElementById(
    "CatagoryButtonNowHere"
  );
  CatagoryButtonNowHere.innerHTML = "";

  const buttonHere = document.createElement("div");
  buttonHere.innerHTML = `
            <button onclick="PHtubeAll()" class="btn btn-outline-success">All</button>
            <button onclick="PHtubeMusic()" class="btn btn-outline-success">Music</button>
            <button onclick="PHtubeComedy()" class="btn btn-outline-success">Comedy</button>
            <button onclick=" PHtubeDrawing()" class="btn btn-outline-success">Drowing</button>
        `;
  CatagoryButtonNowHere.appendChild(buttonHere);
};

const Let = () => {
  document.getElementById("Let").innerText = `
    var: 

    var javascript এর একটি keyword যা দ্বারা varialbe তৈরি করা হয় হয় 
   
   let :
   
   let হলো javascript এর একটি  keyword যা দ্বারা  দ্বারা varialbe তৈরি করা হয় হয়। এবং value গুলোকে reinilazation করা যায়। 
   
   const :
   
   const  হলো javascript এর একটি  keyword যা দ্বারা  দ্বারা varialbe তৈরি করা হয় হয়। এবং value গুলোকে reinilazation করা যায় না। 
    `;
};
const UnN = () => {
  document.getElementById("UnN").innerText = `
    
    Null : 

    কোনো একটা ভারিয়ালে Null  সেট করে ফাংশন এর ভিতরে কিছু কাজ করা হয় এবং কন্ডিশন সেট করার জন্য Null  ব্যবহার করা হয় 

    undefined:

    কোনো  একটা  ভ্যারিয়েবল  এ যদি  কোনো ম্যান না থাকে  এবং কোনো ফাংশনে যদি  কোনো ভ্যালু  না থাকে তাহলে undefined  show করে 
    যদি
    মূলকথা হলো  Null  এবং undefined এক  নয়। 
    `;
};

const Api = () => {
  document.getElementById("Api").innerText = `
    
    API :
    api - Application programing Interface 
    A way to communicate between client and server 

    api ব্যবহার করে আমরা সারবার থেকে বিভিন্ন  ডাটা  আমাদের ওয়েব সাইটে  দেখাতে পারি  এবং  আমার যদি ওয়েবসাইট  থেকে কোনো রিকোয়েস্ট পাঠায়  তখন  api কল হয় এবং সারবার থেকে সে ডাটা গুলোকে দেখায় আমাদের ওয়েবসাইটে 
    `;
};
