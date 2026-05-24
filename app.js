// ══ ESTADO ══════════════════════════════════
let E=10, T=10, character='daylen', step=0, decisions=0;
let timerInt=null, timerSec=15;
let pendingCollapse=false;
const TCIRC=169.6, TTOTAL=15;

// ══ ESCENAS SVG ══════════════════════════════
const SCENE={
kitchen:`<svg viewBox="0 0 390 605" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
<rect width="390" height="605" fill="#E8D8B8"/>
<rect y="340" width="390" height="265" fill="#C8B890"/>
<rect y="332" width="390" height="14" fill="#B8A880"/>
<line x1="0" y1="372" x2="390" y2="372" stroke="rgba(0,0,0,.045)" stroke-width="1"/>
<line x1="0" y1="412" x2="390" y2="412" stroke="rgba(0,0,0,.045)" stroke-width="1"/>
<line x1="0" y1="452" x2="390" y2="452" stroke="rgba(0,0,0,.045)" stroke-width="1"/>
<line x1="78" y1="332" x2="78" y2="605" stroke="rgba(0,0,0,.04)" stroke-width="1"/>
<line x1="156" y1="332" x2="156" y2="605" stroke="rgba(0,0,0,.04)" stroke-width="1"/>
<line x1="234" y1="332" x2="234" y2="605" stroke="rgba(0,0,0,.04)" stroke-width="1"/>
<line x1="312" y1="332" x2="312" y2="605" stroke="rgba(0,0,0,.04)" stroke-width="1"/>
<rect x="10" y="155" width="285" height="11" fill="#A87840" rx="2"/>
<rect x="22" y="120" width="38" height="37" fill="#C89050" rx="4"/>
<rect x="26" y="116" width="30" height="6" fill="#B07840" rx="2"/>
<ellipse cx="90" cy="138" rx="22" ry="17" fill="#7090A8"/>
<ellipse cx="90" cy="123" rx="14" ry="7" fill="#6080A0"/>
<rect x="120" y="122" width="28" height="34" fill="#D4A040" rx="3"/>
<rect x="160" y="118" width="24" height="38" fill="#80A860" rx="3"/>
<rect x="196" y="125" width="20" height="31" fill="#C05040" rx="3"/>
<rect x="228" y="120" width="26" height="36" fill="#8070A0" rx="3"/>
<line x1="195" y1="0" x2="195" y2="62" stroke="#7A6040" stroke-width="2.5"/>
<line x1="168" y1="62" x2="222" y2="62" stroke="#7A6040" stroke-width="2"/>
<ellipse cx="195" cy="90" rx="38" ry="30" fill="#C06030"/>
<ellipse cx="195" cy="68" rx="14" ry="9" fill="#A04820"/>
<ellipse cx="195" cy="88" rx="14" ry="10" fill="#FFE890" opacity=".9"/>
<circle cx="195" cy="84" r="6" fill="#FFF5B0" opacity=".95"/>
<ellipse cx="195" cy="320" rx="80" ry="20" fill="rgba(255,240,100,.07)"/>
<rect x="30" y="325" width="320" height="75" fill="#C8A070" rx="6"/>
<rect x="30" y="322" width="320" height="14" fill="#D8B080" rx="3"/>
<rect x="38" y="340" width="70" height="52" fill="#B89060" rx="3"/>
<circle cx="73" cy="366" r="6" fill="#C0A060"/>
<rect x="120" y="340" width="70" height="52" fill="#B89060" rx="3"/>
<circle cx="155" cy="366" r="6" fill="#C0A060"/>
<rect x="202" y="340" width="70" height="52" fill="#B89060" rx="3"/>
<circle cx="237" cy="366" r="6" fill="#C0A060"/>
<rect x="140" y="294" width="130" height="40" fill="#888070" rx="4"/>
<ellipse cx="168" cy="284" rx="20" ry="7" fill="#686058"/>
<ellipse cx="232" cy="284" rx="20" ry="7" fill="#686058"/>
<ellipse cx="168" cy="282" rx="14" ry="5" fill="#504840"/>
<ellipse cx="232" cy="282" rx="14" ry="5" fill="#504840"/>
<rect x="155" y="262" width="80" height="30" fill="#C06030" rx="4"/>
<ellipse cx="195" cy="263" rx="38" ry="10" fill="#D07040"/>
<ellipse cx="195" cy="290" rx="38" ry="10" fill="#B05020"/>
<rect x="136" y="268" width="22" height="10" fill="#A05020" rx="3"/>
<rect x="232" y="268" width="22" height="10" fill="#A05020" rx="3"/>
<path d="M178,260 Q172,240 178,225 Q184,210 178,195" fill="none" stroke="rgba(255,255,255,.5)" stroke-width="3" stroke-linecap="round"/>
<path d="M192,258 Q198,238 192,223 Q186,208 192,193" fill="none" stroke="rgba(255,255,255,.4)" stroke-width="2.5" stroke-linecap="round"/>
<path d="M206,260 Q212,240 206,225 Q200,210 206,195" fill="none" stroke="rgba(255,255,255,.4)" stroke-width="2.5" stroke-linecap="round"/>
<rect x="320" y="296" width="24" height="36" fill="#9A6040" rx="3"/>
<rect x="316" y="293" width="32" height="8" fill="#B07850" rx="2"/>
<ellipse cx="332" cy="288" rx="28" ry="20" fill="#5A8830"/>
<ellipse cx="320" cy="278" rx="14" ry="11" fill="#4A7820"/>
<ellipse cx="344" cy="276" rx="12" ry="9" fill="#4A7820"/>
<ellipse cx="195" cy="490" rx="42" ry="24" fill="#4A7840"/>
<rect x="162" y="446" width="66" height="55" fill="#5A9050" rx="4"/>
<rect x="176" y="430" width="38" height="22" fill="#6AAA60" rx="3"/>
<ellipse cx="195" cy="420" rx="30" ry="34" fill="#C89068"/>
<ellipse cx="195" cy="390" rx="26" ry="20" fill="#231510"/>
<circle cx="195" cy="380" r="16" fill="#231510"/>
<circle cx="210" cy="383" r="10" fill="#2E1C12"/>
<ellipse cx="185" cy="418" rx="4" ry="4.5" fill="#1A1008"/>
<ellipse cx="205" cy="418" rx="4" ry="4.5" fill="#1A1008"/>
<path d="M187,432 Q195,440 203,432" fill="none" stroke="#9A5040" stroke-width="2" stroke-linecap="round"/>
<ellipse cx="178" cy="425" rx="9" ry="6" fill="rgba(220,100,80,.18)"/>
<ellipse cx="212" cy="425" rx="9" ry="6" fill="rgba(220,100,80,.18)"/>
<line x1="222" y1="452" x2="258" y2="448" stroke="#C89068" stroke-width="11" stroke-linecap="round"/>
<line x1="255" y1="446" x2="255" y2="410" stroke="#888" stroke-width="3"/>
<ellipse cx="255" cy="407" rx="8" ry="5" fill="#A08060"/>
<line x1="168" y1="452" x2="140" y2="464" stroke="#C89068" stroke-width="11" stroke-linecap="round"/>
<ellipse cx="195" cy="510" rx="50" ry="10" fill="rgba(0,0,0,.07)"/>
</svg>`,

living:`<svg viewBox="0 0 390 605" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
<rect width="390" height="605" fill="#D8CCA8"/>
<rect y="360" width="390" height="245" fill="#C8B888"/>
<rect y="352" width="390" height="14" fill="#B8A878"/>
<line x1="0" y1="387" x2="390" y2="387" stroke="rgba(0,0,0,.045)" stroke-width="1"/>
<line x1="0" y1="422" x2="390" y2="422" stroke="rgba(0,0,0,.045)" stroke-width="1"/>
<rect x="258" y="50" width="122" height="162" fill="#C0D8E8" rx="5"/>
<line x1="258" y1="50" x2="258" y2="212" stroke="#90B8CC" stroke-width="1.5"/>
<line x1="319" y1="50" x2="319" y2="212" stroke="#90B8CC" stroke-width="1.5"/>
<line x1="258" y1="131" x2="380" y2="131" stroke="#90B8CC" stroke-width="1.5"/>
<rect x="258" y="50" width="122" height="162" fill="rgba(255,240,160,.08)" rx="5"/>
<rect x="259" y="51" width="59" height="79" fill="rgba(255,240,180,.18)"/>
<path d="M250,44 Q268,90 250,136 Q262,164 250,212" fill="#D4A890" stroke="#C09870" stroke-width="1.2"/>
<path d="M388,44 Q372,90 388,136 Q376,164 388,212" fill="#D4A890" stroke="#C09870" stroke-width="1.2"/>
<circle cx="98" cy="108" r="42" fill="#F5EAD8" stroke="#C09860" stroke-width="3.5"/>
<circle cx="98" cy="108" r="38" fill="#F8EFE0" stroke="#D4B880" stroke-width="1"/>
<line x1="98" y1="108" x2="98" y2="78" stroke="#303030" stroke-width="2.5" stroke-linecap="round"/>
<line x1="98" y1="108" x2="118" y2="116" stroke="#303030" stroke-width="2" stroke-linecap="round"/>
<circle cx="98" cy="108" r="4" fill="#606060"/>
<rect x="8" y="60" width="70" height="185" fill="#A87840" rx="3"/>
<rect x="12" y="66" width="18" height="70" fill="#E07050" rx="1"/>
<rect x="32" y="72" width="14" height="64" fill="#5080C0" rx="1"/>
<rect x="48" y="68" width="20" height="68" fill="#60A050" rx="1"/>
<rect x="12" y="144" width="22" height="75" fill="#D4A030" rx="1"/>
<rect x="36" y="150" width="16" height="69" fill="#8050C0" rx="1"/>
<rect x="54" y="146" width="18" height="73" fill="#C05040" rx="1"/>
<rect x="6" y="242" width="74" height="8" fill="#906830" rx="1"/>
<rect x="60" y="300" width="260" height="75" fill="#8870A8" rx="12"/>
<rect x="60" y="268" width="260" height="44" fill="#9880B8" rx="8"/>
<rect x="56" y="264" width="38" height="104" fill="#8066A0" rx="10"/>
<rect x="288" y="264" width="38" height="104" fill="#8066A0" rx="10"/>
<ellipse cx="150" cy="280" rx="36" ry="16" fill="#D4A090" opacity=".82"/>
<ellipse cx="240" cy="280" rx="36" ry="16" fill="#A0B4D8" opacity=".82"/>
<path d="M155,268 Q190,278 225,268 Q230,290 225,298 Q190,308 155,298 Z" fill="rgba(220,200,160,.38)"/>
<ellipse cx="190" cy="372" rx="138" ry="35" fill="rgba(180,150,100,.38)"/>
<ellipse cx="190" cy="372" rx="118" ry="26" fill="rgba(180,140,90,.28)"/>
<rect x="310" y="295" width="64" height="68" fill="#C09060" rx="6"/>
<rect x="306" y="289" width="72" height="16" fill="#D4A870" rx="4"/>
<path d="M318,289 Q328,269 338,289" fill="#4A7090"/>
<path d="M340,289 Q350,267 360,289" fill="#C04040"/>
<ellipse cx="163" cy="356" rx="22" ry="14" fill="#5A80A8"/>
<rect x="146" y="330" width="42" height="35" fill="#6A90B8" rx="3"/>
<ellipse cx="165" cy="311" rx="21" ry="23" fill="#C89068"/>
<ellipse cx="165" cy="291" rx="23" ry="17" fill="#1A1008"/>
<rect x="145" y="296" width="9" height="26" fill="#1A1008" rx="4"/>
<rect x="187" y="296" width="9" height="22" fill="#1A1008" rx="4"/>
<ellipse cx="165" cy="290" rx="21" ry="10" fill="#231510"/>
<ellipse cx="171" cy="308" rx="3" ry="3.5" fill="#1A1008"/>
<ellipse cx="159" cy="308" rx="3" ry="3.5" fill="#1A1008"/>
<path d="M160,322 Q166,326 172,322" fill="none" stroke="#9A5040" stroke-width="1.5" stroke-linecap="round"/>
<ellipse cx="153" cy="315" rx="7" ry="5" fill="rgba(220,120,100,.18)"/>
<ellipse cx="177" cy="315" rx="7" ry="5" fill="rgba(220,120,100,.18)"/>
<line x1="178" y1="334" x2="196" y2="328" stroke="#C89068" stroke-width="8" stroke-linecap="round"/>
<rect x="194" y="316" width="28" height="18" fill="#4A7090" rx="2" transform="rotate(-8 208 325)"/>
<circle cx="278" cy="352" r="16" fill="#C89070"/>
<ellipse cx="278" cy="337" rx="14" ry="9" fill="#2A1A10"/>
<ellipse cx="278" cy="365" rx="16" ry="11" fill="#6090C0"/>
<rect x="256" y="385" rx="3" width="20" height="20" fill="#E07030"/>
<rect x="280" y="383" rx="3" width="20" height="20" fill="#3090D0"/>
<rect x="303" y="387" rx="3" width="18" height="18" fill="#50A050"/>
<rect x="180" y="388" width="58" height="42" fill="#F8F0E0" rx="2" transform="rotate(-5 209 409)"/>
<line x1="183" y1="402" x2="232" y2="397" stroke="#D0C0A0" stroke-width="1"/>
<line x1="183" y1="413" x2="232" y2="408" stroke="#D0C0A0" stroke-width="1"/>
</svg>`,

study:`<svg viewBox="0 0 390 605" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
<rect width="390" height="605" fill="#D4C8A8"/>
<rect y="345" width="390" height="260" fill="#C8B888"/>
<rect y="337" width="390" height="14" fill="#B8A878"/>
<rect y="0" width="390" height="345" fill="#DDD0B0"/>
<rect x="250" y="40" width="100" height="180" fill="rgba(255,240,160,.16)" rx="3"/>
<rect x="256" y="44" width="92" height="174" fill="#B8D8E0" rx="4"/>
<line x1="256" y1="44" x2="256" y2="218" stroke="#90B0C0" stroke-width="1.5"/>
<line x1="302" y1="44" x2="302" y2="218" stroke="#90B0C0" stroke-width="1.5"/>
<line x1="256" y1="131" x2="348" y2="131" stroke="#90B0C0" stroke-width="1.5"/>
<rect x="257" y="45" width="44" height="85" fill="rgba(255,240,180,.22)"/>
<path d="M248,38 Q264,80 248,122 Q258,150 248,218" fill="rgba(210,175,140,.72)" stroke="#C09878" stroke-width="1"/>
<rect x="28" y="38" width="65" height="80" fill="#F0E8D8" rx="3"/>
<rect x="108" y="42" width="60" height="72" fill="#F0E8D8" rx="3"/>
<rect x="108" y="48" width="56" height="65" fill="#E8D8C0" rx="2"/>
<rect x="108" y="42" width="10" height="100" fill="#9A7850" rx="3"/>
<rect x="98" y="400" width="10" height="18" fill="#C09060" rx="2"/>
<line x1="113" y1="318" x2="155" y2="274" stroke="#9A7850" stroke-width="4" stroke-linecap="round"/>
<ellipse cx="165" cy="262" rx="30" ry="15" fill="#D4A030" transform="rotate(25 165 262)"/>
<ellipse cx="157" cy="269" rx="12" ry="7" fill="#FFE050" opacity=".9" transform="rotate(25 157 269)"/>
<rect x="14" y="320" width="340" height="20" fill="#C89860" rx="4"/>
<rect x="18" y="340" width="18" height="100" fill="#A87840" rx="3"/>
<rect x="336" y="340" width="18" height="100" fill="#A87840" rx="3"/>
<rect x="30" y="282" width="32" height="42" fill="#6080A0" rx="4"/>
<rect x="28" y="278" width="36" height="8" fill="#4A6888" rx="2"/>
<line x1="38" y1="278" x2="34" y2="250" stroke="#2A2010" stroke-width="2.5" stroke-linecap="round"/>
<line x1="46" y1="278" x2="48" y2="246" stroke="#E07030" stroke-width="2.5" stroke-linecap="round"/>
<line x1="54" y1="278" x2="56" y2="248" stroke="#4A9030" stroke-width="2.5" stroke-linecap="round"/>
<rect x="276" y="280" width="72" height="15" fill="#E07050" rx="2"/>
<rect x="278" y="264" width="68" height="15" fill="#5080C0" rx="2"/>
<rect x="274" y="248" width="76" height="15" fill="#60A050" rx="2"/>
<rect x="280" y="232" width="64" height="15" fill="#D4A030" rx="2"/>
<rect x="90" y="272" width="175" height="54" fill="#F8F2E4" rx="4"/>
<line x1="177" y1="272" x2="177" y2="326" stroke="#D0C0A0" stroke-width="2"/>
<line x1="94" y1="292" x2="173" y2="292" stroke="#E0D0B8" stroke-width="1"/>
<line x1="94" y1="305" x2="173" y2="305" stroke="#E0D0B8" stroke-width="1"/>
<line x1="181" y1="290" x2="261" y2="290" stroke="#E0D0B8" stroke-width="1"/>
<line x1="181" y1="303" x2="261" y2="303" stroke="#E0D0B8" stroke-width="1"/>
<ellipse cx="213" cy="480" rx="34" ry="20" fill="#5A80A8"/>
<rect x="186" y="448" width="54" height="42" fill="#6A90B8" rx="4"/>
<ellipse cx="213" cy="428" rx="26" ry="28" fill="#C89068"/>
<ellipse cx="213" cy="404" rx="28" ry="20" fill="#1A1008"/>
<rect x="188" y="408" width="10" height="30" fill="#1A1008" rx="5"/>
<rect x="223" y="408" width="10" height="28" fill="#1A1008" rx="5"/>
<ellipse cx="213" cy="403" rx="26" ry="12" fill="#231510"/>
<path d="M203,426 Q207,432 211,426" fill="rgba(196,136,104,.6)" stroke="#1A1008" stroke-width="1.5"/>
<path d="M215,426 Q219,432 223,426" fill="rgba(196,136,104,.6)" stroke="#1A1008" stroke-width="1.5"/>
<path d="M205,440 Q213,437 221,440" fill="none" stroke="#9A5040" stroke-width="1.5" stroke-linecap="round"/>
<ellipse cx="200" cy="432" rx="8" ry="5" fill="rgba(220,100,80,.16)"/>
<ellipse cx="226" cy="432" rx="8" ry="5" fill="rgba(220,100,80,.16)"/>
<line x1="228" y1="450" x2="243" y2="440" stroke="#C89068" stroke-width="9" stroke-linecap="round"/>
<ellipse cx="246" cy="438" rx="8" ry="6.5" fill="#C89068"/>
<line x1="186" y1="454" x2="160" y2="460" stroke="#C89068" stroke-width="9" stroke-linecap="round"/>
<line x1="163" y1="458" x2="148" y2="420" stroke="#E07030" stroke-width="2.5" stroke-linecap="round"/>
</svg>`,

overwhelmed:`<svg viewBox="0 0 390 605" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
<rect width="390" height="605" fill="#C8BCA0"/>
<rect y="330" width="390" height="275" fill="#B8AA88"/>
<rect y="322" width="390" height="14" fill="#A89A78"/>
<rect y="0" width="390" height="330" fill="#D8C8A8"/>
<rect x="38" y="42" width="70" height="55" fill="#F0E8D8" rx="2" transform="rotate(5 73 69)"/>
<rect x="158" y="34" width="55" height="44" fill="#E8DDD0" rx="2" transform="rotate(-4 185 56)"/>
<ellipse cx="60" cy="300" rx="40" ry="12" fill="#D0C080"/>
<ellipse cx="60" cy="288" rx="34" ry="11" fill="#E0D090"/>
<ellipse cx="60" cy="276" rx="28" ry="10" fill="#D8C888"/>
<ellipse cx="60" cy="268" rx="28" ry="9" fill="#8A7050"/>
<line x1="84" y1="270" x2="120" y2="258" stroke="#7A6040" stroke-width="5" stroke-linecap="round"/>
<rect x="106" y="279" width="22" height="28" fill="#A88060" rx="3"/>
<rect x="104" y="276" width="26" height="8" fill="#B89070" rx="2"/>
<rect x="222" y="268" width="60" height="44" fill="#F0EAD8" rx="1" transform="rotate(14 252 290)"/>
<rect x="258" y="286" width="60" height="44" fill="#F8F2E4" rx="1" transform="rotate(-9 288 308)"/>
<rect x="196" y="310" width="60" height="44" fill="#F0E8D4" rx="1" transform="rotate(6 226 332)"/>
<path d="M108,350 Q138,325 173,355 Q193,340 218,360" fill="#6090B0" stroke="#5080A0" stroke-width="2"/>
<path d="M128,365 Q153,345 176,370" fill="#C04060" stroke="#B03050" stroke-width="2"/>
<path d="M288,365 Q313,343 336,370" fill="#80A040" stroke="#6A9030" stroke-width="2"/>
<circle cx="258" cy="340" r="12" fill="#E07030" opacity=".8"/>
<rect x="293" y="330" width="22" height="18" fill="#3090D0" rx="2" opacity=".8"/>
<circle cx="318" cy="350" r="9" fill="#D0A030" opacity=".8"/>
<ellipse cx="195" cy="490" rx="36" ry="20" fill="#5A8040"/>
<rect x="168" y="458" width="54" height="42" fill="#6A9050" rx="4"/>
<ellipse cx="195" cy="438" rx="28" ry="30" fill="#C89068"/>
<ellipse cx="195" cy="412" rx="30" ry="22" fill="#2A1810"/>
<circle cx="195" cy="402" r="14" fill="#2A1810"/>
<path d="M163,416 Q153,400 160,390" fill="none" stroke="#2A1810" stroke-width="8" stroke-linecap="round"/>
<path d="M227,416 Q237,400 230,390" fill="none" stroke="#2A1810" stroke-width="8" stroke-linecap="round"/>
<path d="M180,410 Q176,396 182,386" fill="none" stroke="#2A1810" stroke-width="5" stroke-linecap="round"/>
<path d="M210,410 Q214,396 208,386" fill="none" stroke="#2A1810" stroke-width="5" stroke-linecap="round"/>
<path d="M181,436 Q185,442 189,436" fill="#C89068" stroke="#1A1008" stroke-width="1.5"/>
<path d="M201,436 Q205,442 209,436" fill="#C89068" stroke="#1A1008" stroke-width="1.5"/>
<path d="M183,450 Q195,447 207,450" fill="none" stroke="#9A5040" stroke-width="1.5" stroke-linecap="round"/>
<path d="M218,418 Q222,406 218,398" fill="rgba(160,200,240,.68)" stroke="rgba(100,150,200,.5)" stroke-width=".8"/>
<path d="M225,424 Q230,412 226,404" fill="rgba(160,200,240,.55)" stroke="rgba(100,150,200,.4)" stroke-width=".8"/>
<line x1="168" y1="464" x2="138" y2="496" stroke="#C89068" stroke-width="11" stroke-linecap="round"/>
<line x1="222" y1="464" x2="252" y2="496" stroke="#C89068" stroke-width="11" stroke-linecap="round"/>
</svg>`
};

// ══ NARRATIVA ══════════════════════════════
const STORY={
daylen:[
  {scene:'kitchen',type:'narr',text:'Son las 6:00 a.m. en una casa del barrio La Nevada.\nLa cocina ya está en movimiento.\nHay desayuno por hacer, niños por alistar y una casa que organizar.'},
  {scene:'kitchen',type:'narr',text:'Eres Daylen, madre soltera de 3 hijos.\nDebes encargarte del hogar antes de ir a trabajar.\nCada minuto cuenta. Cada tarea implica desgaste.'},
  {scene:'kitchen',type:'event',text:'Preparas el desayuno mientras organizas la casa. Todo ocurre al mismo tiempo.',icon:'🍳',badge:'MAÑANA EN MOVIMIENTO',badgeColor:'#FFF0E0',ec:2,tc:2,iconBg:'#DA9468'},
  {scene:'kitchen',type:'choice',q:'¿Qué decides hacer\nantes de salir?',opts:[
    {label:'Salir rápido',sub:'Sin terminar todo',scene:'overwhelmed',result:'sales_fast'},
    {label:'Organizar todo',sub:'Antes de irte',scene:'kitchen',result:'stay_long'}
  ]},
  {scene:'overwhelmed',type:'narr',text:'Ya es tarde y debes ir a trabajar.\nLas tareas del hogar quedan a medias.'},
  {scene:'overwhelmed',type:'event',text:'Al volver a casa, encuentras tareas sin hacer y los niños inquietos. El trabajo doméstico no se detiene.',icon:'🏠',badge:'DE VUELTA A CASA',badgeColor:'#F0F0F0',ec:3,tc:2,iconBg:'#7A9060'},
],
ana:[
  {scene:'living',type:'narr',text:'Tu mamá sale a trabajar y te quedas a cargo de tus hermanos y de algunas tareas del hogar.'},
  {scene:'living',type:'narr',text:'Eres Ana, la hija mayor.\nAunque tienes responsabilidades escolares, también debes ayudar en el hogar.\nTienes que decidir constantemente.'},
  {scene:'living',type:'choice',q:'¿Qué haces primero?',opts:[
    {label:'Ayudar en casa',sub:'Limpiar y cuidar',scene:'living',result:'help_home'},
    {label:'Hacer tareas',sub:'Estudiar primero',scene:'study',result:'do_homework'}
  ]},
  {scene:'living',type:'narr',text:'Ahora tienes que cuidar, limpiar y responder por todo.\nSabes que no te corresponde todo, pero igual lo intentas.'},
  {scene:'overwhelmed',type:'choice',q:'¿Qué crees que\ndeberías hacer?',opts:[
    {label:'Cumplir con todo',sub:'No rendirse',scene:'overwhelmed',result:'do_all'},
    {label:'Hacer lo posible',sub:'Aceptar el límite',scene:'living',result:'do_possible'}
  ]},
  {scene:'overwhelmed',type:'event',text:'Tu cuerpo no responde más. Tienes la mente saturada. Aun así, el día sigue exigiendo.',icon:'😓',badge:'AL LÍMITE',badgeColor:'#FFE8E8',ec:3,tc:3,iconBg:'#D06858'},
]
};

const ENDINGS={
  collapse:{icon:'💔',title:'Saturación total',text:'El día te sobrepasa completamente. No queda energía ni tiempo. Mañana, todo empieza de nuevo.'},
  exhausted:{icon:'😔',title:'Cansancio acumulado',text:'Todo se logró, pero a costa de un gran desgaste físico y emocional. Así es cada día.'},
  consequences:{icon:'🏠',title:'Consecuencias en casa',text:'Aunque priorizaste, siempre quedaron cosas sin hacer. Las decisiones siempre tienen un costo.'},
  overload:{icon:'😓',title:'Agotamiento total',text:'Cargas con todo demasiado pronto. Asumes roles que no corresponden a tu edad.'},
  balance:{icon:'🌿',title:'Equilibrio precario',text:'Lograste sostenerte, aunque por muy poco. El equilibrio entre estudiar y ayudar es frágil.'}
};

const CHOICE_RESULTS={
  sales_fast:{text:'Sales rápido, sin terminar.\nAvanzas en el día, pero dejas pendientes en casa.',icon:'🚪',badge:'SALIDA RÁPIDA',ec:1,tc:1,bg:'#7A9060'},
  stay_long:{text:'Decides quedarte un poco más.\nLa casa queda ordenada, pero llegas tarde al trabajo.',icon:'🏠',badge:'ORDEN EN CASA',ec:2,tc:3,bg:'#DA9468'},
  help_home:{text:'Decides ayudar en la casa.\nEl tiempo pasa y dejas de lado tus estudios.',icon:'🧺',badge:'PRIORIDAD: HOGAR',ec:2,tc:3,bg:'#DA9468'},
  do_homework:{text:'Decides hacer tus tareas.\nAvanzas en lo tuyo, pero descuidas lo que pasa en casa.',icon:'📖',badge:'PRIORIDAD: ESTUDIOS',ec:1,tc:2,bg:'#6A8FAA'},
  do_all:{text:'Intentas cumplir con todo al mismo tiempo.\nTe sientes completamente saturada y abrumada.',icon:'😓',badge:'SOBRECARGA',ec:5,tc:5,bg:'#D06858'},
  do_possible:{text:'Haces lo que se puede.\nEl cansancio es evidente, pero hay aceptación.',icon:'😔',badge:'LÍMITE ACEPTADO',ec:3,tc:3,bg:'#9A8060'},
  timeout:{text:'El tiempo se agotó y el día decidió por ti.\nAsí pasa a veces: sin margen para elegir.',icon:'⏰',badge:'SIN TIEMPO',ec:3,tc:3,bg:'#D06858'}
};

// ══ NAVEGACIÓN ══════════════════════════════
function goTo(id){
  const veil=document.getElementById('veil');
  veil.classList.add('on');
  setTimeout(()=>{
    document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active','in'));
    const t=document.getElementById(id);
    t.classList.add('active','in');
    veil.classList.remove('on');
  },200);
}

// ══ BARRAS ══════════════════════════════════
function updateBars(){
  const e=Math.max(0,E), t=Math.max(0,T);
  const ep=e/10*100, tp=t/10*100;
  document.getElementById('hud-e').style.width=ep+'%';
  document.getElementById('hud-t').style.width=tp+'%';
  document.getElementById('val-e').textContent=e;
  document.getElementById('val-t').textContent=t;
  const ef=document.getElementById('hud-e');
  const tf=document.getElementById('hud-t');
  if(e<=2){ef.classList.add('fill-warn');ef.classList.remove('fill-e');}
  else{ef.classList.remove('fill-warn');ef.classList.add('fill-e');}
  if(t<=2){tf.classList.add('fill-warn');tf.classList.remove('fill-t');}
  else{tf.classList.remove('fill-warn');tf.classList.add('fill-t');}
}

// ══ ESCENA ══════════════════════════════════
function setScene(name){
  const art=document.getElementById('g-art');
  art.classList.add('swap');
  setTimeout(()=>{art.innerHTML=SCENE[name]||SCENE.kitchen;art.classList.remove('swap');},300);
}

// ══ FLUJO NARRATIVO ══════════════════════════
function pickChar(c){
  document.querySelectorAll('.char-card').forEach(x=>x.classList.remove('chosen'));
  document.getElementById('card-'+c).classList.add('chosen');
  character=c; E=10; T=10; step=0; decisions=0;
  updateBars();
  setTimeout(()=>{goTo('s-game');setTimeout(runStep,350);},150);
}

function runStep(){
  if(step>=STORY[character].length){doEnding();return;}
  const s=STORY[character][step];
  if(s.type==='narr') showNarr(s);
  else if(s.type==='event') showGameEvent(s);
  else if(s.type==='choice') setTimeout(()=>showChoice(s),300);
}

function showNarr(s){
  goTo('s-game');
  setTimeout(()=>setScene(s.scene),100);
  document.getElementById('narr-who').textContent=character==='daylen'?'DAYLEN':'ANA';
  document.getElementById('narr-text').textContent=s.text;
  document.getElementById('narr-btn').style.display='flex';
}

function nextStep(){killTimer();step++;runStep();}

function showGameEvent(s){
  goTo('s-game');
  setTimeout(()=>setScene(s.scene),100);
  document.getElementById('narr-btn').style.display='none';
  setTimeout(()=>openEvPopup(s.text,s.icon,s.badge,s.badgeColor,s.ec,s.tc,s.iconBg),450);
}

// ══ POPUP EVENTO ══════════════════════════════
function openEvPopup(text,icon,badge,badgeColor,ec,tc,iconBg){
  const pop=document.getElementById('ev-popup');
  pop.querySelector('.popup-icon-wrap').textContent=icon;
  pop.querySelector('.popup-icon-wrap').style.background=iconBg||'#DA9468';
  pop.querySelector('.popup-badge').textContent=badge;
  pop.querySelector('.popup-badge').style.background=badgeColor||'#FDF0E8';
  pop.querySelector('.popup-badge').style.color='#805030';
  pop.querySelector('.popup-title').textContent=badge;
  pop.querySelector('.popup-text').innerHTML=text.replace(/\n/g,'<br>');
  let ch='';
  if(ec) ch+=`<div class="cost-pill"><div class="cost-num" style="color:#A84E1A">-${ec}</div><div class="cost-lbl">Energía</div></div>`;
  if(tc) ch+=`<div class="cost-pill"><div class="cost-num" style="color:#7A9060">-${tc}</div><div class="cost-lbl">Tiempo</div></div>`;
  pop.querySelector('.popup-costs').innerHTML=ch;
  E-=(ec||0); T-=(tc||0); updateBars();
  pendingCollapse=(E<=0||T<=0);
  pop.classList.add('show');
}

function dismissPopup(){
  document.getElementById('ev-popup').classList.remove('show');
  if(pendingCollapse){pendingCollapse=false;doEnding('collapse');return;}
  document.getElementById('narr-btn').style.display='flex';
  step++;runStep();
}

// ══ PANTALLA DE ELECCIÓN ══════════════════════
function showChoice(s){
  goTo('s-choice');
  document.getElementById('choice-q').textContent=s.q;
  const cc=document.getElementById('choice-cards');
  cc.innerHTML='';
  s.opts.forEach((opt,i)=>{
    const d=document.createElement('div');
    d.className='opt-card';
    d.innerHTML=`
      <div class="opt-art">
        ${SCENE[opt.scene]||SCENE.kitchen}
        <div class="opt-badge">${i+1}</div>
      </div>
      <div class="opt-label">
        <div class="opt-label-title">${opt.label}</div>
        <div class="opt-label-sub">${opt.sub||''}</div>
      </div>`;
    d.onclick=()=>makeChoice(opt,s);
    cc.appendChild(d);
  });
  startTimer(s);
}

function startTimer(s){
  killTimer();
  timerSec=TTOTAL;
  updateTimer(timerSec);
  timerInt=setInterval(()=>{
    timerSec--;
    updateTimer(timerSec);
    if(timerSec<=0){
      killTimer();
      document.querySelectorAll('.opt-card').forEach(c=>c.classList.add('flash'));
      setTimeout(()=>{
        const worst=STORY[character][step].opts.slice(-1)[0];
        makeChoice(worst,s,true);
      },400);
    }
  },1000);
}

function updateTimer(s){
  const arc=document.getElementById('t-arc');
  const num=document.getElementById('t-num');
  if(!arc) return;
  arc.style.strokeDashoffset=TCIRC*(1-s/TTOTAL);
  num.textContent=s;
  const w=s<=5;
  arc.classList.toggle('warn',w);
  num.classList.toggle('warn',w);
}

function killTimer(){if(timerInt){clearInterval(timerInt);timerInt=null;}}

function makeChoice(opt,s,auto=false){
  killTimer();
  decisions++;
  const r=auto?'timeout':opt.result;
  const res=CHOICE_RESULTS[r]||CHOICE_RESULTS.timeout;
  E-=1; T-=1; updateBars();
  if(E<=0||T<=0){doEnding('collapse');return;}
  step++;
  const pop=document.getElementById('ch-popup');
  pop.querySelector('.popup-icon-wrap').textContent=res.icon;
  pop.querySelector('.popup-icon-wrap').style.background=res.bg||'#DA9468';
  pop.querySelector('.popup-badge').textContent=res.badge;
  pop.querySelector('.popup-badge').style.background='#FDF0E8';
  pop.querySelector('.popup-badge').style.color='#805030';
  pop.querySelector('.popup-title').textContent=res.badge;
  pop.querySelector('.popup-text').innerHTML=res.text.replace(/\n/g,'<br>');
  let ch='';
  if(res.ec) ch+=`<div class="cost-pill"><div class="cost-num" style="color:#A84E1A">-${res.ec}</div><div class="cost-lbl">Energía</div></div>`;
  if(res.tc) ch+=`<div class="cost-pill"><div class="cost-num" style="color:#7A9060">-${res.tc}</div><div class="cost-lbl">Tiempo</div></div>`;
  pop.querySelector('.popup-costs').innerHTML=ch;
  E-=(res.ec||0); T-=(res.tc||0); updateBars();
  pendingCollapse=(E<=0||T<=0);
  pop.classList.add('show');
}

function dismissChoice(){
  document.getElementById('ch-popup').classList.remove('show');
  if(pendingCollapse){pendingCollapse=false;doEnding('collapse');return;}
  goTo('s-game');
  setTimeout(runStep,300);
}

// ══ FINAL ══════════════════════════════════
function doEnding(type){
  killTimer();
  if(!type){
    if(E<=2) type='exhausted';
    else if(T<=2) type='consequences';
    else type=character==='ana'?'overload':'balance';
  }
  const end=ENDINGS[type]||ENDINGS.exhausted;
  document.getElementById('end-icon').textContent=end.icon;
  document.getElementById('end-title').textContent=end.title;
  document.getElementById('end-text').textContent=end.text;
  document.getElementById('es-e').textContent=Math.max(0,E);
  document.getElementById('es-t').textContent=Math.max(0,T);
  document.getElementById('es-d').textContent=decisions;
  goTo('s-end');
}

function replayGame(){
  E=10;T=10;step=0;decisions=0;updateBars();
  goTo('s-game');
  setTimeout(runStep,350);
}
