/* ===== SCP Terminal — логика (окна, Проводник, шаблон проекта) ===== */

/* ---------- ДАННЫЕ ПРОЕКТОВ ----------
   Чтобы добавить новый проект — скопируйте объект в массив PROJECTS,
   поменяйте id/name/tabs. type 'scp' = терминал с допуском. */
/* Единая анимация допуска (одинаковая для всех проектов) */
const AUTH_SEQ = `
<div class="seq">
  <div class="seqline">Меметический агент деактивирован <span class="cursor"></span></div>
  <div class="seqline">Биометрический профиль распознан.</div>
  <div class="seqline">Уровень допуска подтверждён: 5 / Thaumiel.</div>
  <div class="seqline">ЭМОГ «Альфа-1» уведомлена об открытии сего документа.</div>
  <div class="seqline">Часть сотрудников и наблюдателей уведомлены о доступе.</div>
  <div class="seqline">Раскрытие содержимого вышестоящим уровням влечёт необратимые последствия.</div>
  <div class="seqline">Все действия в документе мониторятся ИИ &#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;.</div>
  <div class="seqline">Канал зашифрован. Соединение устойчиво.</div>
  <div class="seqline">Подтвердите уровень допуска: . . . . . .</div>
  <div class="seqline">Уровень допуска подтверждён — загрузка содержимого.</div>
</div>`;

/* Общее финальное предупреждение (одинаковое для всех проектов) */
const EDIT_WARN = `
<div class="warn">⚠ Повторяем: раскрытие сведений о содержании данного документа лицам, не имеющим доступа
может нести серьёзные последствия. Документ отредактирован некоторыми сотрудниками ЭМОГ &#9608;&#9608;&#9608;&#9608;-&#9608;
«&#9608;&#9608;&#9608;&#9608; &#9608;&#9608; &#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;».</div>`;

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
          ${AUTH_SEQ}
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
          ${EDIT_WARN}
        `
      }
    ]
  }
  ,
  {
    id: "k2",
    name: "K-2 — Техническое описание.txt",
    type: "scp",
    tabs: [
      {
        title: "Вкладка 1",
        html: `
          <div class="banner">
            <b>SCPF | Secure. Contain. Protect.</b><br>
            Managed By the Alpha-1 and &#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;<br>
            Approved by the O5 Council
          </div>
          <div class="warn">
            : DISTRIBUTION DIRECTIVE :<br>
            This document was created and is managed by the Overwatch Council.
            Unauthorized distribution of this document will result in possible disciplinary action.<br>
            Document access level : 5 Thaumiel [О5:\\C-ms\\K-2]
          </div>
          <div class="warn">
            Если вы здесь по ошибке — немедленно закройте документ и отойдите от устройства.<br>
            ЭМОГ «Альфа-1» уведомлена об открытии данного документа.<br>
            Неавторизованные сотрудники будут обработаны меметическим агентом.
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
            Managed By the O5 Overwatch [О5:\\C-ms\\K-2]
          </div>
          ${AUTH_SEQ}
        `
      },
      {
        title: "Вкладка 3",
        html: `
          <h2>Техническое описание и регламент эксплуатации костюма модели K-2</h2>
          <p>Уровень допуска: 5.</p>

          <div class="sec">
            <h3>1. Общее описание</h3>
            <p>Костюм модели K-2 («Juggernaut») — сверхтяжёлый штурмовой защитный комплекс для боевых
            действий в условиях максимальной физической и аномальной нагрузки. В отличие от K-1, акцент
            сделан на абсолютной прочности, ударной мощи и выживаемости. Применяется МОГ Альфа-1
            «багряная десница» при: прямом подавлении аномалий высокого класса опасности; штурме
            укреплённых объектов; удержании позиций в условиях полной изоляции.</p>
            <p>Параметры: высота — 2,5 м; масса в снаряжённом состоянии — 9,8 т; автономия — до 64 ч;
            расчётная ударная нагрузка — до 120 т на конечность.</p>
          </div>

          <div class="sec">
            <h3>2. Технические характеристики</h3>
            <h3>2.1. Защитные элементы</h3>
            <p>Многослойная сверхтяжёлая броня повышенной плотности: внешний слой — армированный
            карбид-вольфрамовый композит с аномально стабилизированными кристаллическими структурами;
            промежуточный — массивная демпфирующая прослойка из ферромагнитного геля с перераспределением
            кинетической энергии; внутренний — усиленный СВМПЭ с многократным резервированием герметичных
            сегментов. Температурная устойчивость: от −420 °C до +630 °C. Пассивная защита от ударных волн
            и взрывов; усиленный каркас против деформации при обрушениях; антиразрывная стабилизация.</p>
            <h3>2.2. Силовые системы</h3>
            <p>Гидравлические усилители сверхвысокого давления; сервоприводы с крутящим моментом, превышающим
            K-1 более чем в 3 раза; система «&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;» кратковременно повышает усилие
            до предельных значений (с риском повреждения узлов). Возможности: разрушение бетона толщиной до 5 м;
            удержание объектов массой свыше 80 т; пробивание брони без вооружения.</p>
            <h3>2.3. Системы жизнеобеспечения</h3>
            <p>Герметичная капсула пилота с усиленной термоизоляцией; подача кислорода (до 64 ч);
            фильтрация токсинов класса «Бета+»; защита от перегрузок до 20 g.</p>
            <h3>2.4. Сенсорные и вспомогательные системы</h3>
            <p>Многоуровневая визуальная система (ИК + низкий свет); датчики давления, вибрации и
            структурной целостности; система «&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;» передаёт пилоту данные о контакте с объектами.</p>
            <h3>2.5. Системы аварийного реагирования</h3>
            <p>Автофиксация пилота при критических повреждениях; аварийный сброс брони (частичный);
            встроенный протокол самоуничтожения (радиус до 80 м, повышенная мощность).</p>
            <h3>2.6. Информационно-аналитическое обеспечение</h3>
            <p>ИИ поддержки «R&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;&#9608;» (ограниченная версия, боевые расчёты);
            защищённая связь SAT-LINK; локальная база данных 512 Тб.</p>
          </div>

          <div class="sec">
            <h3>3. Условия эксплуатации</h3>
            <p><b>3.1.</b> Только при высокой угрозе физического разрушения среды; невозможности применения
            более лёгких моделей; санкционированном приказе уровня не ниже О5.</p>
            <p><b>3.2. Ограничения:</b> запрет в замкнутых пространствах без расчёта нагрузки; длительная работа
            в режиме максимальной мощности более 30 минут; пилотирование без резервной команды поддержки.</p>
            <p><b>3.3.</b> Обслуживание после применения: проверка каркаса на микротрещины; замена демпфирующего
            геля; диагностика гидравлики; тестирование силовых приводов.</p>
          </div>

          <div class="sec">
            <h3>4. Доступ</h3>
            <p>Строго ограничен и предоставляется: бойцам ЭМОГ Альфа-1 «багряная десница»; инженерному
            персоналу проекта; руководству проекта.</p>
          </div>

          <div class="sec">
            <h3>5. Требования к пилоту</h3>
            <p><b>5.1.</b> Курс подготовки не менее 180 часов; опыт управления тяжёлой техникой; высокая
            физическая и психологическая устойчивость.</p>
            <p><b>5.2.</b> Устойчивость к перегрузкам и длительному стрессу; способность принимать решения
            при ограниченной информации.</p>
          </div>

          <div class="sec">
            <h3>6. Назначение и применение</h3>
            <p>K-2 применяется исключительно как инструмент прямого подавления: уничтожение угроз за счёт
            физического превосходства; прорыв обороны; удержание критических точек.</p>
          </div>

          ${EDIT_WARN}
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

/* ---------- Виртуальная файловая система (для Проводника) ---------- */
const DB_FOLDER = {
  name:"База данных о", type:"folder", children:[
    { name:"костюмы", type:"folder", children:[
      { name:"K-1 — Техническое описание.txt", type:"scp", project:"k1" },
      { name:"K-2 — Техническое описание.txt", type:"scp", project:"k2" }
    ]}
  ]
};
const USER_FOLDER = { name:"user", type:"folder", children:[DB_FOLDER] };
const C_DRIVE     = { name:"Диск C:", type:"drive", children:[USER_FOLDER] };
const COMPUTER    = { name:"Этот компьютер", type:"computer", children:[C_DRIVE] };

/* ---------- Проводник (с навигацией по папкам) ---------- */
function openExplorerAt(node, path){
  if(wins.has("explorer")) closeWindow(wins.get("explorer"));
  const crumbs = path.slice();
  const body = `<div class="addr"><span>Адрес:</span><div class="crumbbar" id="crumbbar"></div></div>
    <div class="filelist" id="filelist"></div>`;
  const w = createWindow({title:"Проводник", cls:"explorer", w:540, h:360, body, id:"explorer"});
  const crumbbar = w.querySelector("#crumbbar");
  const filelist = w.querySelector("#filelist");
  const cur = ()=> crumbs[crumbs.length-1];
  function render(){
    w.querySelector(".ttitle").textContent = "Проводник - " + cur().name;
    crumbbar.innerHTML = crumbs.map((n,i)=>`<span class="crumb" data-i="${i}">${n.name}</span>`)
      .join(` <span class="sep">\\</span> `);
    crumbbar.querySelectorAll(".crumb").forEach(c=>{
      c.addEventListener("click", ()=>{ crumbs.length = +c.dataset.i + 1; render(); });
    });
    const kids = cur().children || [];
    filelist.innerHTML = kids.map(child=>{
      if(child.type === "scp"){
        const p = PROJECTS.find(x=>x.id===child.project);
        return `<div class="file" data-type="scp" data-project="${child.project}">
          <div class="fimg">📄</div><div class="fname">${p?p.name:child.name}</div></div>`;
      }
      const icon = child.type==="drive" ? "💽" : child.type==="computer" ? "🖥️" : "📁";
      return `<div class="file" data-type="folder">
        <div class="fimg">${icon}</div><div class="fname">${child.name}</div></div>`;
    }).join("");
    filelist.querySelectorAll(".file").forEach(f=>{
      f.addEventListener("click", ()=>{
        if(f.dataset.type === "scp"){
          openProject(PROJECTS.find(p=>p.id===f.dataset.project));
        }else{
          const nm = f.querySelector(".fname").textContent;
          const child = cur().children.find(c=>c.name===nm);
          crumbs.push(child); render();
        }
      });
    });
  }
  render();
}
function openDbExplorer(){ openExplorerAt(DB_FOLDER, [COMPUTER, C_DRIVE, USER_FOLDER, DB_FOLDER]); }
function openComputer(){ openExplorerAt(COMPUTER, [COMPUTER]); }

/* ---------- Игра «Змейка» ---------- */
const SNAKE_DIFFS = [
  {id:"easy",   name:"Лёгкая",    speed:160},
  {id:"normal", name:"Нормальная",speed:120},
  {id:"hard",   name:"Сложная",   speed:90},
  {id:"xtreme", name:"Экстрим",   speed:60},
];
function snakeLoad(){ try{ return JSON.parse(localStorage.getItem("scp_snake")) || {}; }catch(e){ return {}; } }
function snakeSave(s){ try{ localStorage.setItem("scp_snake", JSON.stringify(s)); }catch(e){} }

function openSnake(){
  if(wins.has("snake")){ focusWindow(wins.get("snake")); return; }
  const body = `<div class="snake-wrap">
      <div class="snake-head">
        <span class="snake-title">Змейка</span>
        <span class="snake-best">Лучший счёт: <b id="snakeBest">0</b></span>
      </div>
      <div class="snake-stage">
        <canvas id="snakeCanvas" width="300" height="220" class="snake-canvas"></canvas>
        <div class="snake-start" id="snakeStart"></div>
      </div>
    </div>`;
  const w = createWindow({title:"Змейка", cls:"snake", w:340, h:350, body, id:"snake"});
  const canvas = w.querySelector("#snakeCanvas");
  const ctx = canvas.getContext("2d");
  const bestEl = w.querySelector("#snakeBest");
  const startEl = w.querySelector("#snakeStart");
  const cell = 20, cols = canvas.width/cell, rows = canvas.height/cell, total = cols*rows;

  let save = snakeLoad();
  if(save.best == null) save.best = 0;
  if(!save.won) save.won = [];
  bestEl.textContent = save.best;

  let snake, dir, nextDir, food, score, timer = null, raf = null, state = "start", selected = "easy";
  const isUnlocked = i => i===0 || save.won.includes(SNAKE_DIFFS[i-1].id);
  const speedOf = () => { const d = SNAKE_DIFFS.find(d=>d.id===selected); return d ? d.speed : 120; };

  function renderDiffs(){
    startEl.querySelector("#snakeDiffs").innerHTML = SNAKE_DIFFS.map((d,i)=>{
      const un = isUnlocked(i);
      const cls = "snake-diff" + (d.id===selected ? " sel" : "") + (un ? "" : " locked");
      return `<div class="${cls}" data-id="${d.id}">${d.name}${un ? "" : " 🔒"}</div>`;
    }).join("");
    startEl.querySelectorAll(".snake-diff").forEach(el=>{
      el.addEventListener("click", ()=>{ if(el.classList.contains("locked")) return; selected = el.dataset.id; renderDiffs(); });
    });
  }
  function showStartScreen(){
    if(raf){ cancelAnimationFrame(raf); raf = null; }
    state = "start";
    clearInterval(timer); timer = null;
    const highest = SNAKE_DIFFS.reduce((a,d,i)=> isUnlocked(i) ? d.id : a, "easy");
    if(!isUnlocked(SNAKE_DIFFS.findIndex(d=>d.id===selected))) selected = highest;
    startEl.classList.remove("hidden");
    startEl.innerHTML = `
      <div class="snake-arrows">
        <span class="ar up">↑</span><span class="ar left">←</span>
        <span class="ar down">↓</span><span class="ar right">→</span>
      </div>
      <div class="snake-ctl">стрелки — для управления<br>Esc — начать игру</div>
      <div class="snake-diffs" id="snakeDiffs"></div>
      <button class="snake-play" id="snakePlay">Начать (Esc)</button>`;
    renderDiffs();
    startEl.querySelector("#snakePlay").addEventListener("click", startGame);
  }
  function placeFood(){
    const free = [];
    for(let i=0;i<cols;i++) for(let j=0;j<rows;j++) if(!snake.some(s=>s.x===i&&s.y===j)) free.push({x:i,y:j});
    if(free.length===0) return false;
    food = free[Math.floor(Math.random()*free.length)];
    return true;
  }
  function reset(){
    snake = [{x:5,y:5},{x:4,y:5},{x:3,y:5}];
    dir = {x:1,y:0}; nextDir = dir; score = 0;
    placeFood();
  }
  function draw(){
    ctx.fillStyle = "#04140a"; ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "#0a3a1a";
    for(let i=0;i<cols;i++) for(let j=0;j<rows;j++) if((i+j)%2) ctx.fillRect(i*cell,j*cell,cell,cell);
    ctx.fillStyle = "#ff5b5b"; ctx.fillRect(food.x*cell+3, food.y*cell+3, cell-6, cell-6);
    snake.forEach((s,i)=>{ ctx.fillStyle = i===0 ? "#aaffc0" : "#33ff66"; ctx.fillRect(s.x*cell+2, s.y*cell+2, cell-4, cell-4); });
  }
  function startGame(){
    startEl.classList.add("hidden");
    reset(); draw(); score = 0; state = "play";
    clearInterval(timer); timer = setInterval(step, speedOf());
  }
  function step(){
    dir = nextDir;
    const head = {x:snake[0].x+dir.x, y:snake[0].y+dir.y};
    if(head.x<0||head.x>=cols||head.y<0||head.y>=rows||snake.some(s=>s.x===head.x&&s.y===head.y)){ gameOver(); return; }
    snake.unshift(head);
    if(head.x===food.x && head.y===food.y){
      score++;
      if(snake.length === total){ win(); return; }
      placeFood();
    } else snake.pop();
    draw();
  }
  function updateBest(){
    if(score > save.best){ save.best = score; bestEl.textContent = save.best; snakeSave(save); }
  }
  function gameOver(){
    clearInterval(timer); timer = null; state = "over"; updateBest();
    startEl.classList.remove("hidden");
    startEl.innerHTML = `<div class="snake-result">Игра окончена</div>
      <div class="snake-ctl">Счёт: ${score}<br>Esc — играть снова</div>
      <button class="snake-play" id="snakePlay">Играть (Esc)</button>`;
    startEl.querySelector("#snakePlay").addEventListener("click", showStartScreen);
  }
  function win(){
    clearInterval(timer); timer = null; state = "win"; updateBest();
    if(!save.won.includes(selected)){ save.won.push(selected); snakeSave(save); }
    runConfetti();
  }
  function runConfetti(){
    const parts = [];
    const colors = ["#ff5b5b","#33ff66","#7fd0ff","#ffd86b","#ff9b6b","#c08bff"];
    for(let i=0;i<140;i++) parts.push({x:Math.random()*canvas.width, y:Math.random()*-canvas.height, vx:(Math.random()-.5)*2, vy:Math.random()*3+2, c:colors[i%colors.length], s:Math.random()*4+3});
    const t0 = performance.now();
    function frame(){
      ctx.fillStyle = "#04140a"; ctx.fillRect(0,0,canvas.width,canvas.height);
      parts.forEach(p=>{ p.x+=p.vx; p.y+=p.vy; if(p.y>canvas.height){ p.y=-10; p.x=Math.random()*canvas.width; } ctx.fillStyle=p.c; ctx.fillRect(p.x,p.y,p.s,p.s); });
      ctx.fillStyle = "#aaffc0"; ctx.font = "bold 26px monospace"; ctx.textAlign = "center";
      ctx.fillText("ПОБЕДА!", canvas.width/2, canvas.height/2);
      if(performance.now()-t0 < 3500){ raf = requestAnimationFrame(frame); }
      else {
        draw();
        const ni = SNAKE_DIFFS.findIndex(d=>d.id===selected)+1;
        const openedNew = ni < SNAKE_DIFFS.length && isUnlocked(ni);
        startEl.classList.remove("hidden");
        startEl.innerHTML = `<div class="snake-result">ПОБЕДА!</div>
          <div class="snake-ctl">Счёт: ${score}${openedNew ? "<br>Открыт новый уровень!" : ""}<br>Esc — играть снова</div>
          <button class="snake-play" id="snakePlay">Играть (Esc)</button>`;
        startEl.querySelector("#snakePlay").addEventListener("click", showStartScreen);
      }
    }
    raf = requestAnimationFrame(frame);
  }
  function key(e){
    const k = e.key;
    if(k==="Escape"){
      if(state==="start") startGame();
      else if(state==="over"||state==="win") showStartScreen();
      e.preventDefault(); return;
    }
    if(state!=="play") return;
    if(k==="ArrowUp" && dir.y===0) nextDir = {x:0,y:-1};
    else if(k==="ArrowDown" && dir.y===0) nextDir = {x:0,y:1};
    else if(k==="ArrowLeft" && dir.x===0) nextDir = {x:-1,y:0};
    else if(k==="ArrowRight" && dir.x===0) nextDir = {x:1,y:0};
    else return;
    e.preventDefault();
  }
  showStartScreen();
  const keyHandler = (e)=>key(e);
  document.addEventListener("keydown", keyHandler);
  w.querySelector('[data-act="close"]').addEventListener("click", ()=>{
    if(timer) clearInterval(timer);
    if(raf) cancelAnimationFrame(raf);
    document.removeEventListener("keydown", keyHandler);
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
  i.addEventListener("click", ()=>{
    startMenu.hidden=true;
    if(i.dataset.open==="computer") openComputer();
    else openDbExplorer();
  });
});
document.getElementById("icons").querySelectorAll(".icon").forEach(ic=>{
  ic.addEventListener("click", ()=>{
    document.querySelectorAll(".icon").forEach(x=>x.classList.remove("sel")); ic.classList.add("sel");
    if(ic.dataset.open==="computer") openComputer();
    else openDbExplorer();
  });
});
document.getElementById("smAbout").addEventListener("click", ()=>{
  startMenu.hidden=true;
  createWindow({title:"О системе", w:320, h:180, body:
    `<div style="padding:12px;font-family:monospace">SCP Terminal v.?.??.<br>Windows 98.<br></div>`});
});
document.getElementById("smSnake").addEventListener("click", ()=>{ startMenu.hidden=true; openSnake(); });

/* ---------- Экран блокировки / включение / выключение / перезагрузка ---------- */
const lockScreen = document.getElementById("lockScreen");
const lockUser = document.getElementById("lockUser");
const lockEnter = document.getElementById("lockEnter");
const powerScreen = document.getElementById("powerScreen");
const powerMsg = document.getElementById("powerMsg");
const powerBtn = document.getElementById("powerBtn");

let booting = false;
function closeAllWindows(){ [...wins.values()].forEach(w=>closeWindow(w)); }
function showLock(){
  powerScreen.hidden = true;
  lockScreen.hidden = false;
  lockEnter.hidden = true;
}
/* Чёрный экран выключенного ПК с кнопкой питания (красная) */
function showPowerOff(){
  closeAllWindows();
  booting = false;
  lockScreen.hidden = true;
  powerMsg.hidden = true;
  powerBtn.style.transition = "none";
  powerBtn.className = "power-btn";
  void powerBtn.offsetWidth;
  powerBtn.style.transition = "";
  powerBtn.hidden = false;
  powerScreen.hidden = false;
  powerScreen.classList.add("off");
}
/* Нажатие кнопки питания: синяя → уезжает → «Включение…» → блокировка */
function startBoot(){
  if(booting) return;
  booting = true;
  powerScreen.classList.remove("off");
  powerBtn.classList.remove("pressed");
  powerBtn.classList.add("on");
  setTimeout(()=>{
    powerBtn.classList.add("slide");
    powerMsg.hidden = false;
    powerMsg.textContent = "Включение…";
  }, 1000);
  setTimeout(showLock, 2300);
}
powerBtn.addEventListener("pointerdown", ()=> powerBtn.classList.add("pressed"));
powerBtn.addEventListener("pointerup", ()=> powerBtn.classList.remove("pressed"));
powerBtn.addEventListener("pointerleave", ()=> powerBtn.classList.remove("pressed"));
powerBtn.addEventListener("click", ()=>{ if(powerScreen.classList.contains("off")) startBoot(); });

lockUser.addEventListener("click", ()=>{ lockEnter.hidden = false; });
lockEnter.addEventListener("click", ()=>{ lockScreen.hidden = true; });

function doShutdown(){
  startMenu.hidden = true;
  closeAllWindows();
  powerMsg.hidden = false;
  powerBtn.hidden = true;
  powerScreen.hidden = false;
  powerScreen.classList.remove("off");
  powerMsg.textContent = "Завершение работы…";
  setTimeout(showPowerOff, 1300);
}
function doRestart(){
  startMenu.hidden = true;
  closeAllWindows();
  powerMsg.hidden = false;
  powerBtn.hidden = true;
  powerScreen.hidden = false;
  powerScreen.classList.remove("off");
  powerMsg.textContent = "Перезагрузка…";
  setTimeout(showPowerOff, 1300);
}
document.getElementById("smShutdown").addEventListener("click", doShutdown);
document.getElementById("smRestart").addEventListener("click", doRestart);

/* Запуск: экран выключенного ПК с кнопкой питания */
showPowerOff();
function tick(){ const d=new Date(); document.getElementById("clock").textContent =
  String(d.getHours()).padStart(2,"0")+":"+String(d.getMinutes()).padStart(2,"0"); }
tick(); setInterval(tick, 10000);

/* ---------- Старт: ничего не открываем автоматически ---------- */
/* Только рабочий стол с папкой «База данных о». Открывается по клику. */
