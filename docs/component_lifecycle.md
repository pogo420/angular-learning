# Component Lifecycle

* Angular runs a change detection cycle.
* Updates dom if change seen.
* Hooks are executed during change detection.
* Two changes are:
    * Projected content. replaces ng-content directive in child.
    * Input bound. 

* Component creation 

| Chronology | Hook | Comment|
|---|----|---|
|1| Constructor() | Not a lifecycle hook; executed during object creation; Inputs are not available |
|2| ngOnChanges() | Every CD; When ever input property changes |
|3| ngOnInit() | First CD ; All inputs are available; view is not initialized; Best place non initialization API calls |
|4| ngDoCheck() | Every CD; even if no change in Input bound property; used for custom CD
|5| ngAfterContentInit() | First CD; When projected component is initialized |
|6| ngAfterContentChecked() | Every CD; even if no projected content |
|7| ngAfterViewInit() | First CD; When view initialized parent + child |
|8| ngAfterViewChecked() | Every CD |
|9| ngOnDestroy() | when we remove component from dom; for cleanup 

