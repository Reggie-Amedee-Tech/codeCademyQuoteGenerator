const message = ['I am Malenia, blade of Miquella', 'I am Starscourge Radahn, The Red Lion', 'I am Godrick the Grafted, purloiner of the golden lineage', 'I am Morgott, last shield of Queen Marika', 'I am Mohg, the Lord of the Sanguine', 'I am Ranni, Goddess of the Moon']

const randomizer = (array) => {
    const random = array[Math.floor(Math.random() * array.length)]
    return random
}

const startGame = () => {
    console.log(randomizer(message))
}

startGame()