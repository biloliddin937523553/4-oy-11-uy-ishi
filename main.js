let son1 = (12)
let son2 = (22)
let xammasi1 =('Xammasi bolib:')
let xammasi =(xammasi1+(son1+son2))
console.log(`1) Ikkita o'zgaruvchi yarating va ularning ichiga son saqlang va bir birini cosole.logda qo'shib chiqaring chiqaring`);
console.log(son1);
console.log(son2);
console.log( xammasi);

console.log(`2) let a  = '12' shu 12 sonini data typeni o'zgartirib number qilib chiqaring bering. Yani bu hozir string typeda siz number tyga o'zgartiring`);
let son3 = '12'
console.log(son3);
console.log(Number(son3));

console.log(`3) randomli son yasang va shu randomli sonning juft yoki toq ekanligini aniqlab bering`);
let random = (Math.floor(Math.random()*100)) 
if(random % 2 ===0){
    console.log(`${random}:juft songa tegishli`);
}else{
    console.log(`${random}:toq songa tegishli`);
}

console.log(`4) promptdan bitta so'z kiriting agar o'sha so'z Mars so'ziga teng bolsa o'sha so'zningo'zi chiqsin agar boshqa so'z bo'lsa Mars It school deb chiqsin`);
let soz = prompt('soz kiritin')
if(soz === 'Mars'.toLocaleLowerCase()){
    console.log(soz);
}else{
    console.log('Mars it school');
}
console.log(`5) bitta array yarating va uning ichiga 5 ta so'z kiriting. Keyin For yordamida o'sha arraydagi so'zlar ichidan uzunligi 5 va undan kattalarini bohsqa bir arrayga qo'shib chiqaring`);

let arr1 =['olma', 'anor','shaftoli','gilos','kivi']
let arr2=[]
let arr3=[]

for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    if (element.length>4) {
        arr2.push(element)
    }else{
        arr3.push(element)
    }
}
console.log(arr1);
console.log(arr2);
console.log(arr3);

console.log(`6) for orqali birdan 100gacha bolgan sonlarni juft yoki toqqa ajratib chiqaring`);
for (let i = 0; i < 101; i = i + 1) {
    if(i % 2 === 0){
        console.log(i+':Juft son');
    }else{
        console.log(i+':toq son');
    }
    console.log();
    }