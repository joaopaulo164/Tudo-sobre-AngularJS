/**
 * Created by john on 01/04/2016.
 */

/*angular.module("listaTelefonica").value("config", {
    baseUrl: "http://localhost:3412"
});*/

/* .constant permite injetar a dependência config em um provider como no arquivo serialGeneratorService.js
* Provider são serviços pré-configurados e possuem um ciclo de vida anterior ao da instanciação*/
angular.module("listaTelefonica").constant("config", {
    baseUrl: "http://localhost:3412"
});
