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

## Copy button

Result card e Share er pashe **📋 Copy** button ache — chap dilei puro result (roll,
institute, semester GPA, CGPA, referred subject) clipboard e copy hoye jabe. Copy hole
button e "✅ Copied!" dekhabe 2 second.

## Select PDF button

Eta ekhono ache — bhobisshote notun kono BTEB result PDF upload koreo roll search kora jabe,
tobe main result ekhon file er vitorei embedded.
