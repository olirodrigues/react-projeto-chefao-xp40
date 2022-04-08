import Texto from "../../../../shared/Texto/Texto";

const TextosBlog = ({ id }) => {
  if (id === "1") {
    return (
      <Texto tipo="paragrafo" class="cinza-escuro">
        Você já pensou em adicionar mais verde na sua casa? E não estamos
        falando de pintura, e sim de incluir uma plantinha em sua decoração!
        Esta é uma maneira muito simples e prazerosa de oferecer mais aconchego,
        energia e ar puro ao ambiente sem maiores investimentos,
        independentemente se o seu cantinho for uma casa espaçosa ou um pequeno
        apartamento.
        <br />
        <br />O legal de decorar com plantas é a grande diversidade delas, além
        dos inúmeros benefícios que carregam. Assim você pode colocar na sua
        sala, cozinha, quarto, banheiro a folhagem que mais combina com o estilo
        da sua casa e com seu gosto. Mas é preciso saber a necessidade das
        plantinhas. Será que fica melhor para ela ficar perto da janela ou em
        lugares de pouca luz solar ? Qual vaso combina mais ? Quantas vezes devo
        reguar ? São essas e outras perguntas que devemos nos questionar ao
        adotar plantas em nossos cômodos. Mas de uma coisa eu garanto, elas nos
        trazem sensação de ar limpo, aconchego, estimula nossa concetração e a
        criatividade.
      </Texto>
    );
  } else if (id === "2") {
    return (
      <Texto tipo="paragrafo" class="cinza-escuro">
        Um ambiente externo merece tanto cuidado com a decoração quanto uma área
        interna. E nada melhor do que espaços verdes e jardins bem cuidados para
        otimizar esses tipos de ambientes. Seja um jardim grande ou pequeno, é
        preciso pensar em soluções e elementos-chave para compor a área, como
        plantas, vasos, mobiliários, pedras e outros acessórios para aproveitar
        o tempo ao ar livre, reunir os amigos ou simplesmente, relaxar.
        <br />
        <br />
        Um tipo de planta ideal para ambientes externos são os cactos.
        Juntamente com as suculentas, que têm feito sucesso ultimamente no
        paisagismo, eles precisam de pouca água e aguentam muitas horas de
        iluminação direta. Existem vários tipos e tamanhos de cactos e
        suculentas e você pode montar um jardim do modo que preferir. A rega
        acontece a cada sete ou dez dias, mas no caso do inverno, você pode
        colocar água uma vez a cada três semanas.
      </Texto>
    );
  } else {
    return (
      <Texto tipo="paragrafo" class="cinza-escuro">
        O cultivo de produtos hortícolas é uma prática cada vez mais comum por
        parte das pessoas, ate mesmo nas grandes cidades. A maioria dessas
        espécies vegetais aprecia o cultivo ao sol pleno, por isso é
        interessante que o posicionamento de sua horta (seja em jardim, terraço,
        varanda) seja atingida pelo sol do nascente e do poente, de forma que a
        planta receba uma quantidade mínima de 04 horas de exposição solar.
        <br />
        <br />
        As plantas hortícolas são aquelas que podem ser cultivadas em hortas de
        pequeno porte, em varandas, terraços, jardins. São elas de fácil cultivo
        e que alimenta muita gente por ai. Algumas espécies conhecidas como
        tomate, pimentas, pimentão, alface, rúcula, ervas aromáticas,
        condimentos, entre outros legumes, verduras e frutas. Colher essas
        espécies vegetais fresquinhas e saudáveis fazem toda a diferença para o
        consumo das pessoas. São plantas que dão o toque final em alguma receita
        ou até mesmo cura o mal estar. São passadas de geração a geração junto
        com seus segredos culinários e receita médica
      </Texto>
    );
  }
};

export default TextosBlog;
