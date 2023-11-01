let words: string[] = [
    'COMPUTADORA',
    'AGUACATE',
    'PAPAYA',
    'VEHICULO',
    'ANIMAL',
    'VETERINARIO',
    'TELEFONO',
    'CELULAR'
]


export function getRandomWord() {

    const randomIndex = Math.floor( Math.random() * words.length );

    return words[randomIndex];
}