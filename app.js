/* ===== SCP Terminal — логика (окна, Проводник, шаблон проекта) ===== */

/* ---------- ДАННЫЕ ПРОЕКТОВ ----------
   Чтобы добавить новый проект — скопируйте объект в массив PROJECTS,
   поменяйте id/name/tabs. type 'scp' = терминал с допуском. */
const PROJECTS = [
  {
    id: "k1",
    name: "K-1 — Техническое описание.txt",
    type: "scp",
    tabs: [
      {
        title: "Вкладка 1",
        html: `
          <div class="banner">
            <b>SCPF | Secure. Contain. Protect.</b><br>
            Managed By the O5 Overwatch<br><br>
            O5 Council — To Serve and Protect.<br><br>
            : DISTRIBUTION DIRECTIVE :<br>
            This document was created and is managed by the Overwatch Council.
            Unauthorized distribution of this document will result in possible disciplinary action.<br>
            Document access level : 5 Thaumiel [О5:\\C-ms\\K-1]
          </div>
          <div class="warn">
            Если вы здесь по ошибке — немедленно закройте документ и отойдите от устройства.<br>
            ЭМОГ «Альфа-1» уведомлена об открытии данного документа.<br>
            Неавторизованные сотрудники и сотрудники с не соответствующим уровнем допуска
            будут обработаны меметическим агентом.
          </div>
          <p>Подтвердите ваш уровень допуска: . . . . . .</p>
          <button class="confirm" data-confirm>ПОДТВЕРДИТЬ УРОВЕНЬ ДОПУСКА</button>
        `
      },
      {
        title: "Вкладка 2",
        html: `
          <div class="banner">
            <b>SCPF | Secure. Contain. Protect.</b><br>
            Managed By the O5 Overwatch [О5:\\C-ms\\K-1]
          </div>
          <div class="seq">
            <div class="seqline">Меметический агент деактивирован <span class="cursor"></span></div>
            <div class="seqline">Доступ к документу подтвержден . . .</div>
            <div class="seqline">Открытие документа . . .</div>
          </div>
        `
      },
      {
        title: "Вкладка 3",
        html: `
          <h2>Техническое описание и регламент эксплуатации костюма модели K-1</h2>
          <p>Уровень допуска: 5.</p>

          <div class="sec">
            <h3>1. Общее описание</h3>
            <p>Костюм модели K-1 («Killer») представляет собой крупногабаритный автономный защитный
            комплекс, предназначенный для эксплуатации сотрудниками специализированных подразделений
            Фонда SCP в условиях повышенной опасности, сопряжённых с воздействием аномальных факторов,
            враждебными действиями сторонних организаций и иными экстремальными обстоятельствами.</p>
            <p>Основные технические параметры: габаритная высота — свыше 2,5 м (в полной комплектации — 2,8 м);
            масса в снаряжённом состоянии — 4,2 т; продолжительность автономной работы — до 72 часов.
            Стоимость единицы изделия — 2 096 000 долларов США.</p>
          </div>

          <div class="sec">
            <h3>2. Технические характеристики</h3>
            <h3>2.1. Защитные элементы</h3>
            <p>Конструкция предусматривает трёхслойную композитную броню: внешний слой — керамическое
            покрытие на основе карбида бора; средний слой — матрица из углеродных нанотрубок, заполненных
            вязкоупругим гелем; внутренний слой — сверхвысокомолекулярный полиэтилен (СВМПЭ)
            с радиационно-защитной пропиткой.</p>
            <p>Дополнительно: система активной защиты (кратковременное ЭМ-поле для отклонения высокоскоростных
            объектов); автономная система пожаротушения (распыление криогенного агента, −196 °C).</p>
            <h3>2.2. Системы жизнеобеспечения</h3>
            <p>Нанодисперсная терморегуляция поддерживает +18 °C … +25 °C при внешних −210 °C … +300 °C;
            ребризер замкнутого цикла (регенерация кислорода, запас 72 часа); противотоксиновые фильтры
            класса «Альфа».</p>
          </div>

          <div class="sec">
            <h3>3. Эксплуатация и обслуживание</h3>
            <p>Обслуживание и боевое применение возложены на персонал ЭМОГ «Альфа-1», группу обслуживания.</p>
          </div>

          <div class="sec">
            <h3>4. Порядок доступа и ответственность</h3>
            <p><b>4.1.</b> К ознакомлению допускаются: подгруппы ГИН, ЭМОГ «Альфы-1», исследователи проекта,
            уполномоченные представители Комитета по Этике.</p>
            <p><b>4.2.</b> Разглашение влечёт дисциплинарную, административную и уголовную ответственность
            (ст. 283 УК РФ, ФЗ № 5485-1), при утечке аномальной информации — протокол «Зачистка».</p>
            <p><b>4.3.</b> Регулируется документами SEC/01-K1, TECH/05-K1.</p>
          </div>

          <div class="sec">
            <h3>5. Сведения о допуске и персонале</h3>
            <p>Разработке присвоен уровень допуска 5. Полный административный доступ — советница О5-2
            «Sophia Light»; наблюдение — председатель Комитета по Этике; тактическое применение — глава ЭМОГ «Омега-1».</p>
          </div>

          <div class="sec">
            <h3>6. Требования к пилотированию</h3>
            <p><b>6.1.</b> Курс не менее 120 академических часов (симулятор SCP-SIM/K1), тестирование
            совместимости, проверка навыков в имитации боевых действий.</p>
            <p><b>6.2.</b> Допуск (1 год), медицинское заключение (6 мес), инструктаж (1 год).</p>
            <p><b>6.3.</b> Процедура: заявка SCP/K1-APP → проверка документов → экзамен (50 вопросов, проходной 90%)
            → практика на симуляторе → NDA-SCP/K1 → реестр SCP/PILOT-REG.</p>
          </div>

          <div class="sec">
            <h3>7. Примеры успешного применения</h3>
            <p><b>7.1.</b> При восстановлении содержания объектов класса «Кетер» K-1 обеспечил защиту персонала
            и отражение атак нарушителей периметра.</p>
            <p><b>7.2.</b> При инциденте SCP-XXXX (событие класса-K) — минимизация потерь, эвакуация материалов,
            нейтрализация угрозы без привлечения дополнительных сил.</p>
          </div>
        `
      }
    ]
  }
  /* === Новый проект добавляйте сюда (копия объекта выше) === */
];

/* ---------- Окна ---------- */
const desktop = document.getElementById("desktop");
const tasklist = document.getElementById("tasklist");
let zTop = 100;
const wins = new Map();

function focusWindow(win){
  zTop++; win.style.zIndex = zTop;
  tasklist.querySelectorAll(".task").forEach(t=>t.classList.remove("active"));
  const t = tasklist.querySelector(`[data-win="${win.dataset.id}"]`);
  if(t) t.classList.add("active");
}
function closeWindow(win){
  const t = tasklist.querySelector(`[data-win="${win.dataset.id}"]`);
  if(t) t.remove();
  win.remove(); wins.delete(win.dataset.id);
}
function makeDraggable(win){
  const bar = win.querySelector(".titlebar");
  bar.style.touchAction = "none";
  bar.addEventListener("pointerdown", e=>{
    if(e.target.closest(".ctrl")) return;
    focusWindow(win);
    const r = win.getBoundingClientRect();
    const dx = e.clientX - r.left, dy = e.clientY - r.top;
    function move(ev){
      const s = win.parentElement.getBoundingClientRect();
      let x = ev.clientX - s.left - dx;
      let y = ev.clientY - s.top - dy;
      x = Math.max(-win.offsetWidth+60, Math.min(x, s.width-60));
      y = Math.max(0, Math.min(y, s.height-30));
      win.style.left = x+"px"; win.style.top = y+"px";
    }
    function up(){ document.removeEventListener("pointermove",move); document.removeEventListener("pointerup",up); }
    document.addEventListener("pointermove",move);
    document.addEventListener("pointerup",up);
  });
}
function createWindow({title, cls="", w=460, h=320, body="", id}){
  const el = document.createElement("div");
  el.className = "window enter " + cls;
  el.dataset.id = id || ("w"+Date.now()+Math.floor(Math.random()*999));
  const maxW = desktop.clientWidth - 8;
  const maxH = desktop.clientHeight - 30;
  const cw = Math.max(240, Math.min(w, maxW));
  const ch = Math.max(140, Math.min(h, maxH));
  el.style.width = cw+"px"; el.style.height = ch+"px";
  let L = 40 + wins.size*24; L = Math.min(L, maxW - cw); if(L < 4) L = 4;
  let T = 20 + wins.size*24; T = Math.min(T, maxH - ch); if(T < 4) T = 4;
  el.style.left = L+"px"; el.style.top = T+"px";
  el.innerHTML = `
    <div class="titlebar">
      <div class="ticon"></div>
      <div class="ttitle">${title}</div>
      <div class="ctrls">
        <div class="ctrl" data-act="min">_</div>
        <div class="ctrl" data-act="max">□</div>
        <div class="ctrl" data-act="close">✕</div>
      </div>
    </div>
    <div class="winbody"></div>`;
  el.querySelector(".winbody").innerHTML = body;
  desktop.appendChild(el);
  wins.set(el.dataset.id, el);
  makeDraggable(el);
  el.addEventListener("mousedown", ()=>focusWindow(el));
  el.querySelector('[data-act="close"]').addEventListener("click", ()=>closeWindow(el));
  el.querySelector('[data-act="min"]').addEventListener("click", ()=>{ el.style.display="none"; });
  el.querySelector('[data-act="max"]').addEventListener("click", ()=>{
    if(el.style.width!=="100%"){el.dataset.prev=[el.style.left,el.style.top,el.style.width,el.style.height].join("|");
      el.style.left=0;el.style.top=0;el.style.width="100%";el.style.height="calc(100% - 30px)";}
    else{const p=el.dataset.prev.split("|");el.style.left=p[0];el.style.top=p[1];el.style.width=p[2];el.style.height=p[3];}
  });
  // кнопка в панели задач
  const t = document.createElement("div");
  t.className="task active"; t.dataset.win=el.dataset.id; t.textContent=title;
  t.addEventListener("click", ()=>{
    if(el.style.display==="none"){el.style.display="flex";focusWindow(el);}
    else if(el.style.zIndex==zTop){el.style.display="none";}
    else focusWindow(el);
  });
  tasklist.appendChild(t);
  focusWindow(el);
  setTimeout(()=>el.classList.remove("enter"),400);
  return el;
}

/* ---------- Проводник ---------- */
function openExplorer(){
  if(wins.has("explorer")){ focusWindow(wins.get("explorer")); return; }
  const body = `<div class="addr"><span>Адрес:</span><input value="C:\\База данных о" readonly></div>
    <div class="filelist">${PROJECTS.map(p=>`
      <div class="file" data-id="${p.id}">
        <div class="fimg">📄</div>
        <div class="fname">${p.name}</div>
      </div>`).join("")}</div>`;
  const w = createWindow({title:"Проводник - База данных о", cls:"explorer", w:540, h:360, body, id:"explorer"});
  w.querySelectorAll(".file").forEach(f=>{
    f.addEventListener("click", ()=>openProject(PROJECTS.find(p=>p.id===f.dataset.id)));
  });
}

/* ---------- Шаблон проекта: SCP-терминал ---------- */
function openProject(p){
  if(wins.has(p.id)){ focusWindow(wins.get(p.id)); return; }
  const tabs = p.tabs.map((t,i)=>`<button class="tabbtn ${i===0?'active':''} ${i>0?'locked':''}" data-i="${i}">${t.title}</button>`).join("");
  const panes = p.tabs.map((t,i)=>`<div class="tabpane ${i===0?'active':''}" data-i="${i}">${t.html}</div>`).join("");
  const body = `<div class="scp">
    <div class="banner"><b>SCP TERMINAL</b> // ${p.name}</div>
    <div class="tabs">${tabs}</div>
    <div class="panes">${panes}</div>
  </div>`;
  const w = createWindow({title:p.name, w:620, h:440, body, id:p.id});
  const scp = w.querySelector(".scp");
  const tabbtns = [...scp.querySelectorAll(".tabbtn")];
  const tabpanes = [...scp.querySelectorAll(".tabpane")];
  let granted = false;

  function showTab(i){
    tabbtns.forEach(b=>b.classList.toggle("active", +b.dataset.i===i));
    tabpanes.forEach(pn=>pn.classList.toggle("active", +pn.dataset.i===i));
  }
  tabbtns.forEach(b=>b.addEventListener("click", ()=>{
    const i=+b.dataset.i;
    if(i>0 && !granted){
      const pn=tabpanes[0];
      pn.querySelector(".warn").insertAdjacentHTML("beforeend",
        `<p class="lockmsg">⚠ Требуется подтверждение уровня допуска.</p>`);
      return;
    }
    showTab(i);
  }));
  const confirm = scp.querySelector("[data-confirm]");
  confirm.addEventListener("click", ()=>{
    granted = true;
    tabbtns.forEach(b=>b.classList.remove("locked"));
    showTab(1);
    const lines = scp.querySelectorAll(".seq .seqline");
    lines.forEach((l,idx)=>setTimeout(()=>l.classList.add("show"), 400*(idx+1)));
    setTimeout(()=>showTab(2), 400*(lines.length+2));
  });
}

/* ---------- Пуск / часы / иконки ---------- */
const startMenu = document.getElementById("startMenu");
document.getElementById("startBtn").addEventListener("click", e=>{
  e.stopPropagation(); startMenu.hidden = !startMenu.hidden;
});
document.addEventListener("click", ()=>{ startMenu.hidden = true; });
startMenu.querySelectorAll("[data-open]").forEach(i=>{
  i.addEventListener("click", ()=>{ startMenu.hidden=true; openExplorer(); });
});
document.getElementById("icons").querySelectorAll(".icon").forEach(ic=>{
  ic.addEventListener("click", ()=>{ document.querySelectorAll(".icon").forEach(x=>x.classList.remove("sel")); ic.classList.add("sel"); openExplorer(); });
});
document.getElementById("smAbout").addEventListener("click", ()=>{
  startMenu.hidden=true;
  createWindow({title:"О системе", w:320, h:180, body:
    `<div style="padding:12px;font-family:monospace">SCP Terminal v.?.??.<br>Windows 98.<br></div>`});
});
function tick(){ const d=new Date(); document.getElementById("clock").textContent =
  String(d.getHours()).padStart(2,"0")+":"+String(d.getMinutes()).padStart(2,"0"); }
tick(); setInterval(tick, 10000);

/* ---------- Старт: ничего не открываем автоматически ---------- */
/* Только рабочий стол с папкой «База данных о». Открывается по клику. */
