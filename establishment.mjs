export default function establishment ( scene ) {

const script = this;

scene .conflict = script;

const [ action ] = scene .order;

if ( ! ( action instanceof Event ) || typeof action .currentTarget .dataset .playAction === 'string' )
scene .order .unshift ( ... action .currentTarget .dataset .playAction .split ( '/' ) );

}

};
} ) () );
