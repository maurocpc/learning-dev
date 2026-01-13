type Profile = {
    name: string;
    age: number;
    favoriteHobby: string;
    isLearningToCode: boolean;
    yearsCoding: number;
    country: string;
};

const profile: Profile = {
    name: "Mauro",
    age: 50,
    favoriteHobby: "playing video games",
    isLearningToCode: true,
    yearsCoding: 0,
    country: "Brazil"
};

function createProfileMessage(profileData: Profile): string {
  let message = `Hi! My name is ${profileData.name}, I'm ${profileData.age}, I love ${profileData.favoriteHobby}. I'm from ${profileData.country}.`;

  if (profileData.yearsCoding < 0) {
    return "Invalid coding experience.";
  }

  if (profileData.yearsCoding === 0) {
    message += " I'm just starting out.";
  }

  if (profileData.yearsCoding > 0) {
    message += ` I've been coding for ${profileData.yearsCoding} years.`;
  }

  if (profileData.isLearningToCode) {
    message += " I'm learning to code!";
  }

  return message;
}

console.log(createProfileMessage(profile));