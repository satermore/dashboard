function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
    
    const day = now.toLocaleDateString("es-ES", { 
        weekday: "long", 
        day: "numeric", 
        month: "long", 
        year: "numeric" 
    });
    document.getElementById('date').textContent = day.charAt(0).toUpperCase() + day.slice(1);
}
setInterval(updateClock, 1000);
updateClock();

// Bookmarks
let bookmarks = [
    { name: "ForoCoches", url: "https://www.forocoches.com/", icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Roto2.png", type: "Redes Sociales" },
    { name: "Reddit", url: "https://www.reddit.com/", icon: "https://www.redditstatic.com/desktop2x/img/favicon/favicon-96x96.png", type: "Redes Sociales" },
    { name: "X.com", url: "https://twitter.com/home", icon: "https://abs.twimg.com/favicons/twitter.3.ico", type: "Redes Sociales" },
    { name: "Gmail", url: "https://mail.google.com/", icon: "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico", type: "Correo/Mensajería" },
    { name: "Telegram Web", url: "https://web.telegram.org/k/", icon: "https://telegram.org/img/favicon.ico", type: "Correo/Mensajería" },
    { name: "WhatsApp Web", url: "https://web.whatsapp.com/", icon: "https://web.whatsapp.com/favicon.ico", type: "Correo/Mensajería" },
    { name: "ESPN NBA Scoreboard", url: "https://www.espn.com/nba/scoreboard", icon: "https://a.espncdn.com/favicon.ico", type: "Noticias/Deportes" },
    { name: "Gigantes del Basket", url: "https://www.gigantes.com/", icon: "https://yt3.googleusercontent.com/ytc/AIdro_n1bU-xv4h6TkWsAeMQyvSWmb4eOeEMqMzNFQRRcduzjno=s900-c-k-c0x00ffffff-no-rj", type: "Noticias/Deportes" },
    { name: "NBA Games", url: "https://www.nba.com/games", icon: "https://e7.pngegg.com/pngimages/126/557/png-clipart-nba-logo-2005u201306-nba-season-orlando-magic-the-nba-finals-logo-nba-professional-basketball-logo-free-logo-design-template-text-thumbnail.png", type: "Noticias/Deportes" },
    { name: "NBAManiacs Noticias", url: "https://www.nbamaniacs.com/noticias/", icon: "https://www.nbamaniacs.com/wp-content/uploads/2013/01/new-logo.png", type: "Noticias/Deportes" },
    { name: "Kick", url: "https://kick.com/", icon: "https://kick.com/favicon.ico", type: "Streaming" },
    { name: "Netflix", url: "https://www.netflix.com/browse", icon: "https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico", type: "Streaming" },
    { name: "Prime Video", url: "https://www.primevideo.com/", icon: "https://www.primevideo.com/favicon.ico", type: "Streaming" },
    { name: "Twitch", url: "https://www.twitch.tv/", icon: "https://www.twitch.tv/favicon.ico", type: "Streaming" },
    { name: "YouTube", url: "https://youtube.com/", icon: "https://cdn-icons-png.freepik.com/512/12942/12942219.png", type: "Streaming" },
    { name: "YouTube Watch Later", url: "https://www.youtube.com/playlist?list=WL", icon: "https://cdn-icons-png.freepik.com/512/12942/12942219.png", type: "Streaming" },
    { name: "ChatGPT", url: "https://chat.openai.com/", icon: "https://chat.openai.com/favicon.ico", type: "IA" },
    { name: "Claude AI", url: "https://claude.ai/", icon: "https://claude.ai/favicon.ico", type: "IA" },
    { name: "DeepSeek", url: "https://www.deepseek.com/", icon: "https://www.deepseek.com/favicon.ico", type: "IA" },
    { name: "Gemini", url: "https://gemini.google.com/", icon: "https://freebiehive.com/wp-content/uploads/2023/12/Google-Gemini-AI-Icon.jpg", type: "IA" },
    { name: "Grok", url: "https://grok.com/", icon: "https://grok.com/favicon.ico", type: "IA" },
    { name: "Qwen", url: "https://qwen.ai/", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Qwen_logo.svg/1024px-Qwen_logo.svg.png", type: "IA" },
    { name: "GitHub", url: "https://github.com/", icon: "https://github.githubassets.com/favicons/favicon.svg", type: "Código" },
    { name: "Beatport", url: "https://www.beatport.com/", icon: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/beatport-9fzjxb3f59m9hnp4erst0i.png/beatport-2viwxwk3sxr1do6haqnmlx.png?_a=DATAg1AAZAA0", type: "Música" },
    { name: "Hypeddit", url: "https://hypeddit.com/", icon: "https://www.autektone.com/wp-content/uploads/2019/05/Logo_hypeddit-300x300.png", type: "Música" },
    { name: "Spotify", url: "https://open.spotify.com/", icon: "https://open.spotify.com/favicon.ico", type: "Música" },
    { name: "SoundCloud", url: "https://soundcloud.com/", icon: "https://soundcloud.com/favicon.ico", type: "Música" },
    { name: "Google Translate", url: "https://translate.google.com/", icon: "https://translate.google.com/favicon.ico", type: "Traductor" },
];

const bookmarksContainer = document.getElementById('bookmarks');
function renderBookmarks() {
    bookmarksContainer.innerHTML = "";
    bookmarks.forEach(bm => {
        const a = document.createElement('a');
        a.href = bm.url;
        a.target = "_blank";
        a.className = "bookmark";
        a.innerHTML = `<img src="${bm.icon}" alt="${bm.name}"><span>${bm.name}</span>`;
        bookmarksContainer.appendChild(a);
    });
}
renderBookmarks();

// Notes
const notesArea = document.getElementById('notes');
notesArea.value = localStorage.getItem('quickNotes') || "";
notesArea.addEventListener('input', () => {
    localStorage.setItem('quickNotes', notesArea.value);
});

const apiKey = "beb2b97e7a453265208eacfa0050882c"; // Reemplaza con una clave válida
const lat = 41.5036;
const lon = -5.7461;
const weatherContainer = document.getElementById('weather');

function obtenerPronostico(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=es&appid=${apiKey}`)
        .then(res => {
            if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
            return res.json();
        })
        .then(data => {
            if (!data || !data.list) throw new Error("Datos inválidos");
            mostrarPronostico(data);
        })
        .catch(err => {
            console.error("Error al obtener el pronóstico:", err.message);
            weatherContainer.innerHTML = `<p>Error: ${err.message}</p>`;
        });
}

function mostrarPronostico(data) {
    let html = `<h3>Clima actual: ${data.list[0].main.temp.toFixed(1)}°C, ${data.list[0].weather[0].description}</h3>`;
    html += `<div class="daily">`;

    // Filtrar un pronóstico por día (por ejemplo, a las 12:00)
    const dailyData = data.list.filter(item => item.dt_txt.includes("12:00:00"));
    dailyData.forEach(day => {
        const date = new Date(day.dt * 1000);
        const dayName = date.toLocaleDateString("es-ES", { weekday: "long" });
        const icon = `https://openweathermap.org/img/wn/${day.weather[0].icon}.png`;
        const desc = day.weather[0].description.charAt(0).toUpperCase() + day.weather[0].description.slice(1);
        const temp = day.main.temp.toFixed(1);

        html += `
            <div class="day">
                <h4>${dayName}</h4>
                <img src="${icon}" alt="${desc}">
                <p>${desc}</p>
                <p>Temperatura: ${temp}°C</p>
            </div>
        `;
    });

    html += `</div>`;
    weatherContainer.innerHTML = html;
}

// Llamada inicial
obtenerPronostico(lat, lon);