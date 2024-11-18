// Advanced Async Patterns

// Custom Promise with Timeout
function withTimeout<T>(promise: Promise<T>, timeout: number): Promise<T> {
    const timeoutPromise = new Promise<never>((_, reject) => {
        setTimeout(() => reject(new Error('Timeout')), timeout);
    });
    return Promise.race([promise, timeoutPromise]);
}

// Async Iterator Pattern
async function* generateSequence(start: number, end: number) {
    for (let i = start; i <= end; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        yield i;
    }
}

// Retry Pattern
async function retry<T>(
    fn: () => Promise<T>,
    retries: number,
    delay: number
): Promise<T> {
    try {
        return await fn();
    } catch (error) {
        if (retries === 0) throw error;
        await new Promise(resolve => setTimeout(resolve, delay));
        return retry(fn, retries - 1, delay);
    }
}

// Async Pool Pattern
async function asyncPool<T>(
    poolLimit: number,
    items: T[],
    iteratorFn: (item: T) => Promise<any>
) {
    const results: any[] = [];
    const executing = new Set();

    for (const item of items) {
        const promise = iteratorFn(item);
        results.push(promise);
        executing.add(promise);

        const clean = () => executing.delete(promise);
        promise.then(clean).catch(clean);

        if (executing.size >= poolLimit) {
            await Promise.race(executing);
        }
    }

    return Promise.all(results);
}

// Cancellable Promise Pattern
interface CancellablePromise<T> extends Promise<T> {
    cancel: () => void;
}

function makeCancellable<T>(promise: Promise<T>): CancellablePromise<T> {
    let isCancelled = false;

    const wrappedPromise = new Promise<T>((resolve, reject) => {
        promise.then(
            value => isCancelled ? reject('Cancelled') : resolve(value),
            error => isCancelled ? reject('Cancelled') : reject(error)
        );
    }) as CancellablePromise<T>;

    wrappedPromise.cancel = () => {
        isCancelled = true;
    };

    return wrappedPromise;
} 