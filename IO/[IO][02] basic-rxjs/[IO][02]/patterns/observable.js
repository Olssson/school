const dataElement = document.getElementById("data");
const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const c3 = document.getElementById("c3");
const c4 = document.getElementById("c4");
const c5 = document.getElementById("c5");
const c6 = document.getElementById("c6");
// PROVIDER
const { fromEvent, operators } = rxjs;
const {map, delay, filter} = operators;

const keyup$ = fromEvent(dataElement, "keyup");

const normalStream$ = keyup$.pipe(
    map(e => e.target.value)
    );
const upperStream$ = normalStream$.pipe(
    map(v => v.toUpperCase())
    );
const delayedStream$ = normalStream$.pipe(
    delay(1000)
);
const onlywitchdupa$ = normalStream$.pipe(
    filter(v => v.includes("dupa"))
    );
const censorOnlywitchdupa$ = onlywitchdupa$.pipe(
    map(v => v.replace("dupa", "****"))
    );
const delayedUpperStream$ = upperStream$.pipe( delay(1000) );

// CONSUMER
normalStream$.subscribe((data) => {
    c1.innerHTML = data;
});
upperStream$.subscribe((data) => {
    c2.innerHTML = data;
});
upperStream$.subscribe((data) => {
    c3.innerHTML = data;
});
delayedStream$.subscribe((data) => {
    c4.innerHTML = data;
});
delayedUpperStream$.subscribe((data) => {
    c5.innerHTML = data;
});
censorOnlywitchdupa$.subscribe((data) => {
    c6.innerHTML = data;
});