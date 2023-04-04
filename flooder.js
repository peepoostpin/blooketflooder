let i = document.createElement('iframe');
document.body.append(i);
window.prompt = i.contentWindow.prompt.bind(window);
i.remove();

const id = prompt("Game ID - e.g = 8540099:");
const name = prompt("Name - e.g = ItzMeFard:");
const amount = parseInt(prompt("Amount - e.g = 50:"));
const b = prompt("Blook - e.g = Mega Bot:");
const bg = prompt("Banner -ALL LOWERCASE- e.g = chocolate:");

console.log(b);
console.log(bg);

let { webpack } = webpackJsonp.push([[], { ['1234']: (_, a, b) => { a.webpack = b }, }, [['1234']]]);
const axios = Object.values(webpack.c).find((x) => x.exports?.a?.get).exports.a;
const firebase = Object.values(webpack.c).find(x => x.exports?.a?.initializeApp).exports.a;

for (let i = 1; i <= amount; i++) {
  const suffix = Math.random().toString(36).substring(2, 5).replace(/[^\w\-\/]/g, ''); // generate a random 3-letter suffix containing letters, numbers, dashes, and slashes
  const username = `${name}-${suffix}`; // add the suffix to the original name
  (async () => {
    const { data: { success, fbToken, fbShardURL } } = await axios.put("https://fb.blooket.com/c/firebase/join", { id, name: username });
    if (!success) return;
    console.log(`Added player: ${username}`); // log the added player's username
    const liveApp = firebase.initializeApp({
        apiKey: "AIzaSyCA-cTOnX19f6LFnDVVsHXya3k6ByP_MnU",
        authDomain: "blooket-2020.firebaseapp.com",
        projectId: "blooket-2020",
        storageBucket: "blooket-2020.appspot.com",
        messagingSenderId: "741533559105",
        appId: "1:741533559105:web:b8cbb10e6123f2913519c0",
        measurementId: "G-S3H5NGN10Z",
        databaseURL: fbShardURL
    }, username);
    const auth = firebase.auth(liveApp);
    await auth.setPersistence(firebase.auth.Auth.Persistence.NONE).catch(console.error);
    await auth.signInWithCustomToken(fbToken).catch(console.error);
    await liveApp.database().ref(`${id}/c/${username}`).set({ b, bg });
    liveApp.delete();
  })();
  await new Promise(r => setTimeout(r, 500));
}
