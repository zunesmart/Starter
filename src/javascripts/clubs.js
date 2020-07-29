// team1name = document.querySelector('#te1').value
// team2name = document.querySelector('#te2').value
// document.querySelector('.tee1').innerHTML = team1name
// document.querySelector('.tee2').innerHTML = team2name

let lacross = {
    number: '1',
    title: 'Lacross',
    text:'Lacross is becomming more and more popular in our area!'+
    'kids can start learning the game to see if it is for them!'
 }
let fitness = {
    number: '2',
    title: 'Fitness',
    text:'This club is an extention to the school leaning program.'+
    'It will be fucused on improving kids strengnth and enderance in their'+
    'age group according to the national average.'
 }
let reading = {
    number: '3',
    title: 'Reading', 
    text:'The reading club is for whoever likes reading and for those who like fiction'+
    'There are usually two groups 1st through 3rd grade and 4th through 6th grade.'
 }
let soccer = {
    number: '4',
    title: 'Soccer',
    text:'The soccer club is for thoughs that would like to lean the base rules of soccer and improve their skills'
 }
let labMath = {
    number: '3',
    title: 'Math',
    text:'This club is based on the krypto Card game in the region.'+
     '<span id="font-special"> - - > (Alert! : !students do not have to compete in the krypto competion)</span>'
 }
let programming = {
    number: '3',
    title: 'Computer Programming',
    text:'This is an Fun and Exciting corse taught by our vary favorite Jason Ure. This club '
     +'uses Photoshop, Illistrator, CSS, and HTML.'
 }

let clubCards = [lacross,fitness,reading,soccer, labMath, programming]

for(let card of clubCards){
document.getElementById('tiger').outerHTML += `<div class="col mb-4">
<div class="card">
  <img src="../images/club-${card.number}.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${card.title}</h5>
    <p class="card-text">${card.text}</p>
  </div>
</div>
</div>`
 }
