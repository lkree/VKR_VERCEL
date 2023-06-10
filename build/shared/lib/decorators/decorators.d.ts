import { AssertObject } from './asserts.js';
import { RequestDataFields } from './const.js';
import { ValidationObject } from './propsValidation.js';
export declare const RequestPropsValidation: (validationObject: ValidationObject, fieldToExecuteData?: RequestDataFields) => (_: any, __: string, descriptor?: PropertyDescriptor) => void;
export declare const RequestAssert: (assertObject: AssertObject, fieldToExecuteData?: RequestDataFields) => (_: any, __: string, descriptor?: PropertyDescriptor) => void;
interface Settings {
    assert?: Array<{
        assertObject: AssertObject;
        fieldToExecuteData?: RequestDataFields;
    }>;
    validate?: Array<{
        validationObject: ValidationObject;
        fieldToExecuteData?: RequestDataFields;
    }>;
    transform?: {
        in?: Record<string, (d: any) => void>;
        out?: (d: any) => any;
    };
}
export declare const RequestPropsHandle: (settings: Settings) => (_: any, __: string, descriptor?: PropertyDescriptor) => void;
export {};
