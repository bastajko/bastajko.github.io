let lang = "en";

const translations = {
    en: {
      "lang": "СРП",
      "name": "Stefan Bastajić",
      "about": "About",
      "experience": "Experience",
      "years_of_experience": "4+ years <br />Software Engineering",
      "projects": "Projects",
      "contact": "Contact",
      "hello": "Hello, I'm",
      "software_engineer": "Software Engineer",
      "get_to_know_more": "Get To Know More",
      "about_me": "About Me",
      "get_in_touch": "Get in Touch",
      "download_cv": "Download CV",
      "contact_info": "Contact Info",
      "get_to_know": "Get To Know More",
      "education": "Education",
      "explore_my": "Explore My",
      "browse_my_recent": "Browse My Recent",
      "degree": "B.Sc. and M.Sc. in Computer and Electrical Engineering",
      "backend": "Backend",
      "frontend": "Frontend"
    },
    sr: {
      "lang": "ENG",
      "name": "Стефан Бастајић",
      "about": "О мени",
      "experience": "Искуство",
      "years_of_experience": "4+ година <br />Софтверског Инжењерства",
      "projects": "Пројекти",
      "contact": "Контакт",
      "hello": "Здраво, ја сам",
      "software_engineer": "Софтверски инжењер",
      "get_to_know_more": "Сазнајте више",
      "about_me": "О мени",
      "get_in_touch": "Контактирајте ме",
      "download_cv": "Преузмите резиме",
      "contact_info": "Контакт информације",
      "get_to_know": "Сазнајте више",
      "education": "Образовање",
      "explore_my": "Истражите моје",
      "browse_my_recent": "Прегледајте моје најновије",
      "degree": "Дипл. и мастер инж. Електротехнике и рачунарства",
      "backend": "Бекенд",
      "frontend": "Фронтенд"
    }
  };
  
  function changeLanguage() {
    lang == "en" ? lang = "sr" : lang = "en";

    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        const translation = translations[lang][key];
    
        if (translation) {
          // Update content as HTML to render tags like <br />
          el.innerHTML = translation;
        }
      });
  }