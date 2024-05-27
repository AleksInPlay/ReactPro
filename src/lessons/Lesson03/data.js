export let lionData = {
    name: "Alex",
    species: "Lion",
    image: 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Lion_d%27Afrique.jpg/1879px-Lion_d%27Afrique.jpg"
};

export let zebraData = {
    name: "Marty",
    species: "Zebra",
    image: 
    "https://upload.wikimedia.org/wikipedia/commons/3/3f/Zebra_portrait.jpg"
};

export const normalizeName = (name) => {
    let newName = name.toUpperCase();
    return newName;
};
