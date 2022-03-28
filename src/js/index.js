/* Quando clicar no pokemon da listagem temos que ensconder o cartão pokémon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem

Para isso temos que trabalhar com dois elementos 
1 - Listagem
2 - Cartão do pokemon 

Precisamos criar duas variaveis no JS para trabalhar com os elementos da tela

Vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémons

- Remover a classe aberto só do cartão que está aberto
- Ao clicar em um pokémon da listagem pegamos o id desse pokémon para saber qual cartão mostrar
- Remover a classe ativo que marca o pokémon selecionado 
- Adicionar a classe ativo no item da lista selecionado */


// Precisamos criar duas variaveis no JS para trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')


listaSelecaoPokemons.forEach(pokemon => {
    // Vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémons

    pokemon.addEventListener('click', () => {
        // - Remover a classe aberto só do cartão que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        // - Ao clicar em um pokémon da listagem pegamos o id desse pokémon para saber qual cartão mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        // - Remover a classe ativo que marca o pokémon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        // - Adicionar a classe ativo no item da lista selecionado 
        const idPokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        idPokemonSelecionadoNaListagem.classList.add('ativo')
    })
})



