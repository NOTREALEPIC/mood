
function qouats()
{
    const qouats = [
        "Success doesn't come from what you do occasionally, it comes from what you do consistently. – Marie Forleo",
        "Push yourself, because no one else is going to do it for you.",
        "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
        "Your only limit is your mind.",
        "Dream big. Start small. Act now. – Robin Sharma",
        "Believe in yourself and all that you are. – Christian D. Larson",
        "The future depends on what you do today. – Mahatma Gandhi",
        "Great things never come from comfort zones.",
        "Don’t wait for opportunity. Create it.",
        "Discipline is the bridge between goals and accomplishment. – Jim Rohn",
        "It always seems impossible until it's done. – Nelson Mandela",
        "You are capable of more than you know.",
        "Stay positive, work hard, make it happen.",
        "Winners are not afraid of losing. But losers are. – Robert Kiyosaki",
        "Small steps every day lead to big results.",
        "Be stronger than your excuses.",
        "You don’t have to be great to start, but you have to start to be great. – Zig Ziglar",
        "Success is what comes after you stop making excuses.",
        "Your vibe attracts your tribe.",
        "The harder you work for something, the greater you’ll feel when you achieve it.",
        "Don’t limit your challenges—challenge your limits.",
        "Work hard in silence. Let success make the noise.",
        "Action is the foundational key to all success. – Pablo Picasso",
        "Every day is a new beginning. Take a deep breath and start again.",
        "Be a warrior, not a worrier.",
        "Focus on the step in front of you, not the whole staircase.",
        "Make yourself proud.",
        "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
        "You didn’t come this far to only come this far.",
        "Success is not for the lazy."
      ];
      
      document.getElementById("quoteText").innerHTML = qouats[Math.floor(Math.random() * qouats.length)];
      document.getElementById("quoteText").style.display = "block";
}

function mood()
{
  var mood = document.getElementById("mood").value;
  switch(mood) {
    case "happy":
      document.getElementById("moodText").innerHTML = "That’s amazing! Keep that energy going and spread the good vibes — happiness is contagious. Use this moment to push even further toward your goals!";
      break;
    case "sad":
      document.getElementById("moodText").innerHTML = "It's okay to feel down sometimes. Just remember, even the darkest clouds can’t stop the sun from shining again. You're stronger than you think, and better days are coming. Keep going. 🌈";
      break;
    case "angry":
      document.getElementById("moodText").innerHTML = "Anger is energy — channel it into something powerful. Let it drive you to prove, to improve, and to rise. Don’t let it consume you; let it fuel you.";
      break;
    case "excited":
      document.getElementById("moodText").innerHTML = "Yesss! That excitement is your heart telling you you’re on the right path. Use that fire to chase your dreams with full force. This is your moment — go all in!";
      break;
    default:
      document.getElementById("moodText").innerHTML = "Please select a mood.";
  }
}