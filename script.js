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
`<div class="card p-4 col-lg-3 col-10 m-4 shadow ">
<p class="text-center fw-bold typo fs-2" style="font-family: 'Faster one';">${data.members[i].name}</p>
<ul>
    <li><span class="fw-bold">Secret identity :</span> ${data.members[i].secretIdentity}</li>
    <li><span class="fw-bold">Age :</span> ${data.members[i].age}</li>
    <li class="fw-bold">Superpowers</li>
    <ul class="superpowers-${i}">
    </ul>
</ul>
</div>`

for (let pwrs = 0; pwrs < data.members[i].powers.length; pwrs++) {
    document.querySelector(`.superpowers-${i}`).innerHTML +=
    `<li>${data.members[i].powers[pwrs]}</li>`
    // console.log(data.members[i].powers[pwrs])
}
}

