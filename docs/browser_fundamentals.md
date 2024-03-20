# How browser works?
* A http server returns html , javascript and css.
* Browser process these files to generate page for us.
* Browser stack:
![browser stack](/docs/browser%20components.png) 
   * user interface what we see in browser.
   * browser engine process all browser related command, like refresh , bookmark etc.
   * rendering enging for processing html, js and css. What ever we see in page is processed by it.
   * rendering enging talks
        * network calls. 
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
![process flow](/docs/process_flow.png).
