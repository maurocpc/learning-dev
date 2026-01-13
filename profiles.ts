type Profile = {
    name: string;
    age: number;
    favoriteHobby: string;
    isLearningToCode: boolean;
    yearsCoding: number;
    country: string;
};

const profiles: Profile[] = [
    {
        name: "Mauro",
        age: 50,
        favoriteHobby: "playing video games",
        isLearningToCode: true,
        yearsCoding: 0,
        country: "Brazil"
    },
    {
        name: "Ana",
        age: 44,
        favoriteHobby: "cooking",
        isLearningToCode: false,
        yearsCoding: 0,
        country: "Brazil"
    },
    {
        name: "Luna",
        age: 28,
        favoriteHobby: "playing games",
        isLearningToCode: true,
        yearsCoding: 2,
        country: "Brazil"        
    }
];

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

for (const profile of profiles) {
    console.log(createProfileMessage(profile));
}