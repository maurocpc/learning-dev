const firstName: string = "Mauro";
const age: number = 50;
const favoriteHobby: string = "playing video games";
const isLearning: boolean = true;
const yearsCoding: number = 0;

function createProfileMessage(
    name: string, 
    age: number, 
    hobby: string,
    isLearningToCode: boolean,
    yearsCoding: number
): string {
    let message = `Hi! My name is ${name}, I'm ${age}, I love ${hobby}.`;

    if (yearsCoding < 0) {
        return `Invalid coding experience.`
    }
    
    if (yearsCoding === 0) {
        message += ` I'm just starting out.`;
    }

    if (yearsCoding > 0) {
        message += ` I've been coding for ${yearsCoding} year(s).`;
    }

    if (isLearningToCode) {
        message += ` I'm learning to code!`;
    }

    return message;
}

const profileMessage = createProfileMessage(
    firstName, 
    age, 
    favoriteHobby, 
    isLearning,
    yearsCoding
);

console.log(profileMessage);