function noturnMode() {
  return new Promise((resolve, reject) => {
    const hour = 19 //new Date().getHours();

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








function imprimir(calback) {
  setTimeout(() => {
    return calback("nome");
  }, 3000);
}

//imprimir((nome) => {
//  console.log(nome);
//});
