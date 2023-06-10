import { DEFAULT_MESSAGE_ERROR } from '../../../entities/ErrorMiddleware/index.js';
import { isObject } from '../../../shared/lib/helpers/index.js';
import { assert } from './asserts.js';
import { DEFAULT_FIELD_TO_DATA_EXECUTE, RequestDataFields } from './const.js';
import { propsValidation } from './propsValidation.js';
const makeDecorator = (decoratorCallback) => {
    return (_, __, descriptor) => {
        if (!descriptor)
            return;
        const originalFunction = descriptor.value;
        descriptor.value = async function (...reqProps) {
            return await decoratorCallback.call(this, originalFunction, ...reqProps);
        };
    };
};
export const RequestPropsValidation = (validationObject, fieldToExecuteData = RequestDataFields.Body) => makeDecorator(async function (originalFn, req, res, next, ...rest) {
    propsValidation(validationObject, req[fieldToExecuteData]);
    return await originalFn.call(this, req, res, next, ...rest);
});
export const RequestAssert = (assertObject, fieldToExecuteData = RequestDataFields.Body) => makeDecorator(async function (originalFn, req, res, next, ...rest) {
    assert(assertObject, req[fieldToExecuteData]);
    return await originalFn.call(this, req, res, next, ...rest);
});
export const RequestPropsHandle = (settings) => makeDecorator(async function (originalFn, req, res, next, ...rest) {
    if (settings.validate) {
        settings.validate.forEach(({ validationObject, fieldToExecuteData = DEFAULT_FIELD_TO_DATA_EXECUTE }) => propsValidation(validationObject, req[fieldToExecuteData]));
    }
    if (settings.assert) {
        settings.assert.forEach(({ assertObject, fieldToExecuteData = DEFAULT_FIELD_TO_DATA_EXECUTE }) => assert(assertObject, req[fieldToExecuteData]));
    }
    if (settings.transform) {
        if (settings.transform.in) {
            Object.entries(settings.transform.in).forEach(([dataKey, dataTransformator]) => {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                req.body[dataKey] = dataTransformator(req.body[dataKey]);
            });
        }
        if (settings.transform.out) {
            const resJsonFn = res.json;
            res.json = function (data) {
                if (isObject(data) && data.message && data.message === DEFAULT_MESSAGE_ERROR)
                    return resJsonFn.call(this, data);
                return resJsonFn.call(this, settings.transform.out(data));
            };
        }
    }
    return await originalFn.call(this, req, res, next, ...rest);
});
