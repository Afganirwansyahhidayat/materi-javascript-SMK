const dataSiswa = ['Afgan', 'Rizal', 'Dean', 'Shulton'];
const dataGuru = ['Ayu', 'Rizky', 'Dian', 'Dinda'];

const allData = [...dataSiswa, ...dataGuru];

console.log(allData);

const numbers = [1, 2, 3];
const [first, ...rest] = numbers;
console.log(rest);


// jQuery("#worksheet-preview").worksheetPreview("validation",{clicked:!1,showAnswers:!0,showRightAnswers:!0});