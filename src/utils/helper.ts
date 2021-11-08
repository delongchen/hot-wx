/**
 * @DECS:
 * @AUTH: myq
 * @DATE: 2021-11-08
 */


export const isDev = (): boolean => {
    return import.meta.env.DEV
};