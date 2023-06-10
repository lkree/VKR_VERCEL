const handler = {
    get: (target, prop) => async function (req, res, next, ...rest) {
        try {
            const fn = target[prop];
            if (fn !== undefined)
                return await fn.call(this, req, res, next, ...rest);
        }
        catch (e) {
            if (next && typeof next === 'function')
                next(e);
            else
                console.log(e);
        }
    },
};
class AbstractController {
}
export const BaseController = function () {
    return new Proxy(this, handler);
};
