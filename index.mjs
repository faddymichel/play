import establishment from './establishment.mjs';

export default function Play ( script ) {

return Object .setPrototypeOf (

Scenarist (

establishment .bind ( script )

),
Object .defineProperties (

Object .create (

new EventTarget ()

), {



}

)

);

};
