export const descriptor = {};

descriptor .enumerable = true;

descriptor .value = function cast ( { name, type, attributes, markup, interactions, reaction } ) {

const play = this;
const character = document .appendChild (

document .createElement ( 'template' )

);

if ( typeof markup === 'string' )
character .innerHTML = markup;

customElements .define (

name,
class extends HTMLElement {

constructor () {

super ();

const actor = this;
const shadow = actor .attachShadow ( { mode: 'open' } );

shadow .appendChild (

character .content .cloneNode ( true )

);

actor .addEventListener ( 'play-action', act, false );

}

}

);

return character;

};
