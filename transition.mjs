export default function transition ( scene ) {

const play = this;

if ( typeof scene .cue === 'string' || typeof scene .cue === 'number' )
play .dispatchEvent (

new CustomEvent ( scene .cue, { detail: scene } )

);

};
