# How browser works?
* A http server returns html , javascript and css.
* Browser process these files to generate page for us.
* Browser stack:
![browser stack](/docs/images/browser%20components.png) 

| stack | comments |
|---|---|
| User Interface | What we see in browser|
|Browser engine | Browser features => bookmark/ refresh/e.t.c.|
|Rendering engine| Processes html, css and JS.|

* rendering enging provides:
   *  managing network calls. 
   * JS engine.
   * UI backend -> browser UI elements.


* Basic flow of page creation:
   * HTML -> DOM(Document object model) tree.
   * CSS -> Style rules.
   * DOM and Styles rules are merged to form rendering tree. 
   * Rendering tree is tagged/mapped to layout.
   * Final stage is painting in layout.

* Layout is the rectangular coordinate system, each location is having a dirty bit.
* In case of change only a selected area is repainted, not complete page.
* Dirty bit implies change. 
* Here is the flow in diagram.
![process flow](/docs/images/process_flow.png).
