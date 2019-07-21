//Function that hide section with id
const hideSection = (id) => {
    document.getElementById(id).classList.add('hide');
};
//Function that show section with id
const showSection = (id) => {
    document.getElementById(id).classList.remove('hide');
};