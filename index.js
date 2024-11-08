// Function to update the content language

function updateInform(langData){
    document.querySelectorAll('[data-i18n]').forEach (element =>{
        const key =element.getAttribute('data-i18n');
        element.innerHTML = langData[key];
    });
}

//Function to fetch language data

async function fetchLangData(lang){
    const reponse= await fetch(`${lang}.json`);
    return reponse.json();
}

// Function to set the lang prefrence in the html tag

function setLangPreference(lang){
    localStorage.setItem("language", lang);
    location.reload();
}

//Function to change lang

async function changeLanguage(lang) {
    await setLangPreference (lang);
    const langData=await fetchLangData(lang);
    updateInform (langData);
}

//Call updateInfo() on page load

window.addEventListener('DOMContentLoaded', async ()=> {
    const userChoseLang=localStorage.getItem("language") || 'en';
    const langData = await fetchLangData(userChoseLang);
    updateInform(langData);
})

//When user click on Go to button
function downup(){
    document.getElementById("mylist").classList.toggle("show");
}

//When user click again to close the list
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("mylist_content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }