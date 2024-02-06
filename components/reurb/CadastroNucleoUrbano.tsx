export default function CadastroNucleoUrbano() {
//   var editais = [];

//   function pegandoEditais() {
//     for (let i = 0; i < 1; i++) {
//       const url = pegarDados(
//         `https://docs.google.com/spreadsheets/d/1aVl46pWE7jgt4Pywz4URx7DiPFC7yQRujEp4YXgen0w/edit#gid=430563898`
//       );
//     }
//   }
//   pegandoEditais();

//   function pegarDados(endereco) {
//     fetch(endereco)
//       .then((resp) => resp.text())
//       .then(function (data) {
//         ver.innerHTML = data;

//         var editais = [];
//         var corpoLicita = document.querySelectorAll("tbody tr");

//         const marilia = corpoLicita[4].querySelectorAll("td")[6].innerHTML;
//         const simone = corpoLicita[5].querySelectorAll("td")[6].innerHTML;
//         const votoManu = corpoLicita[6].querySelectorAll("td")[6].innerHTML;
//         const andreiaDoBarro =
//           corpoLicita[7].querySelectorAll("td")[6].innerHTML;
//         const cleiaFelix = corpoLicita[8].querySelectorAll("td")[6].innerHTML;
//         const leonoraR = corpoLicita[9].querySelectorAll("td")[6].innerHTML;
//         const nagilaReis = corpoLicita[10].querySelectorAll("td")[6].innerHTML;
//         const waldierCabra =
//           corpoLicita[11].querySelectorAll("td")[6].innerHTML;
//         const aldairdaia = corpoLicita[12].querySelectorAll("td")[6].innerHTML;
//         const didi = corpoLicita[13].querySelectorAll("td")[6].innerHTML;
//         const total = corpoLicita[14].querySelectorAll("td")[6].innerHTML;

//         const resultadoParcial = [
//           { MARÍLIA: marilia },
//           { SIMONE: simone },
//           { MANUPERES: votoManu },
//           { ANDRÉIADOBARRO: andreiaDoBarro },
//           { CLÉIAFELIX: cleiaFelix },
//           { LEONORARABELO: leonoraR },
//           { NÁGILAREIS: nagilaReis },
//           { WALDIERCABRA: waldierCabra },
//           { ALDAIRDAIA: aldairdaia },
//           { EUDIRENEDIDI: didi },
//           { total: total },
//         ];

//         localStorage.setItem("votos", JSON.stringify(resultadoParcial));

//         document.querySelector("#ver").style.display = "none";
//         //console.log(resultadoParcial)
//       })

//       .catch(function (error) {
//         console.log(error);
//       });
//   }

  return (
    <>
      <form action="" method="post">
        <input type="text" name="" id="" />
      </form>
    </>
  );
}
