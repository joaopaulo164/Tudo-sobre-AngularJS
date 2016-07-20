/**
 * Created by john on 01/04/2016.
 */

/*angular.module("listaTelefonica").value("config", {
    baseUrl: "http://localhost:3412"
});*/

/* .constant permite injetar a depend�ncia config em um provider como no arquivo serialGeneratorService.js
* Provider s�o servi�os pr�-configurados e possuem um ciclo de vida anterior ao da instancia��o*/
angular.module("listaTelefonica").constant("config", {
    baseUrl: "http://localhost:3412"
});
