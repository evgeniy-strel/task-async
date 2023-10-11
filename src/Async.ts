export function mock(ms: number): Promise<number> {
    return new Promise((resolve, reject) => setTimeout(() => resolve(ms), ms));
}

export async function getData(): Promise<number[]> {
    const result: number[] = [];

    await Promise.all([mock(100), mock(200), mock(300)]).then((numbers) =>
        numbers.forEach((number) => result.push(number)),
    );

    return Promise.resolve(result);
}

export async function catchException(): Promise<string | undefined> {
    try {
        throw new Error('my error');
    } catch (err: any) {
        return err.message;
    }
}
