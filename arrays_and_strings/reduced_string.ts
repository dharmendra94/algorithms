export function superReducedString(str: string): string {
    let pointer = 0;

    while (str.length && pointer < str.length) {
        if (str.charAt(pointer) === str.charAt(pointer + 1)) {
            str = str.substring(0, pointer) + str.substring(pointer + 2);
            pointer = 0;
        } else {
            pointer++;
        }
    }

    if (!str) return "Empty String";
    
    return str;
}