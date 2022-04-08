import Texto from "../../../shared/Texto/Texto";

const TextosSobre = (props) => {
  if (props.id === "1") {
    return (
      <Texto tipo="paragrafo" class="cinza">
        A mee é uma empresa que se preocupa com o bem-estar das pessoas.
        <br />
        <br />
        Nossos produtos são pensados principalmente para ambientes internos que
        proporcionam conforto ao seu lar. Nossas plantinhas são de espécies que
        requerem poucos cuidados visando pessoas que querem ter muito verde
        dentro de casa aliando ao aspecto estético e decorativo. Se você não tem
        muito espaço e nem tempo para tarefas mais complexas de jardinagem pode
        contar com a gente que vamos lhe ajudar nessa tarefa.
      </Texto>
    );
  } else {
    return (
      <Texto tipo="paragrafo" class="cinza">
        No meio da floresta amazônica. Um momento de beleza incomparável, em uma
        única noite do ano, sem qualquer aviso acontece um fenômeno.
        <br />
        <br />
        Esse momento que Margaret Mee perseguiu para conseguir registrar o
        desabrochar da Flor da Lua que acontece em um cacto raro.
        <br />
        <br />
        A busca incansável por esse momento mostra a paixão que Mee tinha por
        sua profissão. É essa mulher, botânica do século XX quem homenageamos
        com o nome da nossa empresa.
        <br />
        <br />
        Muito antes do ambientalismo ser uma bandeira a ser levantada e os
        problemas do desmatamento da Amazônia estarem em todos os jornais e de
        conhecimento público, essa mulher talentosa e extremamente engajada
        colocou o holofote sobre a questão.
      </Texto>
    );
  }
};

export default TextosSobre;
