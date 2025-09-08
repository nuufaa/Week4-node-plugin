import chalk from "chalk";
import cowsay from "cowsay";
import figlet from "figlet";
import dayjs from "dayjs";
import boxen from "boxen";

const nama = "Fitri Nufa Dastana";
const nim = "F1D02310052";

const pinkMuda = chalk.hex("#FFB6C1");
const hijauMuda = chalk.hex("#90EE90");

// 1️⃣ Nama dan NIM
console.log(pinkMuda.bold("Nama - NIM: ") + pinkMuda(`${nama} - ${nim}`));

// 2️⃣ Pesan motivasi 
console.log(
  hijauMuda(
    cowsay.say({
      text: "Semangat semua!",
      f: "tux"
    })
  )
);

// 3️⃣ Nama dalam ASCII art 
figlet(nama, (err, data) => {
  if (err) {
    console.log("Figlet error:", err);
    return;
  }
  console.log(pinkMuda(data));
});

// 4️⃣ Waktu sekarang 
const now = dayjs().format("dddd, DD MMMM YYYY HH:mm:ss");
console.log(
  boxen(chalk.green(`Waktu sekarang: ${now}`), {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "cyan",
  })
);