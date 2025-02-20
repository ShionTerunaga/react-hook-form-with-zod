export const RESULT_OK = "ok";
export const RESULT_NG = "ng";

interface OK<T> {
    kind: typeof RESULT_OK;
    value: T;
}

interface NG<T> {
    kind: typeof RESULT_NG;
    value: T;
}

export type Result<T, S> = OK<T> | NG<S>;

export const createResult = {
    ok: <T>(value: T): Result<T, never> => {
        return {
            kind: RESULT_OK,
            value,
        };
    },
    ng: <T>(value: T): Result<never, T> => {
        return {
            kind: RESULT_NG,
            value,
        };
    },
};
