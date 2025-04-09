let arr = [
    
{
   team: 'CSK',
   primary: 'yellow',
   secondary: 'green'
},
{
    team: 'RCB',
    primary: 'red',
    secondary: 'black'
    
},
{
    team: 'MI',
    primary: 'blue',
    secondary: 'golden'
},
{
    team: 'DC',
    primary: 'blue',
    secondary: 'red'
},
{
    team: 'GT',
    primary: 'darkblue',
    secondary: 'golden'
},
{
    team: 'SRH',
    primary: 'orange',
    secondary: 'black'
}
]   


let btn = document.querySelector('button')
var h1 = document.querySelector('h1')

btn.addEventListener('click',function(){
    
    let num = Math.floor(Math.random()*arr.length)
    let winner = arr[num];
    h1.innerHTML = winner.team
    h1.style.backgroundColor = winner.primary
    h1.style.color = winner.secondary
})