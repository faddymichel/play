export default play => {

const Character = class Character extends HTMLElement {

constructor () {

super ();

Object .defineProperty ( this, 'play', {

enumerable: true,
value: play

} );

}

connectedCallback () {

const character = this;

play .dispatchEvent (

new CustomEvent ( 'character-intro',

);
}

intro () {

const character = this;

}

interact ( ... interactions ) {

const character = this;

for ( const interaction of interactions )
character .addEventListener ( interaction, character .play, false );

}

perform ( ... performances ) {

const character = this;

for ( const performance of performances )

if ( typeof performance === 'function' )
character .play .addEventListener ( character .cue, performance, false );

}

};

return Character;

};
