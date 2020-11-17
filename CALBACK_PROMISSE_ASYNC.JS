//criando a promisse
function noturnMode() {
  return new Promise((resolve, reject) => {
    const hour = 11; //new Date().getHours();

    if (hour >= 18 || hour <= 6) {
      resolve({
        status: true,
      });
    } else {
      reject({
        status: false,
      });
    }
  });
}

//criando uma nova promisse
function checkMode(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        mensage: "modo noturno ativado",
      });
    } else {
      reject({
        mensage: "modo noturno não pode ser ativado este horário",
      });
    }
  });
}

//criando uma função que chama as dua promisses criadas
//e rosolve elas com  Async Await
async function activeNotunrMode() {
  try {
    const resultStatus = await noturnMode();

    const resultMensage = await checkMode(resultStatus.status);
    console.log(resultMensage.mensage);
  } catch (error) {
    console.log("erro: " + error);
  }
}

activeNotunrMode();
/// todo codigo acima tem referencia de um video
/// falando de promisse do codigo fonte

//exemplo (calback)
function numeroSorte(array) {
  console.log(`Os números da sorte são: ` + array);
}

function imprimir(calback) {
  let array = new Array();
  while (array.length < 6) {
    let numero = Math.random() * (60 - 1) + 1;
    array.push(numero.toFixed(0));
  }
  calback(array);
}

imprimir(numeroSorte);
