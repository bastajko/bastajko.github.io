let lang = "en";

const translations = {
    en: {
      "lang": "СРП",
      "name": "Stefan Bastajić",
      "about": "About",
      "experience": "Experience",
      "years_of_experience": "+ years <br />Software Engineering",
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
      "frontend": "Frontend",
      "infrastructure": "Infrastructure & DevOps",
      "contact_me": "Contact me",
      "get_in_touch": "Get in touch",
      "basic": "Basic",
      "intermediate": "Intermediate",
      "advanced": "Advanced",
      "tools": "Tools",
      "portal": "Portal",
      "about_project": "About",
      "credits": "Credits",
      "trailer": "Trailer",
      "news": "News",
      "about_text": `
                    <p>
                      I’m a software engineer with a background 
                      in Computer and Electrical Engineering, based in Belgrade, Serbia. 
                      In my career, I've been tackling real-world challenges 
                      by building scalable and efficient systems.
                    </p>
                    <br />
                    <p>
                      I specialize in backend and infrastructure, 
                      with significant experience in Azure, C#, .NET, and SQL. 
                      Over the years, I’ve contributed to diverse projects—from 
                      enhancing the Compliance Manager platform for Microsoft 
                      to developing game tools and porting games at Ubisoft.
                    </p>
                    <br />
                    <p>
                      Beyond my professional life, I’m passionate about GIS solutions, 
                      history, and exploring construction forums. As a father, chess enthusiast, 
                      and lifelong learner, I value balance, strategy, and curiosity in everything I do.
                    </p>
                    <br />
                    <p>
                      Let’s connect and build something meaningful together.
                    </p>
                    `
    },
    sr: {
      "lang": "ENG",
      "name": "Стефан Бастајић",
      "about": "О мени",
      "experience": "Искуство",
      "years_of_experience": "+ година <br />рада у струци",
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
      "explore_my": "Увид у моје",
      "browse_my_recent": "Моји скорашњи",
      "degree": "Дипл. и мастер инж. Електротехнике и рачунарства",
      "backend": "Бекенд",
      "frontend": "Фронтенд",
      "infrastructure": "Инфраструктура и ДевОпс",
      "contact_me": "Контакт",
      "get_in_touch": "Јавите се, ово је мој",
      "basic": "Основно",
      "intermediate": "Средње",
      "advanced": "Напредно",
      "tools": "Алати",
      "portal": "Портал",
      "about_project": "О пројекту",
      "credits": "Заслуге",
      "trailer": "О пројекту",
      "news": "Најаве",
      "about_text": `
                    <p>
                      Ја сам софтверски инжењер из Београда, са дипломом Електротехничког факултета. 
                      Стварам скалабилна и ефикасна решења која решавају конкретне изазове.
                    </p>
                    <br />
                    <p>
                      Специјализован сам за бекенд и инфраструктуру, 
                      са значајним искуством у Azure-у, C#-у, .NET-у и SQL-у.
                      У досадашњој каријери радио сам на разноврсним пројектима — 
                      од унапређења Compliance Manager решења за Microsoft 
                      до развоја алата за игре и портовања игара за Ubisoft.
                    </p>
                    <br />
                    <p>
                      Поред посла, интересују ме ГИС решења, историја и грађевински форуми.
                      Као отац, љубитељ шаха и вечити ученик, тежим равнотежи, 
                      стратегији и радозналости у свему што радим.
                    </p>
                    <br />
                    <p>
                      Јавите се да заједно стварамо нешто значајно.
                    </p>
                    `
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
    
      calculateYearsOfExperience();
  }