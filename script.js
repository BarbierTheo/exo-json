const data = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
        {
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": [
                "Radiation resistance"
            ]
        },
        {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": [
                "Million tonne punch"
            ]
        },
        {
            "name": "Eternal Flame",
            "age": 1000000,
            "secretIdentity": "Unknown",
            "powers": [
                "Immortality"
            ]
        },
        {
            "name": "Fatality",
            "age": 33,
            "secretIdentity": "Isaac Mewton",
            "powers": [
                "Fatality resistance"
            ]
        },
        {
            "name": "Running Lady",
            "age": 24,
            "secretIdentity": "Britney Sears",
            "powers": [
                "Speed of light"
            ]
        }
    ]
}

document.getElementById("squadname").innerHTML = `${data.squadName}`;
document.getElementById("hometown").innerHTML = `${data.homeTown}`;
document.getElementById("yearformed").innerHTML = `${data.formed}`;

for (let i = 0; i < data.members.length; i++) {

document.querySelector('.cardsection').innerHTML +=

const heroname = data.members[i].name
console.log(heroname)
`<div class="card p-4 col-lg-3 col-md-6 col-12 m-4 shadow ">
<p class="text-center fw-bold typo">${data.members.name}</p>
<ul>
    <li><span class="fw-bold">Secret identity :</span> name</li>
    <li><span class="fw-bold">Age :</span> age</li>
    <li class="fw-bold">Superpowers</li>
    <ul>
        <li>power</li>
    </ul>
</ul>
</div>`

}