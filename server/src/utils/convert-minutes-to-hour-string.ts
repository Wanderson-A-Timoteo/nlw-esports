// 1080 -> 18:00


export function convertMinutesToHourString(minutesAmount: number) {
    const hours = Math.floor(minutesAmount / 60);
    const minutes = minutesAmount % 60;

    // padStart(2, '0') adiciona zero na frente de horas caso o horário não seja com duas casas
    // padEnd(2, '0') adiciona zero no final, por isso é preciso declarar padStart em minutos tb para o número zero sair na primeira casa
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
}