# BTEB Results Zone — Updated (10 Nov 2026 Result)

## Ki update kora hoyeche

Tumar dewa 16 ta PDF theke shob result ekhon `index.html` er vitorei ache.
Alada kore kono PDF host korte hobe na — file ta upload korlei search cholbe.

- **Mot result: 1,60,657 ta** (1,60,627 ta unique roll) — prothom update e 1,14,655 ta (10 ta PDF + purono 7th er 6 ta roll), ditiyo update e aro 46,002 ta jog hoyeche (6 ta notun PDF)
- **Exam:** August–September 2026, **Published:** 10 Nov 2026 (Manual Result er 10 jon: Jan-March 2026 exam)
- **PDF gulo:** 1st, 2nd, 3rd, 4th, 5th, 7th, 8th (Irregular) Semester — 2022 Regulation; 1st + 2nd Allied (2016 Regulation); 2nd + 3rd + 4th Marine Trade; Tourism & Hospitality; Manual Result-2026
- **Regulation:** 2016 + 2022, **sathe** Certificate in Marine Trade + Diploma in Tourism and Hospitality + Diploma in Engineering (Allied)
- **Institute:** 491 ta

## Kivabe use korbe

1. `index.html` tomar hosting e upload koro (ager file er jaygay replace koro).
2. Kono PDF upload korte hobe na.
3. File size 13.08 MB — hosting e gzip on thakle browser e matro ~1.96 MB download hobe.
4. Search instant — kono PDF load howar wait korte hobe na.

## Design

Design e **kono change kora hoyni** — CSS, layout, color, banner, footer shob ager motoi ache.
Sudhu 2 ta lekha update kora hoyeche (data update hishebe):
- Status bar: ekhon "1,60,657 results loaded" dekhay
- Search box er example roll: notun result er roll (700014, 800377)

## Ekta joruri kotha

Tumi chat e jeta paste korechile, seta majhkhane kete geche — `preloadedDB` er pore baki
JavaScript ta aseni. Tai script er JS part ta ami notun kore baniyechi, design ar feature
(GPA/CGPA, Save, Download, Share, Select PDF) same rekhe.

Tomar kache full HTML file ta thakle pathale ami original JS er sathe miliye nite parbo.
(7th purono roll 501450 er entry tomar file eo kete geche — majhkhane institute er naam
porjonto ache, kono GPA data nei — tai ota add kora jayni.)

## GitHub Pages deployment

Live site: https://bteb-polytechnic.github.io/-diploma-result/
Repo: bteb-polytechnic/-diploma-result (branch: main)

GitHub e ekbar e 13.08 MB er single file push kora jayni (MCP request too large),
tai GitHub er version ta vag kora: `github/` folder e `index.html` (68 KB) +
`data-1.js` ... `data-7.js` (mot ~13.1 MB) — design, search ar data ekdom same,
sudhu data alada file e vag kora. Single-file version ta ekhono `index.html`
hishebe ache, chaile jekono hosting e ek file hishebe use kora jabe.

> Note: repo te ager `RESULT_7th_2022_Regulation.pdf` (8.2 MB) ekhono ache —
> notun site er data file er vitorei, tai PDF ta ar dorkar nei. Chaile repo theke
> delete kore dite parbo.

## Test korar jonno roll

| Roll | Ki dekhbe |
|------|-----------|
| 700014 | 7th Semester, shob pass (GPA 3.73) |
| 700022 | 7th Semester, referred (27061, 27073) |
| 189584 | 8th Semester, CGPA 3.17 (BTEB published) |
| 232810 | Marine Trade Final, CGPA 3.35 |
| 562631 | Tourism & Hospitality, 7th Semester |
| 232945 | 2 ta result — Marine + Diploma (ekoi roll 2 jaygay) |
| 207698 | Failed (13 ta subject) |
| 300116 | 1st Semester, shob pass (GPA 3.25) |
| 200496 | 2nd Semester, shob pass (GPA 3.19) |
| 191561 | Allied 1st Semester, shob pass (GPA 3.30) |
| 400976 | Manual Result, CGPA 3.54 |
| 302428 | Dropped out (6 ta subject) |
| 202030 | Expelled |

## CGPA Calculator, Grade Scale ar Grade Sheet

- **🧮 CGPA Calculator** — result er niche ache. 8 ta semester er GPA likhe Calculate chaple CGPA + Grade dekhabe. Khali rakha semester count hobe na. "Use Searched Result" chaple search kora roll er GPA gulo auto fill hoye jabe.
- **📊 Grade Scale** — calculator er niche GPA theke Grade er table ache (4.00 = A+, 3.75 = A, 3.50 = A-, 3.25 = B+, 3.00 = B, 2.75 = B-, 2.50 = C+, 2.25 = C, 2.00 = D, 1.99 er niche = F).
- **📄 Grade Sheet** — result card er button gulo te ache. Chaple search kora roll er grade sheet khulbe (shob semester er GPA + Grade + status, referred/failed subject, CGPA). Print button diye sudhu grade sheet tai print kora jabe.

## Copy button

Result card e Share er pashe **📋 Copy** button ache — chap dilei puro result (roll,
institute, semester GPA, CGPA, referred subject) clipboard e copy hoye jabe. Copy hole
button e "✅ Copied!" dekhabe 2 second.

## Select PDF button

14 Nov 2026 e soriye deoa hoyeche — result ekhon file er vitorei embedded, tai PDF upload
er ar dorkar nei. Button, file input, pdf.js library ar upload er code shob sorano hoyeche.

## Notun feature (14 Nov 2026)

- **🌙 Dark Mode** — navbar er 🌙 button e chaple dark mode on/off hobe. Pochondo browser e save thake, porer bar eleo mone thakbe. Prothom bar phone er system setting onujayi cholbe.
- **🌐 Bangla/English** — navbar er বাং/EN button e chaple pura site Bangla ba English e dekhte parbe (search, result card, calculator, grade scale, grade sheet, statistics shob).
- **🕘 Recent Search** — search kora roll gulo search box er niche chip hishebe thake (sorbochcho 8 ta), ek tap e abar search kora jay. Clear chaple muche jabe.
- **📊 Result Statistics** — Grade Scale er niche: mot result, pass/referred/failed/expelled er sonkha, pass rate, ar prottek semester er pass rate bar chart soho.
- **🏫 Institute Results** — institute er nam likhe (suggestion asbe) View chaple oi institute er shob student er result dekhabe — roll, semester, GPA, status soho. Semester filter o ache. Row te tap korle oi roll er result khulbe.
- **🖼️ Share Image** — result card e Share Image button: roll er result er sundor ekta chobi (PNG) baniye share ba download kora jabe — Facebook/WhatsApp e deoar jonno.
- **📱 PWA (Installable App)** — phone er browser theke "Install" korle site ta app er moto home screen e bosbe, app er moto khulbe. Offline eo ager dekha page cholbe (service worker).
- **📖 Subject Names** — referred/failed subject er code er pashe ekhon subject er nam o dekhabe (jemon 25911 — Mathematics-I). Mot 724 ta subject er nam ache — 2016 o 2022 regulation, Marine Trade ar Tourism soho. Ager list er 48 ta bhul nam o thik kora hoyeche (jemon 67064 ekhon shothikbhabe 'Strength of Materials').
