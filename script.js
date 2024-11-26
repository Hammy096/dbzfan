const characters = [
    {
        "name": "Android 13",
        "dp": 5,
        "Image": "dbzfan/img/Android_13.png"
    },
    {
        "name": "Android 16",
        "dp": 5,
        "Image": "dbzfan/img/Android_16.png"
    },
    {
        "name": "Android 17 (Super)",
        "dp": 6,
        "Image": "dbzfan/img/Android_17_(Super).png"
    },
    {
        "name": "Android 17 (Z)",
        "dp": 5,
        "Image": "dbzfan/img/Android_17_(Z).png"
    },
    {
        "name": "Android 18",
        "dp": 5,
        "Image": "dbzfan/img/Android_18.png"
    },
    {
        "name": "Android 19",
        "dp": 4,
        "Image": "dbzfan/img/Android_19.png"
    },
    {
        "name": "Anilaza",
        "dp": 8,
        "Image": "dbzfan/img/Anilaza.png"
    },
    {
        "name": "Babidi",
        "dp": 3,
        "Image": "dbzfan/img/Babidi.png"
    },
    {
        "name": "Baby Vegeta (GT)",
        "dp": 5,
        "Image": "dbzfan/img/Baby_Vegeta_(GT).png"
    },
    {
        "name": "Bardock",
        "dp": 4,
        "Image": "dbzfan/img/Bardock.png"
    },
    {
        "name": "Beerus",
        "dp": 10,
        "Image": "dbzfan/img/Beerus.png"
    },
    {
        "name": "Bergamo",
        "dp": 5,
        "Image": "dbzfan/img/Bergamo.png"
    },
    {
        "name": "Bojack",
        "dp": 5,
        "Image": "dbzfan/img/Bojack.png"
    },
    {
        "name": "Broly (Super)",
        "dp": 5,
        "Image": "dbzfan/img/Broly_(Super).png"
    },
    {
        "name": "Broly (Super) Super Saiyan",
        "dp": 7,
        "Image": "dbzfan/img/Broly_(Super)_Super_Saiyan.png"
    },
    {
        "name": "Broly (Super) Super Saiyan Full Power",
        "dp": 9,
        "Image": "dbzfan/img/Broly_(Super)_Super_Saiyan_Full_Power.png"
    },
    {
        "name": "Broly (Z)",
        "dp": 5,
        "Image": "dbzfan/img/Broly_(Z).png"
    },
    {
        "name": "Broly (Z) Legendary Super Saiyan",
        "dp": 9,
        "Image": "dbzfan/img/Broly_(Z)_Legendary_Super_Saiyan.png"
    },
    {
        "name": "Broly (Z) Super Saiyan",
        "dp": 7,
        "Image": "dbzfan/img/Broly_(Z)_Super_Saiyan.png"
    },
    {
        "name": "Burter",
        "dp": 3,
        "Image": "dbzfan/img/Burter.png"
    },
    {
        "name": "Cabba",
        "dp": 5,
        "Image": "dbzfan/img/Cabba.png"
    },
    {
        "name": "Cabba Super Saiyan",
        "dp": 6,
        "Image": "dbzfan/img/Cabba_Super_Saiyan.png"
    },
    {
        "name": "Cabba Super Saiyan 2",
        "dp": 7,
        "Image": "dbzfan/img/Cabba_Super_Saiyan_2.png"
    },
    {
        "name": "Captain Ginyu",
        "dp": 4,
        "Image": "dbzfan/img/Captain_Ginyu.png"
    },
    {
        "name": "Caulifla",
        "dp": 5,
        "Image": "dbzfan/img/Caulifla.png"
    },
    {
        "name": "Caulifla Super Saiyan 2",
        "dp": 7,
        "Image": "dbzfan/img/Caulifla_Super_Saiyan_2.png"
    },
    {
        "name": "Cell",
        "dp": 5,
        "Image": "dbzfan/img/Cell.png"
    },
    {
        "name": "Cell 2nd Form",
        "dp": 5,
        "Image": "dbzfan/img/Cell_2nd_Form.png"
    },
    {
        "name": "Cell Jr.",
        "dp": 3,
        "Image": "dbzfan/img/Cell_Jrpng"
    },
    {
        "name": "Cell Perfect Form",
        "dp": 6,
        "Image": "dbzfan/img/Cell_Perfect_Form.png"
    },
    {
        "name": "Chiaotzu",
        "dp": 2,
        "Image": "dbzfan/img/Chiaotzu.png"
    },
    {
        "name": "Cooler",
        "dp": 6,
        "Image": "dbzfan/img/Cooler.png"
    },
    {
        "name": "Cooler Final Form",
        "dp": 7,
        "Image": "dbzfan/img/Cooler_Final_Form.png"
    },
    {
        "name": "Cui",
        "dp": 3,
        "Image": "dbzfan/img/Cui.png"
    },
    {
        "name": "Dabura",
        "dp": 6,
        "Image": "dbzfan/img/Dabura.png"
    },
    {
        "name": "Dodoria",
        "dp": 3,
        "Image": "dbzfan/img/Dodoria.png"
    },
    {
        "name": "Dr. Gero",
        "dp": 4,
        "Image": "dbzfan/img/Dr._Gero.png"
    },
    {
        "name": "Dr. Wheelo",
        "dp": 4,
        "Image": "dbzfan/img/Dr._Wheelo.png"
    },
    {
        "name": "Dyspo",
        "dp": 6,
        "Image": "dbzfan/img/Dyspo.png"
    },
    {
        "name": "Frieza (Super)",
        "dp": 6,
        "Image": "dbzfan/img/Frieza_(Super).png"
    },
    {
        "name": "Frieza (Z)",
        "dp": 5,
        "Image": "dbzfan/img/Frieza_(Z).png"
    },
    {
        "name": "Frieza (Z) 2nd Form",
        "dp": 5,
        "Image": "dbzfan/img/Frieza_(Z)_2nd_Form.png"
    },
    {
        "name": "Frieza (Z) 3rd Form",
        "dp": 5,
        "Image": "dbzfan/img/Frieza_(Z)_3rd_Form.png"
    },
    {
        "name": "Frieza (Z) 4th Form",
        "dp": 6,
        "Image": "dbzfan/img/Frieza_(Z)_4th_Form.png"
    },
    {
        "name": "Frieza (Z) Full Power",
        "dp": 7,
        "Image": "dbzfan/img/Frieza_(Z)_Full_Power.png"
    },
    {
        "name": "Frieza Force Soldier",
        "dp": 2,
        "Image": "dbzfan/img/Frieza_Force_Soldier.png"
    },
    {
        "name": "Frost",
        "dp": 6,
        "Image": "dbzfan/img/Frost.png"
    },
    {
        "name": "Full-Power Bojack",
        "dp": 7,
        "Image": "dbzfan/img/Full-Power_Bojack.png"
    },
    {
        "name": "Fused Zamasu",
        "dp": 8,
        "Image": "dbzfan/img/Fused_Zamasu.png"
    },
    {
        "name": "Fused Zamasu Half-Corrupted",
        "dp": 9,
        "Image": "dbzfan/img/Fused_Zamasu_Half-Corrupted.png"
    },
    {
        "name": "Fusion Android 13",
        "dp": 7,
        "Image": "dbzfan/img/Fusion_Android_13.png"
    },
    {
        "name": "Future Trunks",
        "dp": 5,
        "Image": "dbzfan/img/Future_Trunks.png"
    },
    {
        "name": "Future Trunks Super Saiyan",
        "dp": 6,
        "Image": "dbzfan/img/Future_Trunks_Super_Saiyan.png"
    },
    {
        "name": "Gogeta (GT) Super Saiyan 4",
        "dp": 10,
        "Image": "dbzfan/img/Gogeta_(GT)_Super_Saiyan_4.png"
    },
    {
        "name": "Gogeta (Super)",
        "dp": 7,
        "Image": "dbzfan/img/Gogeta_(Super).png"
    },
    {
        "name": "Gogeta (Super) Super Saiyan",
        "dp": 8,
        "Image": "dbzfan/img/Gogeta_(Super)_Super_Saiyan.png"
    },
    {
        "name": "Gogeta (Super) Super Saiyan God Super Saiyan",
        "dp": 10,
        "Image": "dbzfan/img/Gogeta_(Super)_Super_Saiyan_God_Super_Saiyan.png"
    },
    {
        "name": "Gohan (Adult)",
        "dp": 4,
        "Image": "dbzfan/img/Gohan_(Adult).png"
    },
    {
        "name": "Gohan (Adult) Super Saiyan",
        "dp": 6,
        "Image": "dbzfan/img/Gohan_(Adult)_Super_Saiyan.png"
    },
    {
        "name": "Gohan (Adult) Super Saiyan 2",
        "dp": 7,
        "Image": "dbzfan/img/Gohan_(Adult)_Super_Saiyan_2.png"
    },
    {
        "name": "Gohan (Future)",
        "dp": 5,
        "Image": "dbzfan/img/Gohan_(Future).png"
    },
    {
        "name": "Gohan (Future) Super Saiyan",
        "dp": 6,
        "Image": "dbzfan/img/Gohan_(Future)_Super_Saiyan.png"
    },
    {
        "name": "Gohan (Kid)",
        "dp": 3,
        "Image": "dbzfan/img/Gohan_(Kid).png"
    },
    {
        "name": "Gohan (Teen)",
        "dp": 4,
        "Image": "dbzfan/img/Gohan_(Teen).png"
    },
    {
        "name": "Gohan (Teen) Super Saiyan",
        "dp": 6,
        "Image": "dbzfan/img/Gohan_(Teen)_Super_Saiyan.png"
    },
    {
        "name": "Gohan (Teen) Super Saiyan 2",
        "dp": 7,
        "Image": "dbzfan/img/Gohan_(Teen)_Super_Saiyan_2.png"
    },
    {
        "name": "Goku (GT)",
        "dp": 5,
        "Image": "dbzfan/img/Goku_(GT).png"
    },
    {
        "name": "Goku (GT) Super Saiyan",
        "dp": 6,
        "Image": "dbzfan/img/Goku_(GT)_Super_Saiyan.png"
    },
    {
        "name": "Goku (GT) Super Saiyan 3",
        "dp": 7,
        "Image": "dbzfan/img/Goku_(GT)_Super_Saiyan_3.png"
    },
    {
        "name": "Goku (GT) Super Saiyan 4",
        "dp": 8,
        "Image": "dbzfan/img/Goku_(GT)_Super_Saiyan_4.png"
    },
    {
        "name": "Goku (Super)",
        "dp": 5,
        "Image": "dbzfan/img/Goku_(Super).png"
    },
    {
        "name": "Goku (Super) Super Saiyan",
        "dp": 6,
        "Image": "dbzfan/img/Goku_(Super)_Super_Saiyan.png"
    },
    {
        "name": "Goku (Super) Super Saiyan God",
        "dp": 7,
        "Image": "dbzfan/img/Goku_(Super)_Super_Saiyan_God.png"
    },
    {
        "name": "Goku (Super) Super Saiyan God Super Saiyan",
        "dp": 8,
        "Image": "dbzfan/img/Goku_(Super)_Super_Saiyan_God_Super_Saiyan.png"
    },
    {
        "name": "Goku (Super) Ultra Instinct",
        "dp": 9,
        "Image": "dbzfan/img/Goku_(Super)_Ultra_Instinct.png"
    },
    {
        "name": "Goku (Super) Ultra Instinct -Sign-",
        "dp": 8,
        "Image": "dbzfan/img/Goku_(Super)_Ultra_Instinct_-Sign-.png"
    },
    {
        "name": "Goku (Teen)",
        "dp": 3,
        "Image": "dbzfan/img/Goku_(Teen).png"
    },
    {
        "name": "Goku (Z - Early)",
        "dp": 4,
        "Image": "dbzfan/img/Goku_(Z_-_Early).png"
    },
    {
        "name": "Goku (Z - End)",
        "dp": 5,
        "Image": "dbzfan/img/Goku_(Z_-_End).png"
    },
    {
        "name": "Goku (Z - End) Super Saiyan",
        "dp": 6,
        "Image": "dbzfan/img/Goku_(Z_-_End)_Super_Saiyan.png"
    },
    {
        "name": "Goku (Z - End) Super Saiyan 2",
        "dp": 6,
        "Image": "dbzfan/img/Goku_(Z_-_End)_Super_Saiyan_2.png"
    },
    {
        "name": "Goku (Z - End) Super Saiyan 3",
        "dp": 7,
        "Image": "dbzfan/img/Goku_(Z_-_End)_Super_Saiyan_3.png"
    },
    {
        "name": "Goku (Z - Mid)",
        "dp": 5,
        "Image": "dbzfan/img/Goku_(Z_-_Mid).png"
    },
    {
        "name": "Goku (Z - Mid) Super Saiyan",
        "dp": 6,
        "Image": "dbzfan/img/Goku_(Z_-_Mid)_Super_Saiyan.png"
    },
    {
        "name": "Goku Black",
        "dp": 5,
        "Image": "dbzfan/img/Goku_Black.png"
    },
    {
        "name": "Goku Black Super Saiyan Rose",
        "dp": 8,
        "Image": "dbzfan/img/Goku_Black_Super_Saiyan_Rose.png"
    },
    {
        "name": "Golden Frieza",
        "dp": 8,
        "Image": "dbzfan/img/Golden_Frieza.png"
    },
    {
        "name": "Goten",
        "dp": 4,
        "Image": "dbzfan/img/Goten.png"
    },
    {
        "name": "Goten Super Saiyan",
        "dp": 5,
        "Image": "dbzfan/img/Goten_Super_Saiyan.png"
    },
    {
        "name": "Gotenks",
        "dp": 6,
        "Image": "dbzfan/img/Gotenks.png"
    },
    {
        "name": "Gotenks Super Saiyan",
        "dp": 7,
        "Image": "dbzfan/img/Gotenks_Super_Saiyan.png"
    },
    {
        "name": "Gotenks Super Saiyan 3",
        "dp": 8,
        "Image": "dbzfan/img/Gotenks_Super_Saiyan_3.png"
    },
    {
        "name": "Great Ape Baby (GT)",
        "dp": 7,
        "Image": "dbzfan/img/Great_Ape_Baby_(GT).png"
    },
    {
        "name": "Great Ape Vegeta",
        "dp": 5,
        "Image": "dbzfan/img/Great_Ape_Vegeta.png"
    },
    {
        "name": "Great Saiyaman",
        "dp": 4,
        "Image": "dbzfan/img/Great_Saiyaman.png"
    },
    {
        "name": "Guldo",
        "dp": 2,
        "Image": "dbzfan/img/Guldo.png"
    },
    {
        "name": "Hirudegarn",
        "dp": 6,
        "Image": "dbzfan/img/Hirudegarn.png"
    },
    {
        "name": "Hit",
        "dp": 8,
        "Image": "dbzfan/img/Hit.png"
    },
    {
        "name": "Janemba",
        "dp": 5,
        "Image": "dbzfan/img/Janemba.png"
    },
    {
        "name": "Jeice",
        "dp": 3,
        "Image": "dbzfan/img/Jeice.png"
    },
    {
        "name": "Jiren",
        "dp": 8,
        "Image": "dbzfan/img/Jiren.png"
    },
    {
        "name": "Jiren Full Power",
        "dp": 9,
        "Image": "dbzfan/img/Jiren_Full_Power.png"
    },
    {
        "name": "Kakunsa",
        "dp": 5,
        "Image": "dbzfan/img/Kakunsa.png"
    },
    {
        "name": "Kale",
        "dp": 5,
        "Image": "dbzfan/img/Kale.png"
    },
    {
        "name": "Kale Super Saiyan",
        "dp": 6,
        "Image": "dbzfan/img/Kale_Super_Saiyan.png"
    },
    {
        "name": "Kale Super Saiyan (Berserk)",
        "dp": 7,
        "Image": "dbzfan/img/Kale_Super_Saiyan_(Berserk).png"
    },
    {
        "name": "Kefla",
        "dp": 6,
        "Image": "dbzfan/img/Kefla.png"
    },
    {
        "name": "Kefla Super Saiyan",
        "dp": 7,
        "Image": "dbzfan/img/Kefla_Super_Saiyan.png"
    },
    {
        "name": "Kefla Super Saiyan 2",
        "dp": 8,
        "Image": "dbzfan/img/Kefla_Super_Saiyan_2.png"
    },
    {
        "name": "Kid Buu",
        "dp": 7,
        "Image": "dbzfan/img/Kid_Buu.png"
    },
    {
        "name": "King Cold",
        "dp": 4,
        "Image": "dbzfan/img/King_Cold.png"
    },
    {
        "name": "Krillin",
        "dp": 3,
        "Image": "dbzfan/img/Krillin.png"
    },
    {
        "name": "Lord Slug",
        "dp": 4,
        "Image": "dbzfan/img/Lord_Slug.png"
    },
    {
        "name": "Lord Slug Giant Form",
        "dp": 6,
        "Image": "dbzfan/img/Lord_Slug_Giant_Form.png"
    },
    {
        "name": "Majin Buu",
        "dp": 6,
        "Image": "dbzfan/img/Majin_Buu.png"
    },
    {
        "name": "Majin Buu (Evil)",
        "dp": 6,
        "Image": "dbzfan/img/Majin_Buu_(Evil).png"
    },
    {
        "name": "Majin Vegeta",
        "dp": 7,
        "Image": "dbzfan/img/Majin_Vegeta.png"
    },
    {
        "name": "Majuub (GT)",
        "dp": 6,
        "Image": "dbzfan/img/Majuub_(GT).png"
    },
    {
        "name": "Master Roshi",
        "dp": 2,
        "Image": "dbzfan/img/Master_Roshi.png"
    },
    {
        "name": "Master Roshi Max Power",
        "dp": 2,
        "Image": "dbzfan/img/Master_Roshi_Max_Power.png"
    },
    {
        "name": "Mecha Frieza",
        "dp": 6,
        "Image": "dbzfan/img/Mecha_Frieza.png"
    },
    {
        "name": "Metal Cooler",
        "dp": 7,
        "Image": "dbzfan/img/Metal_Cooler.png"
    },
    {
        "name": "Mr. Satan",
        "dp": 1,
        "Image": "dbzfan/img/Mr._Satan.png"
    },
    {
        "name": "Nail",
        "dp": 4,
        "Image": "dbzfan/img/Nail.png"
    },
    {
        "name": "Nappa",
        "dp": 3,
        "Image": "dbzfan/img/Nappa.png"
    },
    {
        "name": "Omega Shenron (GT)",
        "dp": 8,
        "Image": "dbzfan/img/Omega_Shenron_(GT).png"
    },
    {
        "name": "Pan (GT)",
        "dp": 3,
        "Image": "dbzfan/img/Pan_(GT).png"
    },
    {
        "name": "Perfect Cell",
        "dp": 7,
        "Image": "dbzfan/img/Perfect_Cell.png"
    },
    {
        "name": "Piccolo",
        "dp": 4,
        "Image": "dbzfan/img/Piccolo.png"
    },
    {
        "name": "Piccolo (Fused With Kami)",
        "dp": 5,
        "Image": "dbzfan/img/Piccolo_(Fused_With_Kami).png"
    },
    {
        "name": "Raditz",
        "dp": 3,
        "Image": "dbzfan/img/Raditz.png"
    },
    {
        "name": "Recoome",
        "dp": 3,
        "Image": "dbzfan/img/Recoome.png"
    },
    {
        "name": "Ribrianne",
        "dp": 5,
        "Image": "dbzfan/img/Ribrianne.png"
    },
    {
        "name": "Roasie",
        "dp": 5,
        "Image": "dbzfan/img/Roasie.png"
    },
    {
        "name": "Saibaman",
        "dp": 2,
        "Image": "dbzfan/img/Saibaman.png"
    },
    {
        "name": "Spopovich",
        "dp": 2,
        "Image": "dbzfan/img/Spopovich.png"
    },
    {
        "name": "Super Baby 1 (GT)",
        "dp": 6,
        "Image": "dbzfan/img/Super_Baby_1_(GT).png"
    },
    {
        "name": "Super Baby 2 (GT)",
        "dp": 7,
        "Image": "dbzfan/img/Super_Baby_2_(GT).png"
    },
    {
        "name": "Super Buu",
        "dp": 6,
        "Image": "dbzfan/img/Super_Buu.png"
    },
    {
        "name": "Super Buu Gohan Absorbed",
        "dp": 7,
        "Image": "dbzfan/img/Super_Buu_Gohan_Absorbed.png"
    },
    {
        "name": "Super Buu Gotenks Absorbed",
        "dp": 7,
        "Image": "dbzfan/img/Super_Buu_Gotenks_Absorbed.png"
    },
    {
        "name": "Super Garlic Jr.",
        "dp": 4,
        "Image": "dbzfan/img/Super_Garlic_Jrpng"
    },
    {
        "name": "Super Gogeta (Z)",
        "dp": 8,
        "Image": "dbzfan/img/Super_Gogeta_(Z).png"
    },
    {
        "name": "Super Janemba",
        "dp": 7,
        "Image": "dbzfan/img/Super_Janemba.png"
    },
    {
        "name": "Super Trunks",
        "dp": 6,
        "Image": "dbzfan/img/Super_Trunks.png"
    },
    {
        "name": "Super Vegeta",
        "dp": 6,
        "Image": "dbzfan/img/Super_Vegeta.png"
    },
    {
        "name": "Super Vegito",
        "dp": 8,
        "Image": "dbzfan/img/Super_Vegito.png"
    },
    {
        "name": "Super Zarbon",
        "dp": 3,
        "Image": "dbzfan/img/Super_Zarbon.png"
    },
    {
        "name": "Syn Shenron (GT)",
        "dp": 7,
        "Image": "dbzfan/img/Syn_Shenron_(GT).png"
    },
    {
        "name": "Tapion",
        "dp": 4,
        "Image": "dbzfan/img/Tapion.png"
    },
    {
        "name": "Tien",
        "dp": 4,
        "Image": "dbzfan/img/Tien.png"
    },
    {
        "name": "Toppo",
        "dp": 7,
        "Image": "dbzfan/img/Toppo.png"
    },
    {
        "name": "Toppo God of Destruction",
        "dp": 8,
        "Image": "dbzfan/img/Toppo_God_of_Destruction.png"
    },
    {
        "name": "Trunks (Kid)",
        "dp": 4,
        "Image": "dbzfan/img/Trunks_(Kid).png"
    },
    {
        "name": "Trunks (Kid) Super Saiyan",
        "dp": 5,
        "Image": "dbzfan/img/Trunks_(Kid)_Super_Saiyan.png"
    },
    {
        "name": "Trunks (Melee)",
        "dp": 5,
        "Image": "dbzfan/img/Trunks_(Melee).png"
    },
    {
        "name": "Trunks (Melee) Super Saiyan",
        "dp": 6,
        "Image": "dbzfan/img/Trunks_(Melee)_Super_Saiyan.png"
    },
    {
        "name": "Trunks (Sword)",
        "dp": 4,
        "Image": "dbzfan/img/Trunks_(Sword).png"
    },
    {
        "name": "Trunks (Sword) Super Saiyan",
        "dp": 6,
        "Image": "dbzfan/img/Trunks_(Sword)_Super_Saiyan.png"
    },
    {
        "name": "Turles",
        "dp": 4,
        "Image": "dbzfan/img/Turles.png"
    },
    {
        "name": "Ultimate Gohan",
        "dp": 7,
        "Image": "dbzfan/img/Ultimate_Gohan.png"
    },
    {
        "name": "Uub (GT)",
        "dp": 4,
        "Image": "dbzfan/img/Uub_(GT).png"
    },
    {
        "name": "Vegeta (GT) Super Saiyan 4",
        "dp": 8,
        "Image": "dbzfan/img/Vegeta_(GT)_Super_Saiyan_4.png"
    },
    {
        "name": "Vegeta (Super)",
        "dp": 5,
        "Image": "dbzfan/img/Vegeta_(Super).png"
    },
    {
        "name": "Vegeta (Super) Super Saiyan",
        "dp": 6,
        "Image": "dbzfan/img/Vegeta_(Super)_Super_Saiyan.png"
    },
    {
        "name": "Vegeta (Super) Super Saiyan God",
        "dp": 7,
        "Image": "dbzfan/img/Vegeta_(Super)_Super_Saiyan_God.png"
    },
    {
        "name": "Vegeta (Super) Super Saiyan God Super Saiyan",
        "dp": 8,
        "Image": "dbzfan/img/Vegeta_(Super)_Super_Saiyan_God_Super_Saiyan.png"
    },
    {
        "name": "Vegeta (Z - Early)",
        "dp": 5,
        "Image": "dbzfan/img/Vegeta_(Z_-_Early).png"
    },
    {
        "name": "Vegeta (Z - Early) Super Saiyan",
        "dp": 6,
        "Image": "dbzfan/img/Vegeta_(Z_-_Early)_Super_Saiyan.png"
    },
    {
        "name": "Vegeta (Z - End)",
        "dp": 5,
        "Image": "dbzfan/img/Vegeta_(Z_-_End).png"
    },
    {
        "name": "Vegeta (Z - End) Super Saiyan",
        "dp": 6,
        "Image": "dbzfan/img/Vegeta_(Z_-_End)_Super_Saiyan.png"
    },
    {
        "name": "Vegeta (Z - End) Super Saiyan 2",
        "dp": 6,
        "Image": "dbzfan/img/Vegeta_(Z_-_End)_Super_Saiyan_2.png"
    },
    {
        "name": "Vegeta (Z - Scouter)",
        "dp": 4,
        "Image": "dbzfan/img/Vegeta_(Z_-_Scouter).png"
    },
    {
        "name": "Vegito",
        "dp": 7,
        "Image": "dbzfan/img/Vegito.png"
    },
    {
        "name": "Vegito Super Saiyan God Super Saiyan",
        "dp": 10,
        "Image": "dbzfan/img/Vegito_Super_Saiyan_God_Super_Saiyan.png"
    },
    {
        "name": "Videl",
        "dp": 2,
        "Image": "dbzfan/img/Videl.png"
    },
    {
        "name": "Whis",
        "dp": 10,
        "Image": "dbzfan/img/Whis.png"
    },
    {
        "name": "Yajirobe",
        "dp": 2,
        "Image": "dbzfan/img/Yajirobe.png"
    },
    {
        "name": "Yamcha",
        "dp": 3,
        "Image": "dbzfan/img/Yamcha.png"
    },
    {
        "name": "Zamasu",
        "dp": 5,
        "Image": "dbzfan/img/Zamasu.png"
    },
    {
        "name": "Zarbon",
        "dp": 3,
        "Image": "dbzfan/img/Zarbon.png"
    }
];

// Event listeners
document.getElementById('randomButton').addEventListener('click', () => {
    displayRandomCharacters(characters);
});

document.getElementById('randomDPButton').addEventListener('click', () => {
    displayRandomCharactersWithDP(characters, 15);
});

document.getElementById('resetButton').addEventListener('click', resetCharacters);

// Display random characters
function displayRandomCharacters(characters) {
    const characterTableBody = document.getElementById('characterTableBody');
    characterTableBody.innerHTML = '';

    const randomCharacters = getUniqueRandomItems(characters, 5);
    let totalDP = 0;

    randomCharacters.forEach(character => {
        characterTableBody.appendChild(createCharacterRow(character));
        totalDP += character.dp;
    });

    // Update the total DP in the table footer
    updateTotalDP(totalDP);
}

// Display random characters with max DP of 15
function displayRandomCharactersWithDP(characters, maxDP) {
    const characterTableBody = document.getElementById('characterTableBody');
    characterTableBody.innerHTML = '';

    let totalDP = 0;
    const selectedCharacters = [];
    const maxIterations = 100; // Limit the number of iterations to prevent an infinite loop
    let iterations = 0;

    // Shuffle the characters array for randomness
    const shuffledCharacters = [...characters].sort(() => 0.5 - Math.random());

    // Iterate over the shuffled characters to select those within the DP limit
    for (let i = 0; i < shuffledCharacters.length && totalDP < maxDP && iterations < maxIterations; i++) {
        const character = shuffledCharacters[i];
        if (totalDP + character.dp <= maxDP) {
            selectedCharacters.push(character);
            totalDP += character.dp;
        }
        iterations++;
    }

    // Display the selected characters
    selectedCharacters.forEach(character => {
        characterTableBody.appendChild(createCharacterRow(character));
    });

    // Update the total DP in the table footer
    updateTotalDP(totalDP);
}

// Reset character list with animation
function resetCharacters() {
    const characterTableBody = document.getElementById('characterTableBody');
    // Add fade-out effect
    characterTableBody.classList.add('fade-out');
    setTimeout(() => {
        characterTableBody.innerHTML = ''; // Clear character list
        characterTableBody.classList.remove('fade-out'); // Remove fade-out class
        updateTotalDP(0); // Reset total DP to 0
    }, 500);
}

// Helper function: Get unique random items
function getUniqueRandomItems(array, count) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Helper function: Create character row for table
function createCharacterRow(character) {
    const tr = document.createElement('tr');
    tr.className = 'text-center';

    // Create image cell
    const imgTd = document.createElement('td');
    const img = document.createElement('img');
    img.src = character.Image;
    img.alt = character.name;
    img.className = 'w-20 h-20 rounded-full mx-auto';
    imgTd.className = 'p-4 border-b';
    imgTd.appendChild(img);

    // Create name cell
    const nameTd = document.createElement('td');
    nameTd.textContent = character.name;
    nameTd.className = 'p-4 border-b font-semibold';

    // Create DP cell
    const dpTd = document.createElement('td');
    dpTd.textContent = character.dp;
    dpTd.className = 'p-4 border-b';

    // Append cells to row
    tr.appendChild(imgTd);
    tr.appendChild(nameTd);
    tr.appendChild(dpTd);

    return tr;
}

// Helper function: Update total DP in the table footer
function updateTotalDP(totalDP) {
    const totalDPCell = document.getElementById('totalDPCell');
    totalDPCell.textContent = totalDP;
}
