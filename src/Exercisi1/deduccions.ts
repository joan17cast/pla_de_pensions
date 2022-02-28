import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// TODO Ficar loops i comprovacions.

// * Llogica

function getTramRetencio(salariAnual:number): number {
  if (salariAnual < 12450) return 19;
  if (salariAnual > 300000) return 47;
  const listVaremRet = [[12450, 20200], [20200, 35200], [35200, 60000], [60000, 300000]];
  const trams = [24, 30, 37, 45];
  let index:number = 0;
  index = listVaremRet.findIndex((varem) => varem[0] >= salariAnual && salariAnual <= varem[1]);
  index -= 1;
  return trams[index];
}

function calculDesgravat(salariAnual:number, aportacio:number) {
  const tramRetencio:number = getTramRetencio(salariAnual);
  const desgravacio = (aportacio * tramRetencio) / 100;
  console.log(`Els diners desgravats son  ${desgravacio}`);
}

// * Plans!

function plaPersonaFisica() {
  rl.question('Quants diners has guanyat aquest any? (€ bruts anuals) ', (awSalariAnual:String) => {
    const salariAnual:number = +awSalariAnual;
    rl.question('Quants diners aportaràs al pla de persona física? ', (awAportacio:String) => {
      const aportacio:number = +awAportacio;
      calculDesgravat(salariAnual, aportacio);
    });
  });
}

function plaEmpresarial() {
  rl.question('Quants diners has guanyat aquest any? (€ bruts anuals) ', (awSalariAnual:String) => {
    const salariAnual:number = +awSalariAnual;
    rl.question('Quants diners aportaràs al pla empresarial? ', (awAportacio:String) => {
      const aportacio:number = +awAportacio;
      calculDesgravat(salariAnual, aportacio);
    });
  });
}

function plaAmbos() {
  rl.question('Quants diners has guanyat aquest any? (€ bruts anuals) ', (awSalariAnual:String) => {
    const salariAnual:number = +awSalariAnual;
    rl.question('Quants diners aportaràs al pla de persona física? ', (awAportacioPF:String) => {
      const aportacioPF:number = +awAportacioPF;
      rl.question('Quants diners aportaràs al pla empresarial? ', (awAportacioE:String) => {
        const aportacioE:number = +awAportacioE;
        calculDesgravat(salariAnual, aportacioE + aportacioPF);
      });
    });
  });
}

// * Menu principal

rl.question('Selecciona pla d\'inversio al que vas a aportar \n 1. Pla de pensions de persona física \n 2. Pla de pensions empresarials \n 3. Els dos \n ->', (menu:String) => {
  const n:number = +menu;
  console.log(n);
  switch (n) {
    case 1:
      plaPersonaFisica();
      break;
    case 2:
      plaEmpresarial();
      break;
    case 3:
      plaAmbos();
      break;
    default:
      console.log('Error a l\'entrar l\'opció al menú!');
      break;
  }
});
