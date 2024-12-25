const studenti = [
    { ime: "Sara", prosek: 9.8, grad: "Kumanovo" },
  { ime: "Pero", prosek: 7.1, grad: "Berovo" },
  { ime: "Stojko", prosek: 6, grad: "Kavadarci" },
  { ime: "Stojna", prosek: 10, grad: "Veles" },
  { ime: "Mara", prosek: 5, grad: "Kichevo" },
  { ime: "Petka", prosek: 8.3, grad: "Skopje" },
  { ime: "Mitre", prosek: 7.5, grad: "Ohrid" },
  { ime: "Risto", prosek: 9, grad: "Strumica" },
  { ime: "Tosho", prosek: 9.3, grad: "Gevgelija" },
  { ime: "Ana", prosek: 8.6, grad: "Skopje" },
  { ime: "Antonio", prosek: 9.5, grad: "Skopje" },
  { ime: "Viki", prosek: 9.6, grad: "Kumanovo" },
  { ime: "Maja", prosek: 7.1, grad: "Kumanovo" },
];

//? 1. Сите студенти од Скопје чие име завршува на а и
// имаат просек над 7, подредени по име (растечки).

const studentFilter = studenti
  .filter(
    (student) =>
      student.prosek >= 7 &&
      student.grad === "Skopje" &&
      student.ime.endsWith(`a`)
  )
  .sort((a, b) => a.ime.length - b.ime.length);
console.log(studentFilter);

console.log("-------");

//? 2. Сите студенти кои имаат просек над 9 и не се од Скопје,
// подредени по просек опаѓачки.

const studentiNeSkopje = studenti
  .filter((student) => student.prosek >= 9 && student.grad !== "Skopje")
  .sort((a, b) => b.prosek - a.prosek);
console.log(studentiNeSkopje);

console.log("-------");

//? 3. Првите 3 студенти кои имаат имиња од 5 карактери, подредени по просек.

const studentIme = studenti.filter((student) => student.ime.length === 5)
.sort((a,b) => a.prosek - b.prosek);
const [a,b,c, ...nebitni] = studentIme;
console.log(a,b,c);

// ili moze i so slice:
const studentIme1 = studenti.filter((student) => student.ime.length === 5)
.slice(0 , 3)
.sort((a,b) => a.prosek - b.prosek);
console.log(studentIme1);

console.log("-------");

//? 4. Вкупен просек на студенти кои се од Куманово
 const studentiKumanovo = studenti.filter ((student) => student.grad === "Kumanovo");
console.log(studentiKumanovo);

  let avg = 0;
 studentiKumanovo.forEach((student) => avg += student.prosek );
 console.log(avg / studentiKumanovo.length);

 console.log("-------");

 //? 5. Просек на просеците од градовите Скопје и Охрид

 const studentiSkOh = studenti.filter ((student) => student.grad === "Skopje" || student.grad === "Ohrid");
 console.log(studentiSkOh);

 const prosekSkOh = studentiSkOh.reduce ((acc , student) => acc + student.prosek,0 );

 console.log ("Prosekot na studentite od Skopje i Ohrid e sledniot:" , prosekSkOh / studentiSkOh.length);
 console.log("-------");

 //? 6. Да се додаде уште еден студент со име Горан, просек 7.3 и град Делчево

 const novStudent = { ime:"Goran", prosek: 7.3, grad: "Delcevo" };
//  studenti.push(novStudent); 
//  console.log(studenti);
//  console.log("-------");


// ili so spread operator kade ke se kreira nova niza so noviot student
const studentiUpdate = [...studenti,novStudent];
console.log(studentiUpdate);
console.log("-------");

//? 7. Да се избрише првиот студент во студенти
const removeFirstStudent = studenti.shift();
console.log(studenti);
console.log("-------");

//? 8. Да се креира нов array каде што студентите од Охрид и Куманово
//  каде што оценките со просек се за 1 поголем(Динамички)

const studentiOhKum = studenti.filter((student) => student.grad === "Kumanovo" || student.grad === "Ohrid");

console.log(studentiOhKum);
// so map kreirame nova niza
const prosekNagrada = studentiOhKum.map ((student) => {
    return {...student, prosek:student.prosek +1}
});
console.log("Studentite od Ohrid i Kumanovo se nagradeni so edna ocenka:",prosekNagrada);

 

