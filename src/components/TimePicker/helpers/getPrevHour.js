export default function getPrevHour(value) {
    const number = Number(value);
    if (!value || number === 1 || number === 0) {
        return '12';
    }
    return String(number - 1);
}
