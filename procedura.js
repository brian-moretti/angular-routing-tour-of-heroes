/*
! STEP 1 - SET ROUTING
* Importare RouterModule & Routes in app.module e settare il routing con l'array di path - component.
* Impostare la pagina 404 con **
* Impostare la pagina default con "", redirectTo, pathMatch:"full"
* Utilizzare una menu di nav con routerLink + router-outlet in app-component Template

! STEP 2 - APP.ROUTING
* Utilizzare il CLI per creare il file app.routing e spostare tutto il Routes in quel file

! STEP 3 - MODULI AGGIUNTIVI
* Creazione di Modulo aggiuntivo con comando CLI:
 ? ng generate module folder/name --module app --flat --routing
* Importare il modulo in app.module e rimuovere da questo, così come in app-routing, tutti gli import dedicati ai componenti che verranno inseriti poi nel nuovo modulo.
* Impostare il routing del nuovo modulo con il metodo forChild() e definire le varie routes
! Importare in app.module, l'app.routing come ultimo elemento dell'array imports

* Definizione parametri route con <a [routerLink]=["/path", parametro]>
* Utilizzo di un metodo per prelevare l'elemento attraverso il parametro
* Utilizzare la pipe {{ proprietà$ | async as ... }} per sfruttura l'Observable nel Template
* Utilizzo della proprietà .navigate(['path', paramteri?]) del Router per navigare tra le routes dell'app, sfruttando l'event binding
* Stessa procedura per ritornare la lista di elementi nel componente.

! Animazione:
* Importare module in app.module
* Inserire nel routing la proprietà data: {animation: "nome"}
* Creare file di animazione e importarlo in app.component insieme a ChildrenOutletContexts
* Racchiudere router-outlet in un <div> e inserire il propertybinding @trigger
 ?trigger è una proprietà codificata nel file di animazione
* Definire metodo in app.component per richiamare l'applicazione al router-outlet

! STEP 4 - CHILD ROUTE
* Definire la proprietà children nel routing implementando le route child dei componenti parent
 ? Per visualizzare i componenti child con un path vuoto è necessario inserire il router-outlet nel componente parent del routing
*

! router-outler può essere multiplo in un componente, ma deve avere un nome
* Il 1° router-outlet è prioritario. I secondari, devono avere un nome, e sono indipendenti ma allo stesso tempo cooperano con il route primario.
* Nel routing impostare la route con la proprietà outlet. Questa vuole come valore il nome attribuito all'attributo name di router-outler. Viene creato il collegamento.
* Nel template inserire il routerLink come property-binding avente come valore un oggetto
 ? [routerLink]="[{ outlets: { route-value: ['route-path'] } }]"
! Se si analizza l'url dell'app, si nota la differenza tra primary route e secondary route, visualizzata tra parentesi

! STEP 5 - ROUTE GUARDS
 ? Permette di controllare l'accesso a determinate parti dell'app
 ? Il Guard deve essere inserito nel routing
* Il guard ritorna 3 valori: true | false | UrlTree (cancella la navigazione corrente e ne inizia una nuova)

* Il guard si imposta inserendo nel routing la proprietà canActivate e come valore un array che contiene la funzione di controllo. Vedere i diversi file per la verifica. Utilizzare un service + 1 componente di redirect nel caso sia validato o meno.
* canDeactivate funziona allo stesso modo sopra. Va usato insieme insieme a resolve...o almeno così è successo nel tut

....


! STEP 6 - ASYNC ROUTING
? Quando l'applicazione è enorme impiega tempo per caricare i dati, i moduli e i componenti. Per risolvere la situazione si applica il routing asincrono, attraverso il caricamento LAZY dei moduli, in base all'utilizzo.
* Organizzare l'applicazione in moduli distinti è già un inizio per il LAZY LOADING

? Come fare il lazy
* Rimuovere dal modulo B, il routing principale che porta ad esso con stringa vuota.
* Nel routing principale, app.routing, inserire nuovo path con valore uguale a quello tolto sopra, poi inserire la proprietà LOADCHILDREN, la quale vuole una funzione che ritorna un import('url of module').then(m => m.Module)
! In questo modo il caricamento del modulo avviene solo quando questo deve essere inizializzato
* Questo permette di rimuovere qualsiasi import del modulo B in app.module

?canMatch permette di bloccare l'accesso al routing, sulla base dell'url da noi impostato, e quindi blocca l'accesso a specifiche pagine in maniera diversa da canActivate, che necessita una condizione diversa.
* Utilizzare il guard creato per le altre opzioni e inserire in app.routing la proprietà canMatch collegata al Guard

? Precaricamento Moduli permette di caricare i moduli in background, specialmente quelli che non servono subito
! Il router offre 2 opzioni: no preload | preload
* no-preload -> Default. Il lazy load avviene su richiesta di navigazione
* preload -> Tutte le aree del lazy load sono precaricate

*Il lazy load è stato visto nel punto sopra. Per eseguire il lazy di tutti i moduli importare in app.routing e inserire nell'oggetto routerModule la proprietà preloadingStrategy: PreloadAllModules
! Questo fa caricare in lazy tutti i moduli con la proprietà route loadChildren

? Preload Strategico in base alla situazione
* Necessita della proprietà route data: {preload: true} e la creazione di un servizio
* Nel servizio importare PreloadingStrategy che possiede il metodo preload() che ritorna un Observable
? Nell'esempio preload() verifica l'esistenza di un path e della proprietà data nel route. Se ritorna true allora ritorna il path  altrimenti null
! Una volta definito sostituire il PreloadAllModules con il servizio nuovo creato

* Questa procedura permette di caricare un modulo B, quando per esempio accediamo tramite login ad un modulo C. Il servizio creato viene implementato nel Modulo C mentre la configurazione lazy sul modulo B

? Migrazione URL con i REDIRECT
? Il router controlla i redirect nella configurazione del routing prima di eseguire la navigazione
* Nel routing impostare il path su cui fare il redirectTo

? Il codice in app.module permette di ispezionare il routing del modulo.
* Utilizza il Router e la sua proprietà config
*/
