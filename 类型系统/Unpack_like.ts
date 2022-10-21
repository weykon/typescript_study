type Unpack<T> = T extends Promise<infer R> ? Unpack<R> : T;
type MultiplyPromise  = Promise<Promise<Promise<Promise<string>>>>
type AAA = Unpack<MultiplyPromise> 