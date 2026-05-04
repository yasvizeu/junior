const PLAN = document.body.getAttribute("data-plan") || "Foundation";

const DAILY = {
  date: "1 de maio, 2026",
  text: "Joao Pedro works at a restaurant. Today he is working with Karine and Tayna. They are working together. A client is at table 5. She is from table 6. Is it tomato? No, it is not tomato. The pen is blue and it is here. Joao Pedro is tired today, but he is okay. Are you okay, Joao Pedro? Yes, I am!",
  questions: [
    { question: "Where does Joao Pedro work?", options: [{letter:"a",text:"At a school"},{letter:"b",text:"At a restaurant"},{letter:"c",text:"At a mall"},{letter:"d",text:"At a hospital"},{letter:"e",text:"At home"}], answer:"b" },
    { question: "Who is working with Joao Pedro today?", options: [{letter:"a",text:"Lucas and Isabel"},{letter:"b",text:"Rodrigo and Bella"},{letter:"c",text:"Karine and Tayna"},{letter:"d",text:"Analise only"},{letter:"e",text:"Nobody"}], answer:"c" },
    { question: "Is Joao Pedro okay?", options: [{letter:"a",text:"No, he is not"},{letter:"b",text:"Yes, he is tired but okay"},{letter:"c",text:"He is sick"},{letter:"d",text:"He is very happy"},{letter:"e",text:"The text does not say"}], answer:"b" },
    { question: "What color is the pen?", options: [{letter:"a",text:"Red"},{letter:"b",text:"Green"},{letter:"c",text:"Blue"},{letter:"d",text:"Black"},{letter:"e",text:"Yellow"}], answer:"c" },
    { question: "Is it tomato?", options: [{letter:"a",text:"Yes, it is"},{letter:"b",text:"No, it is not"},{letter:"c",text:"Maybe"},{letter:"d",text:"The text does not say"},{letter:"e",text:"Yes, it is tomato"}], answer:"b" }
  ]
};

const WEEKS = [
  {
    number: 1,
    title: "To Be — Apresentacoes",
    focus: "Se apresentar, falar sobre amigos e familia usando To Be com confianca.",
    pdfs: [], audios: [{label:"Pronuncia — enviado pelo WhatsApp", url:""}], links: [], videos: [],
    exercises: [
      "Escreva 5 frases se apresentando: nome, idade, profissao, cidade e um amigo",
      "Apresente 3 pessoas da sua vida: Rodrigo, Tayna, Isabel",
      "Complete: ___ are friends. / Lucas ___ my boyfriend. / They ___ my sisters."
    ],
    notes: [
      "TO BE = SER ou ESTAR — em ingles e a mesma palavra!",
      "AFIRMATIVA → I am | You are | He is | She is | It is | We are | You are | They are",
      "He is my friend. / Rodrigo is my friend. / We are friends.",
      "Tayna AND I are friends. / Isabel AND Bella are my sisters.",
      "THEY = eles/elas — usado para mais de uma pessoa ou coisa",
      "Karina and Tay are my friends. → They are my friends.",
      "HUSBAND = marido | WIFE = esposa | COUSIN = primo(a)",
      "A = um / uma — usado antes de substantivos: She is a client. / He is a waiter."
    ],
    classwork: [
      {
        title: "Atividade — Complete com To Be",
        instruction: "Complete com am, is ou are.",
        items: [
          {q:"I ___ Joao Pedro.",                    a:"I am Joao Pedro."},
          {q:"Rodrigo ___ my friend.",               a:"Rodrigo is my friend."},
          {q:"We ___ friends.",                      a:"We are friends."},
          {q:"Isabel and Bella ___ my sisters.",     a:"Isabel and Bella are my sisters."},
          {q:"They ___ my sisters.",                 a:"They are my sisters."},
          {q:"Lucas ___ my boyfriend.",              a:"Lucas is my boyfriend."},
          {q:"Tayna and I ___ friends.",             a:"Tayna and I are friends."}
        ]
      }
    ],
    vocabulary: [
      {word:"I am",       translation:"eu sou / eu estou",              phonetic:"/ai am/"},
      {word:"you are",    translation:"voce e / voce esta",             phonetic:"/yu ar/"},
      {word:"he is",      translation:"ele e / ele esta",               phonetic:"/hi iz/"},
      {word:"she is",     translation:"ela e / ela esta",               phonetic:"/shi iz/"},
      {word:"it is",      translation:"a coisa e / esta",               phonetic:"/it iz/"},
      {word:"we are",     translation:"nos somos / estamos",            phonetic:"/wi ar/"},
      {word:"they are",   translation:"eles/elas sao / estao",          phonetic:"/dhei ar/"},
      {word:"friend",     translation:"amigo(a)",                       phonetic:"/frend/"},
      {word:"sister",     translation:"irma",                           phonetic:"/SISter/"},
      {word:"boyfriend",  translation:"namorado",                       phonetic:"/BOIfrend/"},
      {word:"girlfriend", translation:"namorada",                       phonetic:"/GERLfrend/"},
      {word:"husband",    translation:"marido",                         phonetic:"/HAZband/"},
      {word:"wife",       translation:"esposa",                         phonetic:"/waif/"},
      {word:"cousin",     translation:"primo(a)",                       phonetic:"/KAZin/"},
      {word:"a / an",     translation:"um / uma",                       phonetic:"/e/ /an/"},
      {word:"client",     translation:"cliente",                        phonetic:"/KLAIent/"},
      {word:"waitress",   translation:"garconete",                      phonetic:"/WEItres/"}
    ]
  },

  {
    number: 2,
    title: "To Be — Interrogativa",
    focus: "Fazer perguntas com To Be — essencial para o trabalho no restaurante.",
    pdfs: [], audios: [{label:"Pronuncia — enviado pelo WhatsApp", url:""}], links: [], videos: [],
    exercises: [
      "Escreva 5 perguntas sobre pessoas do seu trabalho usando Is/Are",
      "Transforme: 'Lucas is your boyfriend.' / 'She is a client.' / 'It is tomato.'",
      "Responda: Is she your sister? / Are you Brazilian? / Is it to table 5?"
    ],
    notes: [
      "INTERROGATIVA → Am I? | Are you? | Is he? | Is she? | Is it? | Are we? | Are they?",
      "Lucas is my boyfriend. → Is Lucas my boyfriend?",
      "She is your girlfriend. → Is she your girlfriend?",
      "Is she a client? / Is she a waitress? / Is it tomato? / Is it to table 5?",
      "Is she from table 6? — contexto do restaurante!",
      "ARE YOU OKAY? = Voce esta bem? — muito usada no trabalho",
      "Resposta curta → Yes, I am. / No, I am not. / She is. / She isn't.",
      "Are you Brazilian? Yes, I am. / Yes, I'm."
    ],
    classwork: [
      {
        title: "Atividade — Afirmativa para Interrogativa",
        instruction: "Transforme em pergunta.",
        items: [
          {q:"Lucas is your boyfriend.",     a:"Is Lucas your boyfriend?"},
          {q:"Tayna is your girlfriend.",    a:"Is Tayna your girlfriend?"},
          {q:"She is your sister.",          a:"Is she your sister?"},
          {q:"It is tomato.",                a:"Is it tomato?"},
          {q:"It is to table 5.",            a:"Is it to table 5?"},
          {q:"She is from table 6.",         a:"Is she from table 6?"},
          {q:"You are okay.",                a:"Are you okay?"}
        ]
      },
      {
        title: "Atividade — Respostas curtas",
        instruction: "Responda com Yes ou No + resposta curta.",
        items: [
          {q:"Is Bella your sister? (sim)",  a:"Yes, she is."},
          {q:"Are you Brazilian? (sim)",     a:"Yes, I am. / Yes, I'm."},
          {q:"Is she a client? (nao)",       a:"No, she isn't."},
          {q:"Is it tomato? (nao)",          a:"No, it isn't."},
          {q:"Are you okay? (sim)",          a:"Yes, I am. / Yes, I'm okay."}
        ]
      }
    ],
    vocabulary: [
      {word:"is she?",    translation:"ela e? / ela esta?",             phonetic:"/iz shi/"},
      {word:"are you?",   translation:"voce e? / voce esta?",           phonetic:"/ar yu/"},
      {word:"is it?",     translation:"e isso? / esta aqui?",           phonetic:"/iz it/"},
      {word:"yes, I am",  translation:"sim, eu sou / estou",            phonetic:"/ies ai am/"},
      {word:"no, I'm not",translation:"nao, eu nao sou / estou",        phonetic:"/no aim not/"},
      {word:"table",      translation:"mesa",                           phonetic:"/TEIbel/"},
      {word:"tomato",     translation:"tomate",                         phonetic:"/toMEItou/"},
      {word:"okay",       translation:"bem / tudo bem",                 phonetic:"/oKEI/"},
      {word:"tired",      translation:"cansado(a)",                     phonetic:"/TAIerd/"},
      {word:"pretty",     translation:"bonita",                         phonetic:"/PRIti/"},
      {word:"cool",       translation:"legal",                          phonetic:"/kul/"},
      {word:"blue",       translation:"azul",                           phonetic:"/blu/"}
    ]
  },

  {
    number: 3,
    title: "To Be — Negativa + Present Continuous",
    focus: "Negar frases e falar o que esta acontecendo agora — perfeito para o trabalho.",
    pdfs: [], audios: [{label:"Pronuncia — enviado pelo WhatsApp", url:""}], links: [], videos: [],
    exercises: [
      "Escreva 5 negativas sobre situacoes do trabalho usando isn't / aren't",
      "Complete: Karine ___ working. / Are Karine and Tayna ___? / Analise and I ___ working together.",
      "Transforme em negativa: She is working. / They are working. / I am okay."
    ],
    notes: [
      "NEGATIVA → I am not | You aren't | He isn't | She isn't | It isn't | We aren't | They aren't",
      "She isn't working today. / Analise and I are working together.",
      "PRESENT CONTINUOUS = To Be + verbo-ING — acao acontecendo AGORA",
      "Karine is working. → Is Karine working?",
      "Karine and Tay are working. → Are Karine and Tayna working?",
      "She isn't working today. — resposta curta: She isn't.",
      "Analise and I are working together. / Are you working today?",
      "THE = o / a / os / as | The pen is blue. / The cellphones are here."
    ],
    classwork: [
      {
        title: "Atividade — Negativa com contracao",
        instruction: "Reescreva na forma negativa.",
        items: [
          {q:"She is working today.",            a:"She isn't working today."},
          {q:"They are working together.",       a:"They aren't working together."},
          {q:"I am okay.",                       a:"I am not okay. / I'm not okay."},
          {q:"Karine is here.",                  a:"Karine isn't here."},
          {q:"The pen is here.",                 a:"The pen isn't here."}
        ]
      },
      {
        title: "Atividade — Present Continuous",
        instruction: "Complete com To Be + verbo-ING.",
        items: [
          {q:"Karine ___ working. Is Karine ___?",                a:"Karine is working. Is Karine working?"},
          {q:"Karine and Tay ___ working. Are they ___?",         a:"Karine and Tay are working. Are they working?"},
          {q:"Is Analise ___ today? She ___ .",                   a:"Is Analise working today? She isn't."},
          {q:"Analise and I ___ working together.",               a:"Analise and I are working together."},
          {q:"___ you working now?",                              a:"Are you working now?"}
        ]
      }
    ],
    vocabulary: [
      {word:"isn't",         translation:"nao e / nao esta",              phonetic:"/IZnt/"},
      {word:"aren't",        translation:"nao sao / nao estao",           phonetic:"/ARnt/"},
      {word:"working",       translation:"trabalhando",                   phonetic:"/WERking/"},
      {word:"together",      translation:"juntos",                        phonetic:"/tuGEdher/"},
      {word:"today",         translation:"hoje",                          phonetic:"/tuDEI/"},
      {word:"the",           translation:"o / a / os / as",               phonetic:"/dhe/"},
      {word:"cellphone",     translation:"celular",                       phonetic:"/SELfon/"},
      {word:"pen",           translation:"caneta",                        phonetic:"/pen/"},
      {word:"here",          translation:"aqui",                          phonetic:"/hier/"},
      {word:"home",          translation:"em casa",                       phonetic:"/houm/"},
      {word:"at the mall",   translation:"no shopping",                   phonetic:"/at dhe mol/"}
    ]
  },

  {
    number: 4,
    title: "Question Words — Where, When, Why, What, Who, How",
    focus: "Usar as palavras de pergunta para comunicar no trabalho e no dia a dia.",
    pdfs: [], audios: [{label:"Pronuncia — enviado pelo WhatsApp", url:""}], links: [], videos: [],
    exercises: [
      "Escreva uma pergunta com cada palavra: where, when, why, what, who, how",
      "Traduza: Onde voce esta? / Quando voce chega? / Por que voce esta aqui? / Quem e ela?",
      "Complete: ___ is your name? / ___ are you? / ___ is she? / ___ are you like that?"
    ],
    notes: [
      "WHERE = onde | WHERE ARE YOU? = Onde voce esta?",
      "WHEN = quando | WHEN ARE YOU HOME? = Quando voce esta em casa?",
      "WHY = por que | WHY ARE YOU HERE? = Por que voce esta aqui?",
      "WHAT = o que / qual | WHAT IS YOUR NAME? = Qual e o seu nome?",
      "WHO = quem | WHO IS HE? = Quem e ele? / WHO IS SHE? = Quem e ela?",
      "HOW = como | HOW ARE YOU? = Como voce esta?",
      "WHERE IS SHE? / WHO IS SHE? / WHAT IS IT? / WHAT IS WRONG WITH YOU?",
      "WHY ARE YOU LIKE THAT? — expressao do dia a dia muito usada!"
    ],
    classwork: [
      {
        title: "Atividade — Qual palavra de pergunta?",
        instruction: "Complete com: where, when, why, what, who ou how.",
        items: [
          {q:"___ is your name?",             a:"What is your name?"},
          {q:"___ are you? (lugar)",          a:"Where are you?"},
          {q:"___ are you? (estado)",         a:"How are you?"},
          {q:"___ is she?",                   a:"Who is she?"},
          {q:"___ are you here?",             a:"Why are you here?"},
          {q:"___ are you home?",             a:"When are you home?"},
          {q:"___ is wrong with you?",        a:"What is wrong with you?"},
          {q:"___ are you like that?",        a:"Why are you like that?"}
        ]
      },
      {
        title: "Atividade — No restaurante",
        instruction: "Complete as perguntas do contexto do trabalho.",
        items: [
          {q:"___ is she? A client or a waitress?",   a:"Who is she? A client or a waitress?"},
          {q:"___ is she from? Table 5 or table 6?",  a:"Where is she from? Table 5 or table 6?"},
          {q:"___ is it? Is it tomato?",              a:"What is it? Is it tomato?"},
          {q:"___ are you working today?",            a:"Why are you working today?"},
          {q:"___ are Karine and Tayna?",             a:"Where are Karine and Tayna?"}
        ]
      }
    ],
    vocabulary: [
      {word:"where",      translation:"onde",                           phonetic:"/wer/"},
      {word:"when",       translation:"quando",                         phonetic:"/wen/"},
      {word:"why",        translation:"por que",                        phonetic:"/wai/"},
      {word:"what",       translation:"o que / qual",                   phonetic:"/wot/"},
      {word:"who",        translation:"quem",                           phonetic:"/hu/"},
      {word:"how",        translation:"como",                           phonetic:"/hau/"},
      {word:"wrong",      translation:"errado",                         phonetic:"/rong/"},
      {word:"like that",  translation:"assim / desse jeito",            phonetic:"/laik dhat/"},
      {word:"name",       translation:"nome",                           phonetic:"/neim/"},
      {word:"age",        translation:"idade",                          phonetic:"/eidj/"},
      {word:"Brazilian",  translation:"brasileiro(a)",                  phonetic:"/braziLIan/"},
      {word:"restaurant", translation:"restaurante",                    phonetic:"/REStorant/"}
    ]
  }
];

var CW_ANSWERS = {};

function openDaily() {
  var overlay=document.getElementById("dailyOverlay");
  var body=document.getElementById("dailyBody");
  var dateEl=document.getElementById("dailyDate");
  dateEl.textContent=DAILY.date;
  if(PLAN!=="Fluency"){
    body.innerHTML='<div class="daily-locked"><span class="daily-lock-icon">🔒</span><h3>Conteudo Fluency</h3><p>O Daily Content e exclusivo para alunos do plano <strong>Fluency</strong>.</p><p>Fale com a Yas para fazer o upgrade! ✦</p></div>';
  } else {
    var html='<div class="daily-text-wrap"><h3 class="res-title">Texto de hoje</h3><div class="daily-text">'+DAILY.text+'</div></div><div class="daily-questions-wrap"><h3 class="res-title" style="margin-top:24px">Exercicios</h3><div class="daily-questions">';
    DAILY.questions.forEach(function(q,qi){
      html+='<div class="daily-q" id="q'+qi+'"><p class="daily-q-text"><strong>'+(qi+1)+'.</strong> '+q.question+'</p><div class="daily-options">';
      q.options.forEach(function(opt){html+='<button class="daily-opt" id="q'+qi+'-'+opt.letter+'" onclick="checkAnswer('+qi+',\''+opt.letter+'\',\''+q.answer+'\')"><span class="opt-letter">'+opt.letter+'</span><span class="opt-text">'+opt.text+'</span></button>';});
      html+='</div><p class="daily-feedback" id="feedback'+qi+'"></p></div>';
    });
    html+='</div><div class="daily-action-btns"><button class="daily-reset-btn" onclick="openDaily()">Recomecar ↺</button><button class="daily-back-btn" onclick="closeDaily()">Voltar ao menu ←</button></div></div>';
    body.innerHTML=html;
  }
  overlay.classList.add("open");
  document.body.style.overflow="hidden";
}

function checkAnswer(qi,chosen,correct){
  var opts=document.querySelectorAll("#q"+qi+" .daily-opt");
  opts.forEach(function(b){b.disabled=true;});
  document.getElementById("q"+qi+"-"+chosen).classList.add(chosen===correct?"correct":"wrong");
  if(chosen!==correct)document.getElementById("q"+qi+"-"+correct).classList.add("correct");
  var fb=document.getElementById("feedback"+qi);
  if(chosen===correct){fb.textContent="✦ Correct!";fb.className="daily-feedback feedback-correct";}
  else{fb.textContent="The correct answer is "+correct.toUpperCase()+".";fb.className="daily-feedback feedback-wrong";}
}

function closeDaily(){document.getElementById("dailyOverlay").classList.remove("open");document.body.style.overflow="";}
document.getElementById("dailyOverlay").addEventListener("click",function(e){if(e.target===this)closeDaily();});

function speakWord(word,btn){
  if(!window.speechSynthesis)return;
  window.speechSynthesis.cancel();
  var u=new SpeechSynthesisUtterance(word);u.lang="en-US";u.rate=0.85;
  if(btn){btn.classList.add("speaking");u.onend=function(){btn.classList.remove("speaking");};u.onerror=function(){btn.classList.remove("speaking");};}
  window.speechSynthesis.speak(u);
}

function hasContent(arr){return Array.isArray(arr)&&arr.filter(function(i){return i&&i.label;}).length>0;}

function renderGrid(){
  var grid=document.getElementById("weeksGrid");var html="";
  WEEKS.forEach(function(w,i){
    var icons="";
    if(hasContent(w.pdfs))icons+='<span class="ricon ricon-pdf">P</span>';
    if(hasContent(w.audios))icons+='<span class="ricon ricon-audio">A</span>';
    if(hasContent(w.exercises))icons+='<span class="ricon ricon-exercise">E</span>';
    if(hasContent(w.links))icons+='<span class="ricon ricon-link">L</span>';
    if(hasContent(w.videos))icons+='<span class="ricon ricon-video">V</span>';
    if(w.vocabulary&&w.vocabulary.length)icons+='<span class="ricon ricon-vocab">W</span>';
    html+='<article class="week-card" onclick="openModal('+i+')" tabindex="0"><div class="card-head"><p class="card-number">Semana '+w.number+'</p><h2 class="card-title">'+w.title+'</h2></div><div class="card-body"><div class="card-icons">'+icons+'</div><div class="card-cta"><span>Ver material</span><span class="card-cta-arrow">→</span></div></div></article>';
  });
  grid.innerHTML=html;
}

function openModal(index){
  var w=WEEKS[index];
  document.getElementById("modalWeekLabel").textContent="Semana "+w.number;
  document.getElementById("modalTitle").textContent=w.title;
  document.getElementById("modalFocus").textContent=w.focus||"";
  document.getElementById("modalBody").innerHTML=
    renderPdfs(w.pdfs)+renderExercises(w.exercises)+renderAudios(w.audios)+
    renderLinks(w.links)+renderVideos(w.videos)+renderNotes(w.notes)+
    renderClasswork(w.classwork)+renderVocabulary(w.vocabulary)+
    '<div class="yas-tip"><strong>Dica da YV</strong>Pratique todos os dias um pouco. Consistencia e o que te leva a fluencia. ✦</div>';
  document.getElementById("overlay").classList.add("open");
  document.body.style.overflow="hidden";
}

function closeModal(){if(window.speechSynthesis)window.speechSynthesis.cancel();document.getElementById("overlay").classList.remove("open");document.body.style.overflow="";}

function renderPdfs(p){var items=(p||[]).filter(function(x){return x.label;});if(!items.length)return"";var h='<div class="resource-section"><h3 class="res-title">PDFs</h3><div class="res-list">';items.forEach(function(x){h+='<div class="res-item"><span class="res-item-label">'+x.label+'</span><div class="res-actions"><a href="'+x.url+'" target="_blank" class="btn-open">Abrir ↗</a><a href="'+x.url+'" download class="btn-download">Baixar</a></div></div>';});return h+'</div></div>';}
function renderExercises(e){var items=(e||[]).filter(Boolean);if(!items.length)return"";var h='<div class="resource-section"><h3 class="res-title">Exercicios</h3><ul class="exercise-list">';items.forEach(function(x){h+='<li>'+x+'</li>';});return h+'</ul></div>';}
function renderAudios(a){var items=(a||[]).filter(function(x){return x.label;});if(!items.length)return"";var h='<div class="resource-section"><h3 class="res-title">Audios</h3><div class="res-list">';items.forEach(function(x){if(x.url){h+='<div class="res-item audio-item"><span class="res-item-label">'+x.label+'</span><audio controls preload="none"><source src="'+x.url+'"></audio></div>';}else{h+='<div class="res-item"><span class="res-item-label">'+x.label+'</span><span class="via-whatsapp">via WhatsApp</span></div>';}});return h+'</div></div>';}
function renderLinks(l){var items=(l||[]).filter(function(x){return x.label;});if(!items.length)return"";var h='<div class="resource-section"><h3 class="res-title">Links</h3><div class="res-list">';items.forEach(function(x){h+='<div class="res-item"><span class="res-item-label">'+x.label+'</span><div class="res-actions"><a href="'+x.url+'" target="_blank" class="btn-open">Abrir ↗</a></div></div>';});return h+'</div></div>';}
function renderVideos(v){var items=(v||[]).filter(function(x){return x.label;});if(!items.length)return"";var h='<div class="resource-section"><h3 class="res-title">Videos</h3><div class="res-list">';items.forEach(function(x){h+='<div class="res-item"><span class="res-item-label">'+x.label+'</span><div class="res-actions"><a href="'+x.url+'" target="_blank" class="btn-open">Assistir ↗</a></div></div>';});return h+'</div></div>';}
function renderNotes(n){var items=(n||[]).filter(Boolean);if(!items.length)return"";var h='<div class="resource-section"><h3 class="res-title">Notas da Aula</h3><ul class="notes-list">';items.forEach(function(x){h+='<li>'+x+'</li>';});return h+'</ul></div>';}

function renderClasswork(classwork){
  var sections=(classwork||[]).filter(function(s){return s.title;});if(!sections.length)return"";
  var html="";
  sections.forEach(function(section,si){
    html+='<div class="resource-section"><h3 class="res-title">'+section.title+'</h3><p class="classwork-instruction">'+section.instruction+'</p><div class="classwork-list">';
    section.items.forEach(function(item,ii){
      var key="cw_"+si+"_"+ii;CW_ANSWERS[key]=item.a;
      html+='<div class="classwork-item"><p class="classwork-q"><strong>'+(ii+1)+'.</strong> '+item.q+'</p><button class="classwork-reveal-btn" onclick="revealAnswer(this,\''+key+'\')">Ver resposta</button><p class="classwork-answer" id="'+key+'" style="display:none"></p></div>';
    });
    html+='</div></div>';
  });
  return html;
}

function revealAnswer(btn,key){var el=document.getElementById(key);if(el){el.textContent=CW_ANSWERS[key]||"";el.style.display="block";}btn.style.display="none";}

function renderVocabulary(vocabulary){
  var items=(vocabulary||[]).filter(function(v){return v.word;});if(!items.length)return"";
  window._vocabWords=[];
  var html='<div class="resource-section"><h3 class="res-title">Vocabulario</h3><div class="vocab-grid">';
  items.forEach(function(v,i){
    window._vocabWords[i]=v.word;
    html+='<div class="vocab-card" tabindex="0" onclick="this.classList.toggle(\'flipped\')"><div class="vocab-front"><button class="vocab-speak-btn" onclick="event.stopPropagation();speakVocab('+i+',this)" title="Ouvir">🔊</button><div class="vocab-front-inner"><span class="vocab-word">'+v.word+'</span>'+(v.phonetic?'<span class="vocab-phonetic">'+v.phonetic+'</span>':'')+'</div><span class="vocab-hint">toque para ver</span></div><div class="vocab-back"><span class="vocab-translation">'+v.translation+'</span></div></div>';
  });
  return html+'</div></div>';
}

function speakVocab(i,btn){if(window._vocabWords&&window._vocabWords[i])speakWord(window._vocabWords[i],btn);}

function buildGlossaryHTML(){
  var all=[];
  WEEKS.forEach(function(w){(w.vocabulary||[]).filter(function(v){return v.word;}).forEach(function(v){all.push({word:v.word,translation:v.translation,phonetic:v.phonetic,week:w.number});});});
  if(!all.length)return'<p class="glossary-empty">O glossario vai aparecer aqui conforme as semanas forem avancando. ✦</p>';
  window._glossWords=[];var html="";
  all.forEach(function(v,i){
    window._glossWords[i]=v.word;
    html+='<div class="glossary-row"><span class="glos-word">'+v.word+'</span><span class="glos-trans">'+v.translation+(v.phonetic?' <span class="glos-phonetic">'+v.phonetic+'</span>':'')+'</span><button class="glos-speak" onclick="speakGloss('+i+',this)" title="Ouvir">🔊</button><span class="glos-week-badge">Sem. '+v.week+'</span></div>';
  });
  return html;
}

function speakGloss(i,btn){if(window._glossWords&&window._glossWords[i])speakWord(window._glossWords[i],btn);}

var glossaryOpen=false;
function toggleGlossary(){
  var section=document.getElementById("glossarySection");
  var cta=document.getElementById("glossaryBtnCta");
  if(!section)return;
  glossaryOpen=!glossaryOpen;
  if(glossaryOpen){if(!section.innerHTML.trim())section.innerHTML=buildGlossaryHTML();section.style.display="block";if(cta)cta.textContent="Fechar ↑";setTimeout(function(){section.scrollIntoView({behavior:"smooth",block:"start"});},80);}
  else{section.style.display="none";if(cta)cta.textContent="Ver palavras →";}
}

function renderGlossary(){}

document.getElementById("overlay").addEventListener("click",function(e){if(e.target===this)closeModal();});
document.addEventListener("keydown",function(e){if(e.key==="Escape")closeModal();});
var touchStartY=0;
document.addEventListener("touchstart",function(e){touchStartY=e.touches[0].clientY;},{passive:true});
document.addEventListener("touchmove",function(e){if(document.getElementById("overlay").classList.contains("open")){if(e.touches[0].clientY-touchStartY>100)closeModal();}},{passive:true});

renderGrid();
renderGlossary();
