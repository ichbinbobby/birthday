const referals = [
  {
    img: "https://play-lh.googleusercontent.com/GQ_CWKv7DFM1i2qGJhD2n_2-Jizet83RXBFaw82LyEDTPJlXePRJODJUh1Q8hka-b0Y",
    link: "https://tomorrow.one/?r=YeDyJynS",
    text: "Verwende meinen Code für deine Kontoeröffnung und du bekommst 1 Freimonat! Außerdem werden für uns beide jeweils 3m² Land in Südafrika renaturiert 🌱",
    title: "Nachhaltiges Konto",
  },
  {
    img: "https://play-lh.googleusercontent.com/lvioTO4ssiXrAYGmkA9Tt390Wxm2_1yqMFFn8Nc_dTP3E43K9Ol2poyHYG69ahzNDNc=w240-h480-rw",
    link: "https://banking.umweltbank.de/kontoeroeffnung-umweltflexkonto.html?werberId=MTAwNjkzMw==",
    text: "Ob Festgeld, Tagesgeld oder Fonds - bei der UmweltBank macht Ihr Geld grün. Nachhaltige Produkte sind für uns kein Trend, sondern sind seit jeher unser Geschäftsmodell.",
    title: "Nachhaltig Anlegen",
  },
  {
    img: "https://play-lh.googleusercontent.com/NBrwyY63S8sZKMBdng1JlYDcuwtBGey0HH_2TAZUDkB_2YEdT6K9xdxokq2ig8-RjQ",
    link: "https://links.naturstrom.de/ko9h",
    text: "Du und ich - lass uns gemeinsam Klima und Umwelt schützen! Mit echter Öko-Energie können wir jede Menge CO2 sparen und die Energiewende ordentlich voranbringen.",
    title: "Ökostrom",
  },
  {
    img: "https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/6/AmazonStores/A1PA6795UKMFR9/5f9dd41acffb53b37be84b98a3998469.w4011.h3715.png",
    link: "https://prz.io/KrOaq9rsY",
    text: "Effektive Mundpflege & modernes Design von happybrush. 20% auf deinen ersten Einkauf. Nachhaltige elektrische Schallzahnbürsten und Vegane Zahnpasta.",
    title: "Zahnpflege",
  },
  {
    img: "https://play-lh.googleusercontent.com/mYaCLnYqJ0-vm1Jxuf1YdRc0JG7ZJ-dvx1tcWAIKEHcp_HORniqBqthRd8a1QQzMFVU",
    link: "https://www.aok.de/pk/nordost/mwm/da99334ef0f649344ab0d60108703f4d/",
    text: "Meine Krankenkasse die AOK Nordost hat viele Zusatzleistungen. Ich empfehle dir deshalb einen Wechsel, den du ganz einfach und schnell online machen kannst.",
    title: "Krankenversicherung",
  },
  {
    img: "https://play-lh.googleusercontent.com/0vpq7Mu6ZEloYsC6kJFJRRHidRQzZf9loRcOcBh03GT2DNQiX_Z-uS9tyYuaHZIDKCI",
    link: "https://pokemongolive.com/refer?code=VJ4Y927TK&source=INVITE_PAGE",
    text: "Wenn du meinen Empfehlungscode VJ4Y927TK verwendest, um Pokémon GO beizutreten oder zurückzukommen, erhältst du einen Willkommensbonus, besondere Belohnungen und mehr.",
    title: "Kostenloses Spiel für Smartphones",
  },
  {
    img: "https://play-lh.googleusercontent.com/sKmpsdhvuo6N4zQKzIsUbuwzMDsqKq2P7FW32rDk7NjFXoAEUVTFybnvuPoGTpDTBx0",
    link: "https://www.netzclub.net/einladung-folgen?ic=7W4-VZL-NEG",
    text: "netzclub schenkt dir pro Monat 200mb Datenvolumen und zusätzlich bekommst du mit dem Einladungscode 7W4-VZL-NEG einmalig 10GB Datenvolumen zusätzlich.",
    title: "Kostenlose Prepaid-SIM",
  },
  {
    img: "https://play-lh.googleusercontent.com/Egp-GTOp0CMBeS6eRVEQO6bLYdfklzGxCYSkr7aZynbzr2AJSZpF9s05_6ppj8vwq7I",
    link: "https://app.busuu.com/u7oevWFftUXA5yeCA",
    text: "Das ist auch was für dich! Nimm meine persönliche Einladung für ein 30-tägiges Probeabo an, damit wir zusammen lernen können.",
    title: "Sprachenlernen",
  },
  {
    img: "https://play-lh.googleusercontent.com/7iDtTkpbsUCeeJHJDs2neN1E2owtxYAdyEk6oGUfAVAXpgJI01e6hFlhtx0TVXbXBA=w240-h480",
    link: "https://s.klook.com/c/vw7Vd75jXW",
    text: "Entdecken und buchen Sie erstaunliche Reise- und Freizeiterlebnisse vor Ort mit Klook. Finden Sie kuratierte Aktivitäten und unterhaltsame Aktivitäten mit exklusiven Rabatten.",
    title: "Klook Travel",
  },
  {
    img: "https://play-lh.googleusercontent.com/EAU9Ed_wJ7p86twBBEUvKChvVwj_cOM-MahgGKt0m-yHf_F5oHwvu6lVzX69JpXjKMA",
    link: "https://ref.airalo.com/JSgw",
    text: "Erhalten Sie 3 US$ Rabatt auf Ihr erstes eSIM-Datenpaket von Airalo. Verwenden Sie den Code THANHB5076, wenn Sie sich anmelden oder wenden Sie ihn an der Kasse an.",
    title: "eSIM Travel & Internet",
  },
  {
    img: "https://play-lh.googleusercontent.com/5Zkj-vrKHBauMF4srwktsFPPYQqTHA2Tlc8fZLPDyvgAEk2hhGfkNsKSnJZLNvIRHQ",
    link: "https://de.omio.com/refer-a-friend?ic=thanhn7k6f1r",
    text: "Mit Omio kannst du Tickets für deine nächste Reise buchen. Melde dich mit meinem Empfehlungs-Link an und wir erhalten beide einen Rabatt von 10 € auf unsere nächste Buchung!",
    title: "Omio: Bahn, Bus, Flüge, Fähre",
  },
];

export default referals;
