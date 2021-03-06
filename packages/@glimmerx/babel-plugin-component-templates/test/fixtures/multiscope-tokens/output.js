import { setComponentTemplate as _setComponentTemplate } from "@glimmer/core";
import Component from '@glimmerx/component';
import OtherComponent from './OtherComponent';
import PhantomComponent from './PhantomComponent';
import SecondPhantomComponent from './SecondPhantomComponent';

class MyComponent extends Component {}

_setComponentTemplate({
  "id": "k3C9+Wms",
  "block": "[[[1,\"\\n    \"],[10,\"h1\"],[12],[1,\"Hello world \\n\"],[6,[32,0],null,null,[[\"default\"],[[[[1,\"            \"],[8,[30,1],null,null,null],[1,\"\\n            \"],[1,[30,1]],[1,\"\\n\"]],[1]]]]],[1,\"        \"],[8,[32,1],null,null,null],[1,\"\\n    \"],[13]],[\"SecondPhantomComponent\"],false,[]]",
  "moduleName": "(unknown template module)",
  "scope": () => [OtherComponent, SecondPhantomComponent],
  "isStrictMode": true
}, MyComponent)
