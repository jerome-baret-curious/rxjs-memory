# RxJS observables and memory

Shows some observables that "need" to be unsubscribed.

You can comment `takeUntilDestroyed(this.destroyRef)` in a component to
test what happens.

You can also use the `aVarMember` field to check when a component can be
garbage collected or not by using the Memory tab of Chrome Developer Tools.
