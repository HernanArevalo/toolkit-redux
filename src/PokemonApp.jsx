import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemons } from './store/slices/pokemon/thunks';

export const PokemonApp = () => {

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch( getPokemons() );


  }, [])
  


  return (
    <>
        <h1>PokemonApp</h1>
        <hr />
        <span>Loading: { true? 'True': 'False'}</span>
        <ul>
          {/* { pokemons.map } */}
            <li>Hola</li>
            <li>Hola</li>
            <li>Hola</li>
        </ul>

        <button
          // disabled = { isLoading }
          // onClick={ () => { getPokemons(page) }}
        >
          Next
        </button>

    </>
  )
}
