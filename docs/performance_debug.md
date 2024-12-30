## Performance bottle necks:

* Zone pollution:
   * We might consider executing few logic outside angular zone. If a logic triggers CD for useless reasons.

* Out of bounds CD: 
   * When component triggers CD in unrelated components.
   * We might consider using OnPush and refactoring the code.

* Referentially transperent component:
   * Same template expression repeatedly; even dependent parameters don't change.
   * using pure pipe instead of pure pipes.

* Large component tree:
   * Few compoenents takes more time to finish.
   * We might consider using pagination /virtualization etc.