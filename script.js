
// ✅ 1) Gün sayacı
// Tanışlıq/başlama tarixini BURADA dəyiş:
// Format: YYYY-MM-DD  (məs: 2024-01-21)
const startDate = "2024-01-21";

function calcDaysTogether() {
  const start = new Date(startDate + "T00:00:00");
  const now = new Date();

  const diffMs = now.getTime() - start.getTime();
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  const el = document.getElementById("daysTogether");
  if (el) el.textContent = days >= 0 ? days : 0;
}

calcDaysTogether();

// ✅ 2) Musiqi kontrolu (Play/Pause + Volume)
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("musicBtn");
const volume = document.getElementById("volume");

let isPlaying = false;

function setButtonText() {
  if (!musicBtn) return;
  musicBtn.textContent = isPlaying ? "⏸ Musiqini dayandır" : "🎵 Musiqini başlat";
}

if (volume && music) {
  music.volume = Number(volume.value);
  volume.addEventListener("input", () => {
    music.volume = Number(volume.value);
  });
}

if (musicBtn && music) {
  musicBtn.addEventListener("click", async () => {
    try {
      if (!isPlaying) {
        await music.play();
        isPlaying = true;
      } else {
        music.pause();
        isPlaying = false;
      }
      setButtonText();
    } catch (e) {
      // Brauzer bloklaya bilər
      alert("Musiqi başlatmaq üçün bir dəfə ekrana toxunub yenidən düyməyə bas.");
    }
  });
}

setButtonText();

// Sənin sürpriz funksiyan (qalsın)
function surpriz(){
  const msg = document.getElementById("message");
  if (msg) msg.innerHTML = "Səni çox sevirəm 💙<br>Həmişə bir yerdə... 💍";
}
const heartsContainer = document.querySelector(".hearts");

setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💙";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (4 + Math.random() * 3) + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}, 500);
function showSecret(){
  const msg = document.getElementById("secretMessage");
  msg.style.display = "block";
}
// ✅ Lightbox: bütün şəkillərə kliklə böyüt
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
const lbClose = document.getElementById("lbClose");

function openLightbox(src){
  if (!lightbox || !lbImg) return;
  lbImg.src = src;
  lightbox.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeLightbox(){
  lightbox.classList.remove("show");
  document.body.style.overflow = "";
}

document.querySelectorAll("img").forEach(img=>{
  img.addEventListener("click", ()=>{
    if (!img.src) return;
    openLightbox(img.src);
  });
});

if (lbClose) lbClose.addEventListener("click", closeLightbox);
if (lightbox) {
  lightbox.addEventListener("click", (e)=>{
    if (e.target === lightbox) closeLightbox();
  });
}
document.addEventListener("keydown", (e)=>{
  if (e.key === "Escape" && lightbox?.classList.contains("show")) closeLightbox();
});
